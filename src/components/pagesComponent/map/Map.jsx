import React, { Component , useEffect, useRef, useState } from 'react'
import geoJson from '../../../data/geo.json'
import { http } from '../../../api/axios.csrf';
import * as d3 from 'd3'
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import ProgressBar from './progressBar';

const Map=()=>{
    const [postsPref, setPostPref] = useState([])
    const noDuplicatedPrefSet = new Set(postsPref);

    const noDuplicatedPrefArr = Array.from(noDuplicatedPrefSet)
    const isFirstRender= useRef(false);

    // Post情報 から　行ったことのあるprefecture情報を取得
    const getPrefecture = ()=>{
        http.get('/sanctum/csrf-cookie')
        .then(async response=>{
            const{ data } = await  http.get('/api/posts')
            setPostPref(data.map(post=>{
                return post.prefecture
            }))
        })

    }

    useEffect(()=>{
        isFirstRender.current = true
        getPrefecture()
    },[])



    useEffect(()=>{
        if(isFirstRender.current){
            isFirstRender.current = false
        }else{
            drawmap()
        }
    },[postsPref])

    // 行ったことのある県のパーセント計算
    const digit = 1
    const commitPersent = parseFloat((noDuplicatedPrefArr.length /47 *100).toFixed(digit))

    const drawmap = () =>{
                const width = 1000; // 描画サイズ: 幅
                const height = 500; // 描画サイズ: 高さ
                const centerPos = [137.0, 38.2]; // 地図のセンター位置
                const scale = 1500; // 地図のスケール

                // 地図の投影設定
                const projection = d3
                .geoMercator()
                .center(centerPos)
                .translate([width / 2, height / 2])
                .scale(scale);

        // 地図をpathに投影(変換)
        const path = d3.geoPath().projection(projection);

        // SVG要素を追加
        const svg = d3
        .select(`.div`)
        .append(`svg`)
        .attr(`viewBox`, `0 0 ${width} ${height}`)
        .attr(`width`, `100%`)
        .attr(`height`, `100%`);

        //
        // [ メモ ]
        // 動的にGeoJsonファイルを読み込む場合は以下のコードを使用
        // const geoJson = await d3.json(`/japan.geo.json`);
        //

        // 都道府県の領域データをpathで描画
        svg
        .selectAll(`path`)
        .data(geoJson.features)
        .enter()
        .append(`path`)
        .attr(`d`, path)
        .attr('id', item=>{
            return item.properties.name_ja
          })
          .attr(`stroke`, `#666`)
          .attr(`strokeWidth`, 0.25)
          .attr(`fill`, item =>{
              if(noDuplicatedPrefArr.includes(item.properties.name_ja)){
                  return '#00897b'
              }else{
                  return '#fff'
              }

          })
          .attr(`fill-opacity`,1.0)
        }

        return(
            <>
            <Container  sx={{mt:10, ml: '8%', width: '95%'}} >
            <Grid container spacing={3}>
              <Grid item xs={12} md={8} lg={9}>
                <Paper
                  sx={{
                      p: 2,
                    display: 'flex',
                    flexDirection: 'column',
                    height: 600,
                    textAlign: 'center',
                    position:'relative',
                }}
                >
                <div className='div' style={{height:600}}></div>
                </Paper>
              </Grid>
              <Grid item xs={12} md={4} lg={3}>
                <Paper
                  sx={{
                      p: 2,
                      display: 'flex',
                      flexDirection: 'column',
                      height: 240,
                    }}
                    >
                    <ProgressBar persantage={commitPersent}/>
                </Paper>
              </Grid>
            </Grid>
          </Container>

            </>
        )

    }
export default Map;
