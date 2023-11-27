import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { HomeTabParamList } from "../type"
import { SettingView } from "./SettingScreen"
import { HomeScreen } from "./HomeScreen"
import { View, Text } from "react-native"
import { Feather } from "@expo/vector-icons"
import { AntDesign } from "@expo/vector-icons"
import { useRecoilValue } from "recoil"
import { themeState } from "../../store"
const Tab = createBottomTabNavigator<HomeTabParamList>()
export const HomeView = () => {
	const { theme } = useRecoilValue(themeState)
	return (
		<Tab.Navigator
			initialRouteName="Home"
			screenOptions={({ route }) => ({
				tabBarActiveBackgroundColor: theme === "Dark" ? "black" : "white",
				tabBarInactiveBackgroundColor: theme === "Dark" ? "black" : "white",
				headerShown: false,
				tabBarIcon: ({ focused }) => {
					if (route.name === "Home")
						return (
							<View
								className={`flex h-full w-full items-center justify-center ${
									focused ? "border-t-[1px] border-t-black" : ""
								}`}>
								<Feather
									name="home"
									size={24}
									color={focused ? "blue" : "#ccc"}
								/>
							</View>
						)
					if (route.name === "Settings")
						return (
							<View
								className={`flex h-full w-full items-center justify-center ${
									focused ? "border-t-[1px] border-t-black" : ""
								}`}>
								<AntDesign
									name="setting"
									size={24}
									color={focused ? "blue" : "#ccc"}
								/>
							</View>
						)
				},
			})}>
			<Tab.Screen name="Home" component={HomeScreen} />
			<Tab.Screen name="Settings" component={SettingView} />
		</Tab.Navigator>
	)
}
