import axios from "axios";
import type {
    AxiosRequestConfig,
    AxiosInstance,
    AxiosResponse,
    AxiosError,
} from "axios";
import Crypto from "../Crypto";
import {string} from "yaml/dist/schema/common/string";
export const service: AxiosInstance = axios.create({
    baseURL: BASE_URL, // url = base url + request url
    timeout: 20000, // request timeout
});

const axiosRequest = (config: AxiosRequestConfig) => {
    // @ts-ignore
    config.headers["DateTime"] = new Date().toString();
    // 对所有POST请加密，必须是json数据提交，不支持表单
    if (config.method === "post" && HTTP_ENCRYPT) {
        // @ts-ignore
        config.headers["content-type"] = "application/json; charset=utf-8";
        config.data = Crypto.EncryptData(JSON.stringify(config.data));
    }
    return config;
};

const axiosResponse = (response: AxiosResponse) => {
    if(typeof(response.data.data) === "string"){
        response.data.data = Crypto.DecryptData(response.data.data);
    }
    return response.data;
};

const axiosError = (error: AxiosError) => {
    console.log("request error:", error);
    return Promise.reject(error);
};

/* 总请求拦截 */
service.interceptors.request.use(axiosRequest, axiosError);
/* 总响应拦截 */
service.interceptors.response.use(axiosResponse, axiosError);
