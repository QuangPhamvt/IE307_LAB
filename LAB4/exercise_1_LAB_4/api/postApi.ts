import { AxiosResponse } from "axios"
import { PATH } from "./PATH"
import { axiosClient } from "./axiosClient"

export const PostApi = {
	getPostList: (): Promise<
		AxiosResponse<
			Array<{
				id: number
				title: string
				price: number
				description: string
				category: string
				image: string
				rating: {
					rate: number
					count: number
				}
			}>
		>
	> => {
		const url = PATH.POST_LIST
		return axiosClient.get(url)
	},
}
