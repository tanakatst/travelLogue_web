import {http} from './axios.csrf'

const fetchInitialData = () => http.get('/api/initialData')


export {fetchInitialData}