import * as api from "../api/AuthApi";
import { toast } from "react-toastify";
import { useQuery, useMutation, useQueryClient } from "react-query";
import { useRouter } from "next/router";
import { useAuth } from "../hooks/context/AuthContext";
import { User } from "../types/User";

const useUser = () => {
  const data = useQuery("getUser", () => api.getUser.then((res) => res.data), {
    onSuccess: (res) => {
      return res.data;
    },
    onError: (error) => {
      return error;
    },
  });
  return data.data;
};

const useLogin = () => {
  return useMutation(api.login, {
    onSuccess: (res) => {
      return res;
    },
    onError: (error) => {
      toast.error("エラーが発生しました。");
      // console.log(error)
    },
  });
};

const useRegister = () => {
  return useMutation(api.register, {
    onSuccess: (res) => {
      return res;
    },
    onError: (res) => {
      toast.error("エラーが発生しました");
      console.log(res);
    },
  });
};

const useLogout = () => {
  // ルーターの処理
  const router = useRouter();
  const { setIsAuth } = useAuth();
  return useMutation(api.logout, {
    onSuccess: (res) => {
      setIsAuth(false);
      router.push("/");
    },
    onError: () => {
      console.log("失敗しました。");
      toast.error("ログアウトに失敗しました。");
    },
  });
};

export { useUser, useLogin, useLogout, useRegister };
