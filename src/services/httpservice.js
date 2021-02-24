import axios from 'axios';

export const url = 'https://mvind-test-app.herokuapp.com/api';

export const axiosCall = axios.create({
    baseURL: url,
});

const axiosMethods = {
    get: axiosCall.get,
    post: axiosCall.post,
    patch: axiosCall.patch,
    delete: axiosCall.delete,
    axiosCall,
}

export default axiosMethods;
