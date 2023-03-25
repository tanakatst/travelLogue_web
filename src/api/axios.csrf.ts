import axios from "axios";




const http = axios.create({
    baseURL: 'http://localhost:8888',
    headers:{
        'X-Requested-with':'XMLHttpRequest',
    },
    withCredentials: true,
  });


  export{http};
