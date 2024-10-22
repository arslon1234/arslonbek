import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://xamidulloxu-blog-app-10.deno.dev/api"
})
export default axiosInstance