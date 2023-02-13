
import axios from 'axios'
import { User } from '../types/User';
import { http } from './axios.csrf';

const getUser = async()=>{
    const {data} = await http.get<User>(`/api/user`)
    return data;
}
// 画像のポストもできるようにする。




const login = async ({email, password}: {email: string, password:string})=>{
    await http.get('/sanctum/csrf-cookie')
    .then(async response=>{
        await http.post<User>(`/api/login`,
            {email, password}
        ).then(async data =>{
            console.log({data})
             return {data}
        })
    })
}
const logout = async ()=>{
    // await axios.get('http://localhost:8888/sanctum/csrf-cookie', {withCredentials: true})

    await http.get('/sanctum/csrf-cookie')
    .then(async response=>{
        const {data} = await http.post<User>(`/api/logout`)
        return data;
    })
}

const register = async ({username, email, password, confirmPass}: {username:string, email: string, password:string, confirmPass:string})=>{
    await http.get('/sanctum/csrf-cookie')
    .then(async response=>{
        const {data} = await http.post<User>('/api/register',
        {username, email, password}
        )
        return data;
    })
}



export{
    getUser,
    login,
    logout,
    register
}
