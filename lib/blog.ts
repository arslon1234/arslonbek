import axiosInstance from "./axios";
const getBlog = async () => {
  const response = (await axiosInstance.get("/titles")).data;
  return response;
};
const getBlogById = async (slug: string | string[]) => {
  const response = (await axiosInstance.get(`/blogs/${slug}`)).data
  return response
};
export { getBlog, getBlogById };
