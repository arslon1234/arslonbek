import axiosInstance from "./axios"
const getBlog =async()=>{
  const response = (await axiosInstance.get('/titles')).data
  return response
}
export {getBlog}