import {
	useRecoilSnapshot,
	useRecoilState,
	useRecoilValue,
	useSetRecoilState,
} from "recoil"
import { editProfileFormState } from "./atom"
import { userState } from "../../../../store/atom"

const useChangeProfile = () => {
	const editProfileForm = useRecoilValue(editProfileFormState)
	const [user, setUser] = useRecoilState(userState)
	const onChangeProfile = () => {
		if (user.address && user.name) {
			const { phone, username, email } = user
			const { city, street, number } = user.address
			const { firstname, lastname } = user.name
			setUser({
				...user,
				address: {
					...user.address,
					city: editProfileForm.city ? editProfileForm.city : city,
					street: editProfileForm.street ? editProfileForm.street : street,
					number: editProfileForm.housenumber
						? editProfileForm.housenumber
						: number,
				},
				name: {
					firstname: editProfileForm.firstname
						? editProfileForm.firstname
						: firstname,
					lastname: editProfileForm.lastname
						? editProfileForm.lastname
						: lastname,
				},
				username: editProfileForm.username
					? editProfileForm.username
					: username,
				phone: editProfileForm.phonenumber
					? editProfileForm.phonenumber
					: phone,
				email: editProfileForm.email ? editProfileForm.email : email,
			})
		}
	}
	return { onChangeProfile }
}
const ProfileAction = {
	useChangeProfile,
}
export default ProfileAction
