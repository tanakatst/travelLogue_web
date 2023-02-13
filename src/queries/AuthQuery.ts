import * as api from '../api/AuthApi'
import { toast } from 'react-toastify';
import { useQuery, useMutation, useQueryClient } from 'react-query';
import { useRouter } from 'next/router';
import { useAuth } from '../../hooks/AuthContext';


const useUser = ()=>{
    return useQuery('user', ()=>api.getUser())
}
const useLogin =()=>{
    const router = useRouter();
    return useMutation(api.login,{
        onSuccess:(res)=>{
            router.push('/home')
            console.log(res)
        },
        onError:(error)=>{
            console.log(error)
        }
    })
}


const useLogout = ()=>{
    // ルーターの処理
    const router = useRouter();
    const {setIsAuth} = useAuth();
    return useMutation(api.logout,{
        onSuccess: (res)=>{
            setIsAuth(false)
            router.push('/');
        },
        onError:(()=>{
            console.log('失敗しました。')
            toast.error('ログアウトに失敗しました。')
        })
    })
}


export {
    useUser,
    useLogin,
    useLogout
}
