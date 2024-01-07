import {
	StackNavigationProp,
	createStackNavigator,
} from "@react-navigation/stack"
import React from "react"
import { TouchableOpacity } from "react-native"
import { MediaStackParamList } from "../../type"
import MyGallery from "./components/MyGallery"
import RecordVideo from "./components/RecordVideo"
import { AntDesign } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"

const Stack = createStackNavigator<MediaStackParamList>()
const MediaBottomTab = () => {
	const navigation =
		useNavigation<StackNavigationProp<MediaStackParamList, "MainMedia">>()
	return (
		<Stack.Navigator initialRouteName="MainMedia">
			<Stack.Screen
				options={{
					headerTitle: "My Gallery",
					headerRight: () => {
						return (
							<TouchableOpacity
								onPress={() => navigation.navigate("RecordVideo")}
								className="pr-2">
								<AntDesign name="videocamera" size={26} />
							</TouchableOpacity>
						)
					},
				}}
				name="MainMedia"
				component={MyGallery}
			/>
			<Stack.Screen name="RecordVideo" component={RecordVideo} />
		</Stack.Navigator>
	)
}

export default MediaBottomTab
