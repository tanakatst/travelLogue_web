import { http } from "../lib/axios.csrf";

const fetchInitialData = () => http.get("/api/initialData");

export { fetchInitialData };
