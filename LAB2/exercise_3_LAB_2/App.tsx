import { SafeAreaView, View } from "react-native"
import React from "react"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { NavigationContainer } from "@react-navigation/native"
import { RootNativeStackParamList } from "./screen/types"
import { LogInScreen, SignUpScreen } from "./screen"
import { HomeScreen } from "./screen/HomeScreen"
type AppProps = {
	children: React.ReactNode
}
type AppContextProps = {}
const AppContext = React.createContext<AppContextProps | null>(null)
const AppContextProvider: React.FC<AppProps> = (props) => {
	const { children } = props
	return <AppContext.Provider value={{}}>{children}</AppContext.Provider>
}
const Stack = createNativeStackNavigator<RootNativeStackParamList>()
export default function App() {
	return (
		<AppContextProvider>
			<NavigationContainer>
				<Stack.Navigator
					initialRouteName="Home"
					screenOptions={{ headerShown: false }}>
					<Stack.Screen name="LogIn" component={LogInScreen} />
					<Stack.Screen name="SignUp" component={SignUpScreen} />
					<Stack.Screen name="Home" component={HomeScreen} />
				</Stack.Navigator>
			</NavigationContainer>
		</AppContextProvider>
	)
}
