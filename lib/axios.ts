import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://blog.arxsolution.uz/api"
})
export default axiosInstance