import { SafeAreaView, Text, View } from "react-native"
import HeaderViewer from "./components/header"
import Option from "./components/options"
import FeedBack from "./components/feedback"
import QA from "./components/QA"

export default function App() {
	return (
		<SafeAreaView className="flex flex-1 ">
			<View className="m-4">
				<HeaderViewer />
				<Option />
				<FeedBack />
				<QA />
			</View>
		</SafeAreaView>
	)
}
