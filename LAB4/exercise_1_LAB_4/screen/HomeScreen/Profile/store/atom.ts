import { atom } from "recoil"
type TEditProfileFormState = {
	firstname: string | null
	lastname: string | null
	username: string | null
	email: string | null
	phonenumber: string | null
	housenumber: number | null
	street: string | null
	city: string | null
}
export const editProfileFormState = atom<TEditProfileFormState>({
	key: "editProfileFormStateAtom",
	default: {
		firstname: null,
		lastname: null,
		username: null,
		email: null,
		phonenumber: null,
		housenumber: null,
		street: null,
		city: null,
	},
})
