import { NavigationContainer } from "@react-navigation/native"
import { HomeScreen } from "./HomeScreen"
import { RootNativeStackParamList } from "./types"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { LogInScreen } from "./LogInScreen"
import { SignUpScreen } from "./SignUpScreen"
import { useRecoilValue } from "recoil"
import { userState } from "../store/atom"
import React from "react"
const Stack = createNativeStackNavigator<RootNativeStackParamList>()
const Screen = () => {
	const user = useRecoilValue(userState)
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{ headerShown: false }}
				initialRouteName="LogIn">
				{user.state === "hasValue" ? (
					<Stack.Screen name="HomeScreen" component={HomeScreen} />
				) : (
					<>
						<Stack.Screen name="LogIn" component={LogInScreen} />
						<Stack.Screen name="SignUp" component={SignUpScreen} />
					</>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	)
}
export default Screen
