import { StatusBar } from "expo-status-bar"
import { ScrollView, StyleSheet, Text, View } from "react-native"
import Header from "./components/header"
import Post from "./components/post"
export default function App() {
	return (
		<ScrollView
			className="h-full mt-[40px] mx-[2px] bg-gray-300 "
			showsVerticalScrollIndicator={false}>
			<Header />
			<Post />
		</ScrollView>
	)
}
