import React from "react"
import { View, Text, Switch } from "react-native"

const Option = () => {
	const [theme, setTheme] = React.useState("light")
	const [isNotification, setIsNotification] = React.useState<boolean>(false)
	const handleTheme = () => {
		if (theme === "light") setTheme("dark")
		if (theme === "dark") setTheme("light")
	}
	const handleIsNotification = () => {
		setIsNotification((preState) => !preState)
	}
	return (
		<View className="flex flex-col gap-2 p-2 mt-2">
			<View className="flex flex-row justify-between">
				<Text className="text-lg">Dark Mode</Text>
				<Switch
					value={theme === "light" ? false : true}
					onChange={handleTheme}
				/>
			</View>
			<View className="flex flex-row justify-between">
				<Text className="text-lg">Notifications</Text>
				<Switch value={isNotification} onChange={handleIsNotification} />
			</View>
		</View>
	)
}
export default Option
