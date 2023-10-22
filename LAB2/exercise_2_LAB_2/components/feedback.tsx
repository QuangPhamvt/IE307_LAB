import { Text, TextInput, TouchableOpacity, View } from "react-native"

const FeedBack = () => {
	return (
		<View className="flex flex-col gap-4">
			<Text className="text-xl">Feedback</Text>
			<View className="border-gray-300 border-[1px] rounded-lg p-2 h-36">
				<TextInput multiline={true} placeholder={"Your feedback here..."} />
			</View>
			<TouchableOpacity className="flex items-center justify-center p-4 bg-blue-500 rounded-lg w-fit">
				<Text>SEND FEEDBACK</Text>
			</TouchableOpacity>
		</View>
	)
}

export default FeedBack
