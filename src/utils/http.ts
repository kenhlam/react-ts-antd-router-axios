import axios from "axios";
import Qs from 'qs';
import config from '@/config'
let target =  config.domain;

const instance = axios.create({
    //创建axios实例，在这里可以设置请求的默认配置
    timeout: 50000,
    baseURL: target
});

instance.defaults.headers.post["Content-Type"] =
    "application/json;charset=UTF-8";

// 设置http状态码
// let httpCode = {
//     301: "资源(网页等)被永久转移到其它URL",
//     400: "请求参数错误",
//     401: "权限不足, 请重新登录",
//     403: "服务器拒绝本次访问",
//     404: "请求资源未找到",
//     500: "内部服务器错误",
//     501: "服务器不支持该请求中使用的方法",
//     502: "网关错误",
//     504: "网关超时"
// };

/** 添加请求拦截器 **/
instance.interceptors.request.use(
    config => {
        if (config.headers["Content-Type"] && config.headers["Content-Type"].indexOf("application/x-www-form-urlencoded") != -1) {
            config.data = Qs.stringify(config.data)
        }
        return config;
    },
    error => {
        // 请求错误调用reject返回错误信息
        return Promise.reject(error);
    }
);

/** 添加响应拦截器  **/
instance.interceptors.response.use(
    response => {
        return Promise.resolve(response.data)
    },
    error => {
        if (error.response) {
            // 根据请求失败的http状态码去给用户相应的提示
            // this.$message.error(res.msg)
            return Promise.reject(error);
        } else {
            // this.$message.error(res.msg)
            return Promise.reject(new Error("请求超时, 请刷新重试"));
        }
    }
);

/* 统一封装get请求 */
export const KY_Get = (url, params, config = {}) => {
    return new Promise(
        (resolve, reject) => {
            instance({
                method: "get",
                url,
                params,
                ...config
            })
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
        }
    );
};

/* 统一封装post请求  */
export const KY_Post = (url, data, config = {}) => {

    return new Promise((resolve, reject) => {

        instance({
            method: "post",
            url,
            data,
            ...config
        })
            .then(response => {
                resolve(response);
            })
            .catch(error => {
                reject(error);
            });
    });
};
