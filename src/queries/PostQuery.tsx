import * as api from "../api/PostApi";
import { useMutation, useQuery } from "react-query";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import { Post } from "../types/Post";

const useGetPosts = () => {
  return useQuery("getPosts", () => api.getPosts.then((res) => res.data), {
    onSuccess: (res) => {
      return res.data;
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

const usePost = () => {
  return useMutation(api.post, {
    onSuccess: (res) => {
      console.log("投稿に成功しました。");
      return res;
    },
    onError: () => {
      toast.error("エラーが発生しました。");
    },
  });
};

const useUpdatePost = () => {
  return useMutation(api.updatePost, {
    onSuccess: (res) => {
      console.log("更新に成功しました。");
      return res;
    },
    onError: () => {
      toast.error("エラーが発生しました。");
    },
  });
};
const useDeletePost = () => {
  return useMutation(api.deletePost, {
    onSuccess: (res) => {
      console.log("削除に成功しました。");
      return res;
    },
    onError: () => {
      toast.error("削除に失敗しました。");
    },
  });
};

export { useGetPosts, usePost, useDeletePost, useUpdatePost };
