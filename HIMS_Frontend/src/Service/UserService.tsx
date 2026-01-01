
import axiosInterceptor from "../Interceptor/AxiosInterceptor";

const registerUser = async (user: any) => {
    return axiosInterceptor.post('/user/register', user)
    .then((response: any) => response.data)
    .catch((error: any) => { throw error; });
}

const loginUser = async (credentials: any) => {
    return axiosInterceptor.post('/user/login', credentials)
    .then((response: any) => response.data)
    .catch((error: any) => { throw error; });
}


export { registerUser, loginUser };