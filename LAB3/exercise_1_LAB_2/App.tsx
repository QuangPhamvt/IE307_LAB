// PHAM MINH QUANG MSSV:21522517
import "react-native-gesture-handler"
import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"

import { RootNativeStackParamList } from "./screen/types"
import { LogInScreen, SignUpScreen, HomeScreen } from "./screen"
import { AppContext, AppContextProvider } from "./Store"
import { HomeDetailScreen } from "./screen/HomeDetailScreen"
import { NotificationDetailScreen } from "./screen/NotificationDetailScreen"
const Stack = createNativeStackNavigator<RootNativeStackParamList>()
export default function App() {
	return (
		<AppContextProvider>
			<Screen />
		</AppContextProvider>
	)
}

const Screen = () => {
	const appContext = React.useContext(AppContext)
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{ headerShown: false }}
				initialRouteName="LogIn">
				{appContext?.isLoggedIn === "success" ? (
					<>
						<Stack.Screen name="HomeScreen" component={HomeScreen} />
						<Stack.Screen
							options={{ headerShown: true }}
							name="HomeDetailScreen"
							component={HomeDetailScreen}
						/>
						<Stack.Screen
							options={{ headerShown: true }}
							name="NotificationDetailScreen"
							component={NotificationDetailScreen}
						/>
					</>
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
