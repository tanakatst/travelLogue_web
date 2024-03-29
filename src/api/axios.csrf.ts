import axios from "axios";



const http = axios.create({
    baseURL: process.env.NEXT_PUBLIC_APP_END_POINT,
    headers:{
        'X-Requested-with':'XMLHttpRequest',
    },
    withCredentials: true,
  });


  export{http};
