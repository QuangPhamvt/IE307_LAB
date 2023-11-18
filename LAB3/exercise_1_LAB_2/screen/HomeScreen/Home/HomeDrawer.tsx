import { useNavigation } from "@react-navigation/native"
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native"
export const HomeDrawer = () => {
	const navigation = useNavigation()
	const handleGoToDetail = () => {
		navigation.navigate("HomeDetailScreen")
	}
	return (
		<SafeAreaView>
			<View className="flex items-center justify-center w-full h-full space-y-2">
				<Text>Home</Text>
				<TouchableOpacity
					className="p-2 bg-blue-600"
					onPress={handleGoToDetail}>
					<Text className="text-white">GO TO DETAIL</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	)
}
