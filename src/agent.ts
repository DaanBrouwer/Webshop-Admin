import axios, { AxiosResponse } from "axios";
import { Product } from "./Models/product";

axios.defaults.baseURL = 'https://localhost:5001/api';
axios.defaults.withCredentials = true;
const responseBody = (response: AxiosResponse) => response.data;

const request = {
    get: (url: string) => axios.get(url).then(responseBody),
    post: (url: string, body:{}) => axios.post(url, body).then(responseBody),
    put: (url: string, body:{}) => axios.put(url, body).then(responseBody),
    delete: (url: string) => axios.delete(url).then(responseBody),
}

const ProductList = {
    list: () => request.get('products'),
    removeItem: (productId : number) => request.delete(`productId=${productId}`),
    updateProduct: (product : Product) => request.put(``,{}),
    addProduct: (product : Product) => request.post(``,{}),
}

const agent = {
    ProductList,
}
export default agent