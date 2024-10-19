import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://3.68.219.212:3000/api"
})
export default axiosInstance