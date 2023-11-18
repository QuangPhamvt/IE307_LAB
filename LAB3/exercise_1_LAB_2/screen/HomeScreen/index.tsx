import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { HomeTabParamsList } from "../types"
import { Home } from "./Home"
import { Categories } from "./Categories"
import { Profile } from "./Profile"
import { Favorites } from "./Favorites"
import { AntDesign, FontAwesome, Octicons } from "@expo/vector-icons"
import { Text, View } from "react-native"

const Tab = createBottomTabNavigator<HomeTabParamsList>()
export const HomeScreen = () => {
	return (
		<Tab.Navigator
			initialRouteName="HomeTab"
			screenOptions={({ route }) => ({
				tabBarLabel: ({ focused }) => {
					if (route.name === "HomeTab")
						return (
							<Text
								className={`${focused ? "text-blue-500" : "text-gray-500"}`}>
								Home
							</Text>
						)
					if (route.name === "Categories")
						return (
							<Text
								className={`${focused ? "text-blue-500" : "text-gray-500"}`}>
								Categories
							</Text>
						)
					if (route.name === "Favorites")
						return (
							<Text
								className={`${focused ? "text-blue-500" : "text-gray-500"}`}>
								Favorites
							</Text>
						)
					if (route.name === "Profile")
						return (
							<Text
								className={`${focused ? "text-blue-500" : "text-gray-500"}`}>
								Profile
							</Text>
						)
				},
				tabBarIcon: ({ focused }) => {
					if (route.name === "HomeTab")
						return (
							<View className="items-center justify-center w-full h-full">
								<AntDesign
									name="home"
									size={24}
									color={focused ? "blue" : "black"}
								/>
							</View>
						)
					if (route.name === "Categories")
						return (
							<View>
								<AntDesign
									name="appstore1"
									size={24}
									color={focused ? "blue" : "black"}
								/>
							</View>
						)
					if (route.name === "Favorites")
						return (
							<View>
								<Octicons
									name="heart-fill"
									size={24}
									color={focused ? "blue" : "black"}
								/>
							</View>
						)
					if (route.name === "Profile")
						return (
							<View>
								<FontAwesome
									name="user"
									size={24}
									color={focused ? "blue" : "black"}
								/>
							</View>
						)
				},
			})}>
			<Tab.Screen
				options={{ headerShown: false }}
				name="HomeTab"
				component={Home}
			/>
			<Tab.Screen name="Categories" component={Categories} />
			<Tab.Screen name="Favorites" component={Favorites} />
			<Tab.Screen name="Profile" component={Profile} />
		</Tab.Navigator>
	)
}
