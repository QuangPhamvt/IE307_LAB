import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React from "react"
import { View } from "react-native"
import { RootNativeStackParamList } from "./type"
import { MediaBottomTab, PlacesBottomTab } from "./View"
import { useGetLocation } from "./store/hook"

const Stack = createBottomTabNavigator<RootNativeStackParamList>()
const Router = () => {
	const { onGetLocation } = useGetLocation()
	React.useEffect(() => {
		onGetLocation()
	}, [])
	return (
		<Stack.Navigator
			screenOptions={{ headerShown: false }}
			initialRouteName="Places">
			<Stack.Screen name="Places" component={PlacesBottomTab} />
			<Stack.Screen name="Media" component={MediaBottomTab} />
		</Stack.Navigator>
	)
}

export default Router
