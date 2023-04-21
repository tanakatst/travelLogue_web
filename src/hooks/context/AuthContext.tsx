import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { getUser } from "../../api/AuthApi";
import { useRouter } from "next/router";

type AuthContextProps = {
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
};

const AuthContext = createContext<AuthContextProps>({
  isAuth: false,
  setIsAuth: () => {},
});

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [isAuth, setIsAuth] = useState(false);
  const router = useRouter();
  //認証されていない状態でもOKなURL
  const nonAuthAcceptUrl = ['/','/login', '/register']
  useEffect(() => {
    // if(!nonAuthAcceptUrl.includes(router.pathname) && isAuth === false){
    //     // router.push('/login')
    // }
  }, []);
  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
