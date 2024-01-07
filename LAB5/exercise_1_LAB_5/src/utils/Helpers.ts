import * as FileSystem from "expo-file-system"
import * as ImagePicker from "expo-image-picker"
import * as Notifications from "expo-notifications"

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
export async function schedulePushNotification (title: string, body: string) {
  try {
    const {status: existingStatus } = await Notifications.getPermissionsAsync()
    let finalStatus = existingStatus
    if(existingStatus !== "granted"){
      const {status} =  await Notifications.requestPermissionsAsync()
      finalStatus = status
    }
    if(finalStatus !== "granted"){
      alert('Failed to get push token for push notification!');
      return;
    }
    Notifications.setNotificationHandler({
      handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
      }),
    });
    await Notifications.scheduleNotificationAsync({
      content: { title: title, body: body, data: {data: "goes here"} },
      trigger: null
    })
  } catch (error) {
    console.log(error);
    
  }
}
