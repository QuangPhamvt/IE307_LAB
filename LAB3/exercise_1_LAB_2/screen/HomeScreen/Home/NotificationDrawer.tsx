import { useNavigation } from "@react-navigation/native"
import React from "react"
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native"

export const NotificationDrawer: React.FC = () => {
	const navigation = useNavigation()
	const handleGoToDetail = () => {
		navigation.navigate("NotificationDetailScreen")
	}
	return (
		<SafeAreaView>
			<View className="flex items-center justify-center w-full h-full space-y-2">
				<Text>Notification</Text>
				<TouchableOpacity
					className="p-2 bg-blue-500"
					onPress={handleGoToDetail}>
					<Text className="text-white">GO TO DETAIL</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	)
}
