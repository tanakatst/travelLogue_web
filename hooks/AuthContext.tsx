import React, {createContext, ReactNode, useContext, useState} from "react";
import { getUser } from '../src/api/AuthApi';

type AuthContextProps = {
    isAuth: boolean
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>
}


const AuthContext = createContext<AuthContextProps>({
    isAuth: false,
    setIsAuth: ()=>{}
})


export const AuthProvider:React.FC<{children: ReactNode}> = ({ children })=>{
    const [isAuth, setIsAuth] = useState(false);
        getUser().then((value)=>{
            if(value && typeof value ==='number'){
                setIsAuth(true);
                console.log(value);
            }else{
                setIsAuth(false)
            }
            })
    return(
        <AuthContext.Provider value={{isAuth, setIsAuth}}>
            { children }
        </AuthContext.Provider>
    )
}

export const useAuth =()=> useContext(AuthContext)
