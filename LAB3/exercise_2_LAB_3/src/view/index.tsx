import { createNativeStackNavigator } from "@react-navigation/native-stack"
import { RootNativeStackParamList } from "./type"
import { HomeView } from "./HomeView"
import NoteAction from "../hook"
import React from "react"

const NativeStack = createNativeStackNavigator<RootNativeStackParamList>()
export const Router = () => {
	const { handleGetListNote } = NoteAction.useGetListNote()
	React.useEffect(() => {
		handleGetListNote()
	}, [])
	return (
		<NativeStack.Navigator initialRouteName="HomeScreen">
			<NativeStack.Screen
				options={{
					headerShown: false,
				}}
				name="HomeScreen"
				component={HomeView}
			/>
		</NativeStack.Navigator>
	)
}
