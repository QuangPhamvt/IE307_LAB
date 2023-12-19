import { atom } from "recoil"
import { TState } from "../utilities"

type TLogInFormState = {
	username: string | null
	password: string | null
}
type TLogInState = {
	state: TState
	message: string | null
}
type TUserState = {
	state: TState
	id: number | null
	email: string | null
	username: string | null
	password: string | null
	name: {
		firstname: string
		lastname: string
	} | null
	address: {
		city: string
		street: string
		number: number
		zipcode: string
		geolocation: {
			lat: string
			long: string
		}
	} | null
	phone: string | null
}
type TCartState = {
	state: TState
	id: number | null
	userId: number | null
	date: string | null
	products: Array<{
		productId: number
		quantity: number
	}>
}
export const logInFormState = atom<TLogInFormState>({
	key: "logInFormStateAtom",
	default: {
		username: null,
		password: null,
	},
})
export const logInState = atom<TLogInState>({
	key: "logInStateAtom",
	default: {
		state: "idle",
		message: null,
	},
})
export const userState = atom<TUserState>({
	key: "userStateAtom",
	default: {
		state: "idle",
		address: null,
		name: null,
		id: null,
		username: null,
		email: null,
		password: null,
		phone: null,
	},
})

export const cartState = atom<TCartState>({
	key: "cartStateAtom",
	default: {
		state: "idle",
		id: null,
		userId: null,
		date: null,
		products: [],
	},
})
