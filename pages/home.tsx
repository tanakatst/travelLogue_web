/* eslint-disable react/jsx-key */
import React, {useEffect, useState} from "react";
// import {useLogout}
import { http } from "../src/api/axios.csrf";
import ShowPost from "../src/components/pagesComponent/home/myPost/showPost";
import { Box, Divider, Stack, Typography, makeStyles} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2';
import Container from "@mui/material/Container";
import PostModal from "../src/components/pagesComponent/home/myPost/postModal";
import NavbarLayout from "../src/components/Navigation/NavbarLayout";
import MainFeature from "../src/components/pagesComponent/home/MainFeature";
import { useUser } from "../src/queries/AuthQuery";
import RightBar from "../src/components/pagesComponent/home/RightBar";
import { ChangeNav } from "../src/components/atoms/ChangeNav";
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import ShowPeoplePost from '../src/components/pagesComponent/home/peoplePost.tsx/showPeoplePost';
import { getPosts } from "../src/api/PostApi";
import { useGetPosts } from "../src/queries/PostQuery";
import { Card } from "@mui/joy";
/**
 *
 * ログアウトボタンからリクエストが渡ると、queryにわたり、logout APIが実行されるように実装
 * ログアウトの
 * →navbar components の呼び出しをする（それぞれの要素は変更できるように・）
 */
interface image{
    created_at:Date,
    id:number,
    name:string,
    path:string,
    post_id:number,
    updated_at:Date
}
type Post = {
    id: number
    title: string
    prefecture: string
    user_id: number
    content: string
    created_at: Date
    updated_at:Date
    images:image[]
}
const Home = ()=>{

    const [renderFlg, setRenderFlg] = useState<boolean>(true);
    // Hooks(Query)を使用するとloadingになるため直接記述
    const [posts, setPosts] =useState<Post[] | undefined>([])
    // api の処理の戻り値を受け取る
    const getPosts =  ()=>{
        http.get('/sanctum/csrf-cookie')
        .then(async response=>{
            const{ data } = await  http.get<Post[]>('/api/posts')
            const reversedData = data?.reverse()
            setPosts(reversedData);
        })
    }
    const [username, setUsername] = useState<string>()
    const data = useUser().data?.name
    const getUserName = ()=>{
        setUsername(data)
    }

    // bottom navigation によるstate管理
    const [bottomState, setBottomState] = useState(0)
    // 投稿した瞬間に動かしたい。
    useEffect(()=>{
        getPosts()
    },[])

    // 投稿がされたらレンダリングする
    useEffect(()=>{
        getUserName()
    },[data]);
    return(
        <>
            <NavbarLayout>
                <Container maxWidth='lg' className='static'>
                <MainFeature />
                        <Box flexGrow={1}>
            {/* <img src="http://localhost:8888/storage/images/kyoto.jpeg" alt=""  style={{width:100,height:500}}/> */}
                            <Grid container spacing={3} justifyContent='space-between'>
                                    <Grid xs={12}>
                                        <Box pt={5} width='95%' margin='auto'>
                                            <Typography variant="h5" font-Weight='bold' textAlign='center' fontWeight={600}>
                                                {username} さんの投稿
                                            </Typography>
                                            <ChangeNav/>
                                                {/* button navigation 予定 */}
                                        </Box>
                                        <div style={{position:"fixed", bottom:15, right: 15,zIndex:5 }} >
                                            <PostModal />
                                        </div>
                                        {/* 自分の投稿 */}
                                        {bottomState==0?
                                            <Grid container  sx={{marginTop:3}}  justifyContent='space-around' spacing={2} >
                                                {posts?.map((post,index) =>
                                                (
                                                    <ShowPost title = {post.title} prefecture = {post.prefecture} content = {post.content} id={post.id} time= {post.created_at} image={post.images} key= {index}  />
                                                )
                                                )}
                                            </Grid>
                                        :
                                        //みんなの投稿
                                        <Grid container  sx={{mx:'auto' }}  spacing={2} >
                                        {posts?.map((post,index) =>
                                        (

                                            <ShowPost title = {post.title} prefecture = {post.prefecture} content = {post.content} id={post.id} time= {post.created_at} image={post.images} key= {index}  />

                                        )
                                        )}
                                        </Grid>}
                                    </Grid>
                            </Grid>
                        </Box>
                </Container>
                {/* <PostComponent  /> */}
            </NavbarLayout>

        </>
    )
}
export default Home;
