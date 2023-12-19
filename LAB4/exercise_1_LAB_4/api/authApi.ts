import { AxiosResponse } from "axios"
import { PATH } from "./PATH"
import { axiosClient } from "./axiosClient"

export const AuthApi = {
	postLogin: <T extends { username: string; password: string }>(
		payload: T
	): Promise<
		AxiosResponse<{
			token: string
		}>
	> => {
		const url = PATH.LOGIN
		return axiosClient.post(url, payload)
	},
	getMe: <T extends { id: number }>(
		payload: T
	): Promise<
		AxiosResponse<{
			id: number
			email: string
			username: string
			password: string
			name: {
				firstname: string
				lastname: string
			}
			address: {
				city: string
				street: string
				number: number
				zipcode: string
				geolocation: {
					lat: string
					long: string
				}
			}
			phone: string
		}>
	> => {
		const url = `${PATH.GET_ME}${payload.id}`
		return axiosClient.get(url)
	},
}
