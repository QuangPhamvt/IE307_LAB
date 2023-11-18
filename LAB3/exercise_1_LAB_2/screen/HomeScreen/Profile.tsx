import React from "react"
import { SafeAreaView, View, Text, TouchableOpacity } from "react-native"
import { AppContext } from "../../Store"

export const Profile = () => {
	const appContext = React.useContext(AppContext)
	const handleLogOut = () => {
		appContext?.setIsLoggedIn("idle")
	}
	return (
		<SafeAreaView>
			<View className="flex items-center justify-center h-full space-y-3">
				<Text>Profile Screen</Text>
				<TouchableOpacity onPress={handleLogOut}>
					<Text className="text-blue-400">Log Out</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	)
}
