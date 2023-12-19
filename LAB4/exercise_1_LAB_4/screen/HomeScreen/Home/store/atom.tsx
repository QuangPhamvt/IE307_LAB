import { atom } from "recoil"
import { TState } from "../../../../utilities"

type TPostListState = {
	state: TState
	contents: Array<{
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
}
export const postListState = atom<TPostListState>({
	key: "postListStateAtom",
	default: {
		state: "idle",
		contents: [],
	},
})
