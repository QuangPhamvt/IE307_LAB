import { createNativeStackNavigator } from "@react-navigation/native-stack"
import {
	SafeAreaView,
	Text,
	TextInput,
	TouchableOpacity,
	View,
} from "react-native"
import { HomeNativeStackParamList } from "../../type"
import { MainHomeScreen } from "./components/MainHomScreenComponent"
import { NoteAppHomeScreen } from "./components/NoteAppHomeScreenComponent"
import { useRecoilValue } from "recoil"
import { themeState } from "../../../store"

const HomeNativeStack = createNativeStackNavigator<HomeNativeStackParamList>()

export const HomeScreen = () => {
	const { theme } = useRecoilValue(themeState)
	return (
		<HomeNativeStack.Navigator
			screenOptions={({ route, navigation }) => ({
				animationDuration: 100,
				animation: "fade_from_bottom",
				header: () => {
					if (route.name === "Main") {
						return (
							<SafeAreaView className="w-full h-16 border-gray-500 border-solid border-b-[1px] ">
								<View
									className={`flex items-center justify-center h-full ${
										theme === "Dark" && "bg-[#1a1a1a]"
									} `}>
									<Text
										className={`text-xl font-bold  ${
											theme === "Dark" ? "text-blue-400 " : "text-orange-500"
										} `}>
										Note App
									</Text>
								</View>
							</SafeAreaView>
						)
					}
					if (route.name === "NoteApp") {
						return (
							<SafeAreaView className="">
								<View
									className={`flex flex-row items-center justify-start w-full h-16 border-gray-500 border-solid border-b-[1px] ${
										theme === "Dark" && "bg-gray-600"
									}`}>
									<TouchableOpacity
										className="w-1/3"
										onPress={() => navigation.navigate("Main")}>
										<View className="">
											<Text
												className={`${
													theme === "Dark" ? "text-white " : "text-orange-500"
												} `}>
												Go back
											</Text>
										</View>
									</TouchableOpacity>
									<Text
										className={`text-xl font-bold  ${
											theme === "Dark" ? "text-white " : "text-orange-500"
										} `}>
										{route.params.id && "EditNote"}
										{!route.params.id && "AddNote"}
									</Text>
								</View>
							</SafeAreaView>
						)
					}
				},
			})}>
			<HomeNativeStack.Screen name="Main" component={MainHomeScreen} />
			<HomeNativeStack.Screen name="NoteApp" component={NoteAppHomeScreen} />
		</HomeNativeStack.Navigator>
	)
}
