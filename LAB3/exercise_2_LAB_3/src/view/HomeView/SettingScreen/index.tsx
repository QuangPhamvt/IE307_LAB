import { SafeAreaView, Switch, Text, View } from "react-native"
import { useRecoilState } from "recoil"
import { themeState } from "../../../store"
import Slider from "@react-native-community/slider"

export const SettingView = () => {
	const [getThemeState, setThemeState] = useRecoilState(themeState)
	const handleChangeTheme = () => {
		setThemeState((preState) => ({
			...preState,
			theme: getThemeState.theme === "Dark" ? "Light" : "Dark",
		}))
	}
	return (
		<SafeAreaView>
			<View
				className={`pl-4 flex items-start justify-center w-full h-12 border-gray-500 border-solid border-b-[1px]  ${
					getThemeState.theme === "Dark" && "bg-gray-500"
				}`}>
				<Text
					className={`text-lg font-bold ${
						getThemeState.theme === "Dark" && "text-white"
					} `}>
					Settings
				</Text>
			</View>
			<View
				className={`flex items-center justify-center w-full h-full px-8 space-y-4 ${
					getThemeState.theme === "Dark" && "bg-[#1A1A1A]"
				}`}>
				<View className="flex flex-row items-center justify-between w-full space-x-4">
					<Text
						style={{ fontSize: getThemeState.fontSize }}
						className={`${getThemeState.theme === "Dark" && "text-white"}`}>
						Dark Mode
					</Text>
					<Switch
						onChange={handleChangeTheme}
						value={getThemeState.theme === "Dark" ? true : false}
					/>
				</View>
				<View className="flex flex-col items-center w-full">
					<View className="flex flex-row items-center justify-between w-full space-x-4">
						<Text
							style={{ fontSize: getThemeState.fontSize }}
							className={`${getThemeState.theme === "Dark" && "text-white"}`}>
							Font Size
						</Text>
						<Text
							style={{ fontSize: getThemeState.fontSize }}
							className={`${getThemeState.theme === "Dark" && "text-white"}`}>
							{getThemeState.fontSize}
						</Text>
					</View>
					<Slider
						style={{ width: 240 }}
						value={getThemeState.fontSize}
						onValueChange={(fontSize) => {
							setThemeState((preState) => ({
								...preState,
								fontSize: Math.round(fontSize),
							}))
						}}
						minimumValue={1}
						maximumValue={32}
					/>
				</View>
			</View>
		</SafeAreaView>
	)
}
