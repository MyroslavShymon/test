import axios from "axios";

export const API_URL = "http://localhost:9530/"


const $host = axios.create({
    baseURL: "http://localhost:9530/api",
});

const $authHost = axios.create({
    baseURL: "http://localhost:9530/",
});

const authInterceptor = (config: any) => {
    config.headers.authorization = `Bearer ${localStorage.getItem("token")}`;
    return config;
};

$authHost.interceptors.request.use(authInterceptor);

export {$host, $authHost};
