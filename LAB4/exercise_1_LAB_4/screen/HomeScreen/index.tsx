import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { HomeTabParamsList } from "../types"
import { Home } from "./Home"
import { Categories } from "./Catagories"
import { Profile } from "./Profile"
import { Favorites } from "./Favorites"
import { AntDesign, FontAwesome, Octicons } from "@expo/vector-icons"
import { View } from "react-native"
import { useRecoilValue } from "recoil"
import { cartState, userState } from "../../store/atom"
import { AuthAction } from "../../store/hook"
import React from "react"

const Tab = createBottomTabNavigator<HomeTabParamsList>()
export const HomeScreen = () => {
	const user = useRecoilValue(userState)
	const { onGetCart } = AuthAction.useGetCart()
	const cart = useRecoilValue(cartState)
	React.useEffect(() => {
		if (user.id) onGetCart(user.id)
	}, [user.id])
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
			<Tab.Screen
				options={{ headerShown: false }}
				name="Home"
				component={Home}
			/>
			<Tab.Screen
				options={{ headerShown: false }}
				name="Categories"
				component={Categories}
			/>
			<Tab.Screen name="Favorites" component={Favorites} />
			<Tab.Screen
				options={{ headerShown: false }}
				name="Profile"
				component={Profile}
			/>
		</Tab.Navigator>
	)
}
