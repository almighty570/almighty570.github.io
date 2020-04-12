import axios from 'axios';
import { camelToSnake } from "@/helpers/core";

export const setup = () => {
    // request interceptor
    debugger;
    axios.interceptors.request.use(function (config) {
        // Do something before request is sent
        let camel = camelToSnake(config);
        return camel;
        // return camelToSnake(config);
    }, function (error) {
        // Do something with request error
        return Promise.reject(error);
    });

    // response interceptor
    axios.interceptors.response.use(function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return snakeToCamel(response);
    }, function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    });
}


export const http = axios.create({
    baseURL: `http://localhost:3000/`
})