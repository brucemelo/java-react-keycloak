import axios from 'axios';
import {AuthContextProps} from "react-oidc-context";

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8081/api'
});

export const setupAxiosInterceptors = (auth: AuthContextProps) => {
    axiosInstance.interceptors.request.use(async (config) => {
        config.headers['Authorization'] = `Bearer ${auth?.user?.access_token}`;
        return config;
    });

    axiosInstance.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response) {
                if (error.response.status === 401) {
                    console.log(auth);
                    if (!auth.isLoading && !auth.isAuthenticated || auth.isAuthenticated && auth.user?.expired) {
                        void auth.signinRedirect();
                    }
                }
            }
            return Promise.reject(error);
        }
    );
};

export default axiosInstance;
