import * as FileSystem from "expo-file-system"
import * as ImagePicker from "expo-image-picker"
const imageDirectory = FileSystem.documentDirectory + "IE307_LAB_5"

export const ensureDirectoryExist = async () => {
	const directoryInfo = await FileSystem.getInfoAsync(imageDirectory)
	if (!directoryInfo.exists)
		await FileSystem.makeDirectoryAsync(imageDirectory, { intermediates: true })
}
export const saveImage = async (uri: string) => {
	await ensureDirectoryExist()
	const fileName = new Date().getTime() + ".jpg"
	const destination = imageDirectory + fileName
	await FileSystem.copyAsync({ from: uri, to: destination })
	return destination
}
export const getImageInDevice = async (useLibrary: boolean) => {
	let result: ImagePicker.ImagePickerResult
	const option: ImagePicker.ImagePickerOptions = {
		mediaTypes: ImagePicker.MediaTypeOptions.Images,
		allowsEditing: true,
		aspect: [5, 3],
		quality: 0.75,
	}
	if (useLibrary) {
		result = await ImagePicker.launchImageLibraryAsync(option)
	} else {
		await ImagePicker.requestCameraPermissionsAsync()
		result = await ImagePicker.launchCameraAsync(option)
	}
	return result
}
