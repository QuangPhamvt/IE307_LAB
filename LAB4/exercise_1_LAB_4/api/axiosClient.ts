//PHAM MINH QUANG mssv: 21522517
import axios, { AxiosError, AxiosInstance, AxiosResponse } from "axios"
// Boot Instance
const axiosClient = axios.create({
	// `baseURL` will be prepended to `url` unless `url` is absolute.
	// It can be convenient to set `baseURL` for an instance of axios to pass relative URLs
	// to methods of that instance.
	baseURL: "https://fakestoreapi.com/",
})
// Setup Interceptors
// Interceptor Request
const onRequest = async (config: any) => {
	// const resetAuth = useResetRecoilState(authState)
	try {
		return config
	} catch (error: any) {
		console.log(error)
	}
}
const onRequestError = (error: AxiosError): Promise<AxiosError> => {
	console.log(error.request?.status)

	return Promise.reject(error.request)
}
const onResponse = (response: AxiosResponse): AxiosResponse => {
	return response
}
const onResponseError = async (error: AxiosError): Promise<AxiosError> => {
	// console.log(error.response?.headers)
	console.error(error.response?.status)
	return Promise.reject(error.response)
}
const setupInterceptors = (axiosInstance: AxiosInstance) => {
	axiosInstance.interceptors.request.use(onRequest, onRequestError)
	axiosInstance.interceptors.response.use(onResponse, onResponseError)
	return axiosInstance
}
setupInterceptors(axiosClient)
export { axiosClient }
