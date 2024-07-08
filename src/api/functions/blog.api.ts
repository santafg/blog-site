import ApiReq, { BackendApiReq } from "../axiosinstance";
import { IBlogApiResponse, IBlogBackendApiResponse } from "../../interface/blog.interface";
import { endpoints } from "../endpoints";

export const getAllBlogs = async (): Promise<IBlogApiResponse> => {
  const res = await ApiReq.get(endpoints.blog.get_all);
  return res.data;
};
export const getAllSeverBlogs = async (): Promise<IBlogBackendApiResponse> => {
  const res = await BackendApiReq.get(endpoints.blog.get_all_backend);
  return res.data;
};
