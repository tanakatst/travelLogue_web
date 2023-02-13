import React from "react";
import { http } from "./axios.csrf";
import { title } from 'process';

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

const getPosts = async () =>{
    const{ data } = await  http.get<Post[]>('/api/posts')
    return data;
}

const post = async (formData:FormData) => {
    await http.get('/sanctum/csrf-cookie')
    .then(async response=>{
        const data = await http.post('/api/posts',
        formData,
        {headers:{ "content-type": "multipart/form-data"}}
        )
        console.log(data)
    })
}

const updatePost = async({id,title,prefecture,content}:{id:number,title:string,prefecture:string,content:string}) =>{
    await http.get('/sanctum/csrf-cookie')
    .then(async response=>{
        const {data} = await http.put<Post>(
            `/api/posts/${id}`, {title,prefecture,content}
        )
        return data
    })
}

const deletePost = async(id:number) =>{
    await http.get('/sanctum/csrf-cookie')
    .then(async response=>{
        const {data} = await http.delete<Post>(
            `/api/posts/${id}`
            )
        return data
    })
}



export {
    getPosts,
    post,
    updatePost,
    deletePost
}
export function getUser(): any {
    throw new Error('Function not implemented.');
}

