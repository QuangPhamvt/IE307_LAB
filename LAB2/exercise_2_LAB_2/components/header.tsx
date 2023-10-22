import { View, Text, Image } from "react-native"
const HeaderViewer = () => {
	return (
		<View className="flex flex-col items-center justify-center gap-2">
			<Image
				className="w-[120px] h-[120px] rounded-full "
				source={require("../assets/rn-logo.png")}
			/>
			<Text className="font-bold">React Native App</Text>
		</View>
	)
}
export default HeaderViewer
