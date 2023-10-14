import { View, Text, StyleSheet } from "react-native"

const Header = () => {
	return (
		<>
			<View className="h-[60px] w-fit flex justify-center items-center bg-blue-600">
				<Text className="text-2xl text-white font-bold">Social Media Feed</Text>
			</View>
		</>
	)
}
export default Header
