import React from "react"
import {
	Alert,
	Keyboard,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native"
import { themState } from "../App"

type feedbackProps = {
	theme: themState
	isNotifications: boolean
	onSetFeadbackList: (feedbackItem: string) => void
}
const FeedBack = (props: feedbackProps) => {
	const { theme, isNotifications, onSetFeadbackList } = props
	const [text, setText] = React.useState<string>("")
	const createNotificationAlert = () => {
		Alert.alert("Thank you for your feedback!", "", [{ text: "Ok" }])
	}
	return (
		<View
			className="flex flex-col gap-4"
			onTouchStart={() => Keyboard.dismiss()}>
			<Text className={`text-xl ${theme.TEXT_COLOR}`}>Feedback</Text>
			<View className="border-gray-300 border-[1px] rounded-lg p-2 h-36">
				<TextInput
					multiline={true}
					placeholder={"Your feedback here..."}
					className={`${theme.TEXT_COLOR}`}
					placeholderTextColor={`${theme.STATE === "light" ? "#ccc" : "#fff"}`}
					keyboardType="default"
					onChangeText={(text) => setText(text)}
					autoFocus={false}
					value={text}
				/>
			</View>
			<TouchableOpacity
				onPress={() => {
					onSetFeadbackList(text)
					setText("")
					isNotifications && createNotificationAlert()
				}}
				className="flex items-center justify-center p-4 bg-blue-500 rounded-lg w-fit">
				<Text className={`text-white font-bold`}>SEND FEEDBACK</Text>
			</TouchableOpacity>
		</View>
	)
}

export default FeedBack
