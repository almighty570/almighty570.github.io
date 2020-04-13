import axios from 'axios';
// import { camelToSnake } from "@/helpers/core";
// import camelcaseKeys from 'camelcase-keys';
// import snakeCaseKeys from 'snakecase-keys';

export const http = axios.create({
    baseURL: `https://sneaky-fold.glitch.me/`
})

// export const appplyInterceptors = () => {
//     http.interceptors.request.use(function (config) {
//         config.url = "http://localhost:3000" + config.url
//         return snakeCaseKeys(config);
//     }, function (error) {
//         return Promise.reject(error);
//     });
//     http.interceptors.response.use(function (response) {
//         debugger;
//         let d = camelcaseKeys(response);
//         return d;
//     }, function (error) {
//         return Promise.reject(error);
//     });
// }