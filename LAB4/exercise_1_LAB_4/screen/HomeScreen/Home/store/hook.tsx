import { useSetRecoilState } from "recoil"
import { postListState } from "./atom"
import { PostApi } from "../../../../api/postApi"

const useGetPostList = () => {
	const setPostList = useSetRecoilState(postListState)
	const onGetPostList = async () => {
		try {
			setPostList({ state: "loading", contents: [] })
			const { data } = await PostApi.getPostList()
			setPostList({ state: "hasValue", contents: data })
		} catch (error) {}
	}
	return { onGetPostList }
}

export const HomeAction = {
	useGetPostList,
}
