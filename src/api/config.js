import axios from "axios";

export const baseUrl = "http://127.0.0.1:1080";

// axios 实例 及 拦截器配置
const axiosInstance = axios.create({ baseUrl });

axiosInstance.interceptors.response.use(
  res => res.data,
  err => {
    console.log(err, "网络错误");
  }
);

export { axiosInstance };
