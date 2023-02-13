import React,{useEffect, useRef} from "react";
import * as THREE from 'three'
import Link from "next/link";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import style from '../pages/scss/module/index.module.scss'
const ThreeDEarth = ()=>{
    useEffect(() => {


        let width = innerWidth
        let height = innerHeight
        window.addEventListener('resize', () => {
            width = window.innerWidth
            height = window.innerHeight
            camera.aspect = width / height
            camera.updateProjectionMatrix()
            renderer.setSize(width,height)
            renderer.setPixelRatio(window.devicePixelRatio)
          })

        let canvas = document.getElementsByTagName('canvas');
        if (canvas.length > 0) {
            canvas[0].style.zIndex = -1;
           }
        // look up the size the canvas is being displayed

        // var ctx = canvas.getContext('2d');
    //   const renderer = new THREE.WebGLRenderer()

    //   const elm = mountRef.current

    //   elm?.appendChild(renderer.domElement)

    //   renderer.setPixelRatio(window.devicePixelRatio)
    //   renderer.setSize(w, h)

    let sphereEarth;
    let sphereCrowd;
    let sphereUniverse;





    //   ステージ
    const scene = new THREE.Scene()
    // const sphere = new THREE.Mesh(
    //       new THREE.SphereGeometry(100,20,20),
    //       new THREE.MeshLambertMaterial({color:0x8dc3ff})
    //   );
    //   sphere.position.set(0,0,0);
    //   scene.add(sphere);
    // const loader = new THREE.TextureLoader();
    // loader.load('https://82mou.github.io/threejs/img/earth.jpg', function(texture){
    //     createEarth(texture)
    //     render();
    // });


    // 地球テクスチャー
    const loader = new THREE.TextureLoader();
        loader.load('https://82mou.github.io/threejs/img/real-earth.jpg', function(texture){
           createEarth(texture)
             render();
    });

    // 雲テクスチャー
        loader.load('https://82mou.github.io/threejs/img/crowd.png', function(texture){
            createCrowd(texture);
            render();
        })
    // 宇宙テクスチャー
    loader.load('https://82mou.github.io/threejs/img/universe.jpg', function(texture) {
      createUniverse(texture);
      render();
    });


    // 地球の作成
    function createEarth(texture){
            sphereEarth = new THREE.Mesh(
            new THREE.SphereGeometry(100, 30, 30),
            new THREE.MeshLambertMaterial({
                map: texture
            })
        );
        sphereEarth.position.set(0,0,0);
        scene.add(sphereEarth)
    }
    // 雲の作成
    function createCrowd (texture){
            sphereCrowd = new THREE.Mesh(
            new THREE.SphereGeometry(82,20,20),
            new THREE.MeshLambertMaterial({
                map: texture,
                transparent: true,
                side: THREE.DoubleSide
            })
        );
        sphereCrowd.position.set(0,0,0)
        scene.add(sphereCrowd);
    }
    // 宇宙の作成
    function createUniverse(texture) {
             sphereUniverse = new THREE.Mesh(
          new THREE.SphereGeometry(10000, 20, 20), // 形状
          new THREE.MeshLambertMaterial({ // 材質
           map: texture,
           side: THREE.DoubleSide // 裏からも見えるようにする
          })
        );
        sphereUniverse.position.set(0, 0, 0);
        scene.add(sphereUniverse);
      };

    //   ライト
    const light = new THREE.DirectionalLight(0xffffff, 2.5);
        light.position.set(100,130,80);
        scene.add(light);
    const anbiment = new THREE.AmbientLight(0x222222);
        scene.add(anbiment);

    //   カメラ
        const camera = new THREE.PerspectiveCamera(45, width /height, 1, 10000);
        camera.position.set(200,100,300);
        camera.lookAt(scene.position)

    // コントロール
        // ヘルパー
    // const gridHelper = new THREE.GridHelper(200, 20);
    //     scene.add(gridHelper);
    // const axesHelper = new THREE.AxesHelper(1000)
    //     scene.add(axesHelper);
    // const lightHelper = new THREE.DirectionalLightHelper(light, 20);
    //     scene.add(lightHelper);

    // レンダラー
        const renderer = new THREE.WebGL1Renderer({antialias: true});
            renderer.setSize(width, height);
            renderer.setViewport(0,0,width,height)
            renderer.setClearColor(0xeeeeee)
            renderer.setPixelRatio(window.devicePixelRatio);
    document.getElementById('stage')?.appendChild(renderer.domElement);

    function render(){
        requestAnimationFrame(render)
        sphereEarth.rotation.y += 0.001;
        renderer.render(scene, camera)
    }

    }, [])
    return (
        <div id="stage" className={style.stage}>
        </div>
    )
  }
export default ThreeDEarth

