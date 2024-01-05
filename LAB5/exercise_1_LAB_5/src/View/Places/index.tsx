import React from "react"
import {
	StackNavigationProp,
	createStackNavigator,
} from "@react-navigation/stack"
import MainStack from "./components/MainStack"
import AddPlaces from "./components/AddPlaces"
import { PlacesStackParamList } from "../../type"
import { Text, TouchableOpacity, View } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { useRecoilValue } from "recoil"
import { locationState } from "../../store/atom"

const Stack = createStackNavigator<PlacesStackParamList>()
const PlacesBottomTab = () => {
	const location = useRecoilValue(locationState)
	const navigation =
		useNavigation<StackNavigationProp<PlacesStackParamList, "MainPlaces">>()
	React.useEffect(() => {
		location && console.log(location.coords)
	}, [location])
	return (
		<Stack.Navigator
			screenOptions={{ headerShown: true }}
			initialRouteName="MainPlaces">
			<Stack.Screen
				options={{
					headerTitle: "My Places",
					title: "My Places",
					headerRight: () => (
						<TouchableOpacity
							onPress={() => navigation.navigate("AddNewPlace")}>
							<View className="pr-2">
								<AntDesign name="pluscircle" size={32} />
							</View>
						</TouchableOpacity>
					),
				}}
				name="MainPlaces"
				component={MainStack}
			/>
			<Stack.Screen
				options={{
					headerTitle: "Add a new Place",
					headerBackTitle: "My places",
				}}
				name="AddNewPlace"
				component={AddPlaces}
			/>
		</Stack.Navigator>
	)
}

export default PlacesBottomTab
