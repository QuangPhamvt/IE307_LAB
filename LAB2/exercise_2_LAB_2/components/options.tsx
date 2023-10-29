import React from "react"
import { View, Text, Switch } from "react-native"
import { themState } from "../App"

type optionProps = {
	theme: themState
	onSetTheme: () => void
	isNotifications: boolean
	onSetIsNotifications: () => void
}
const Option = (props: optionProps) => {
	const { theme, onSetTheme, isNotifications, onSetIsNotifications } = props
	return (
		<View className="flex flex-col gap-2 p-2 mt-2">
			<View className="flex flex-row justify-between">
				<Text className={`text-lg ${theme.TEXT_COLOR}`}>Dark Mode</Text>
				<Switch
					value={theme.STATE === "light" ? false : true}
					onChange={() => {
						onSetTheme()
					}}
				/>
			</View>
			<View className="flex flex-row justify-between">
				<Text className={`text-lg ${theme.TEXT_COLOR}`}>Notifications</Text>
				<Switch value={isNotifications} onChange={onSetIsNotifications} />
			</View>
		</View>
	)
}
export default Option
