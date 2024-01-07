import React from "react"
import {
	StackNavigationProp,
	createStackNavigator,
} from "@react-navigation/stack"
import MainStack from "./components/MainStack"
import AddPlaces from "./components/AddPlaces"
import { PlacesStackParamList } from "../../type"
import {  TouchableOpacity, View } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { useRecoilState, useRecoilValue } from "recoil"
import { locationState, selectLocationState } from "../../store/atom"
import MapStack from "./components/MapStack"
import OriginPlaces from "./components/OriginPlaces"
import MapOriginPlaces from "./components/MapOriginPlaces"

const Stack = createStackNavigator<PlacesStackParamList>()
const PlacesBottomTab = () => {
	const [location, setLocation]= useRecoilState(locationState)
  const selectLocation = useRecoilValue(selectLocationState)
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
      <Stack.Screen
				options={{
					headerTitle: "Map",
					headerBackTitle: "Add a new place",
					headerRight: () => (
						<TouchableOpacity 
              onPress={() => {
                if(selectLocation)
                setLocation(selectLocation)
                navigation.navigate("AddNewPlace")
              }}
            >
							<View className="pr-2">
								<AntDesign name="save" size={24} />
							</View>
						</TouchableOpacity>
					),
				}}
        name="MapPlaces" component={MapStack}/>
      <Stack.Screen name="OriginPlaces" component={OriginPlaces}/>
      <Stack.Screen name="MapOrignPlaces" component={MapOriginPlaces}/>
		</Stack.Navigator>
	)
}

export default PlacesBottomTab
