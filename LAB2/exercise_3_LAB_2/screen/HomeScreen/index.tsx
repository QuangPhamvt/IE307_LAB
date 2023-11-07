import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { HomeTabParamsList } from "../types"
import { Home } from "./Home"
import { Categories } from "./Categories"
import { Profile } from "./Profile"
import { Favorites } from "./Favorites"
import { AntDesign, FontAwesome, Octicons } from "@expo/vector-icons"
import { View } from "react-native"

const Tab = createBottomTabNavigator<HomeTabParamsList>()
export const HomeScreen = () => {
	return (
		<Tab.Navigator
			initialRouteName="Home"
			screenOptions={({ route }) => ({
				tabBarIcon: ({ focused }) => {
					if (route.name === "Home")
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
			<Tab.Screen name="Home" component={Home} />
			<Tab.Screen name="Categories" component={Categories} />
			<Tab.Screen name="Favorites" component={Favorites} />
			<Tab.Screen name="Profile" component={Profile} />
		</Tab.Navigator>
	)
}
