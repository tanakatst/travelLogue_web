import { useQuery } from "react-query";
import * as api from '../api/InitialFetchApi'
const useGetInitialData = () => {
    const response = useQuery("getInitialData",async () => await api.fetchInitialData().then((res) => res.data), {
      onSuccess: (res) => {
        return res.data;
      },
      onError: (error) => {
        return error;
      },
    });
    return response
  };


export {useGetInitialData}