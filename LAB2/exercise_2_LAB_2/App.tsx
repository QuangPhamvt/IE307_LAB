import { SafeAreaView, Text, View } from "react-native"
import HeaderViewer from "./components/header"
import Option from "./components/options"
import FeedBack from "./components/feedback"
import QA from "./components/QA"
import React from "react"
export type themState = {
	STATE: string
	BACKGROUND_COLOR: string
	TEXT_COLOR: string
}
const light = {
	STATE: "light",
	BACKGROUND_COLOR: "bg-white",
	TEXT_COLOR: "text-black",
}
const dark = {
	STATE: "dark",
	BACKGROUND_COLOR: "bg-black",
	TEXT_COLOR: "text-white",
}
export default function App() {
	const [theme, setTheme] = React.useState<themState>(light)
	const [isNotifications, setIsNotifications] = React.useState<boolean>(false)
	const [feedbackList, setFeedbackList] = React.useState<string[]>([])
	const handleTheme = () => {
		setTheme((preState) => (preState.STATE !== "light" ? light : dark))
	}
	const handleSetIsNotifications = () => {
		setIsNotifications((preState) => !preState)
	}
	const handleSetFeedbackList = (feedbackItem: string) => {
		setFeedbackList((preState) => [...preState, feedbackItem])
	}
	return (
		<SafeAreaView className={`flex flex-1`}>
			<View className={`h-full ${theme.BACKGROUND_COLOR}`}>
				<View className="m-4">
					<HeaderViewer theme={theme} />
					<Option
						theme={theme}
						onSetTheme={handleTheme}
						isNotifications={isNotifications}
						onSetIsNotifications={handleSetIsNotifications}
					/>
					<FeedBack
						theme={theme}
						onSetFeadbackList={handleSetFeedbackList}
						isNotifications={isNotifications}
					/>
					<QA feedbackList={feedbackList} theme={theme} />
				</View>
			</View>
		</SafeAreaView>
	)
}
