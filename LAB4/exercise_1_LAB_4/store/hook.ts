import "core-js/stable/atob"
import { useRecoilValue, useResetRecoilState, useSetRecoilState } from "recoil"
import { cartState, logInFormState, userState } from "./atom"
import { Alert } from "react-native"
import { AuthApi } from "../api"
import { jwtDecode } from "jwt-decode"
import { cartApi } from "../api/cartApi"

const useLogIn = () => {
	const { username, password } = useRecoilValue(logInFormState)
	const setUser = useSetRecoilState(userState)
	const alert = (message: string) =>
		Alert.alert(message, undefined, [
			{
				text: "Oke",
			},
		])
	const onLogIn = async () => {
		try {
			let user
			if (!username || !password)
				throw { data: "Username or password is empty" }
			const { data } = await AuthApi.postLogin({ username, password })
			const decode = jwtDecode(data.token)
			if (decode.sub) {
				const { data } = await AuthApi.getMe({ id: +decode.sub })
				setUser({ state: "hasValue", ...data })
			}
		} catch (error: any) {
			alert(error.data)
		}
	}
	return { onLogIn }
}
const useLogOut = () => {
	const resetAuth = useResetRecoilState(userState)
	const resetLogIn = useResetRecoilState(logInFormState)
	const resetCart = useResetRecoilState(cartState)
	const onLogOut = () => {
		resetAuth()
		resetLogIn()
		resetCart()
	}
	return { onLogOut }
}
const useGetCart = () => {
	const setCart = useSetRecoilState(cartState)
	const onGetCart = async (id: number) => {
		try {
			setCart({
				state: "loading",
				id: null,
				userId: null,
				date: null,
				products: [],
			})
			const { data } = await cartApi.getCartList({ id })
			setCart({
				state: "hasValue",
				id: data[0].id,
				userId: data[0].userId,
				date: data[0].date,
				products: data[0].products,
			})
		} catch (error) {
			console.log(error)
		}
	}
	return { onGetCart }
}
export const AuthAction = {
	useLogIn,
	useLogOut,
	useGetCart,
}
