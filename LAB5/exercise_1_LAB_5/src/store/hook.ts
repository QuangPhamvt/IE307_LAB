import { useSetRecoilState } from "recoil"
import { imageSelectedState, locationState } from "./atom"
import { getImageInDevice } from "../utils/Helpers"
import * as Location from "expo-location"
import { Alert } from "react-native"

export const useGetImageToUp = () => {
	const setImage = useSetRecoilState(imageSelectedState)
	const onGetImageToUp = async (useLib: boolean) => {
		try {
			const url = await getImageInDevice(useLib)
			url?.assets?.[0] && url.assets[0].uri && setImage(url.assets[0].uri)
		} catch (error) {
			console.log(error)
		}
	}
	return { onGetImageToUp }
}
export const useGetLocation = () => {
	const setLocation = useSetRecoilState(locationState)
	const alert = (message: string) =>
		Alert.alert(message, undefined, [{ text: "Oke" }])
	const onGetLocation = async () => {
		try {
			let { status } = await Location.requestForegroundPermissionsAsync()
			if (status !== "granted") {
				alert("Permission to access location was denied")
				return
			}
			let location: Location.LocationObject =
				await Location.getCurrentPositionAsync({})
			setLocation(location)
		} catch (error) {}
	}
	return { onGetLocation }
}
