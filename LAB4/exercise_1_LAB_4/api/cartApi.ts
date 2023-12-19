import { AxiosResponse } from "axios"
import { axiosClient } from "./axiosClient"
import { PATH } from "./PATH"

export const cartApi = {
	getCartList: <T extends { id: number }>(
		payload: T
	): Promise<
		AxiosResponse<
			Array<{
				id: number
				userId: number
				date: string
				products: Array<{
					productId: number
					quantity: number
				}>
			}>
		>
	> => {
		const url = `${PATH.CART_LIST}${payload.id}`
		return axiosClient.get(url)
	},
}
