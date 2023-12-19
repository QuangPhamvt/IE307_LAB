import { createStackNavigator } from "@react-navigation/stack"
import React from "react"
import { CategoriesStackParamList } from "../../types"
import CategoriesStack from "./components/CategoriesStack"
import DetailPostStack from "./components/DetailPostStack"
import { useRecoilValue } from "recoil"
import { postListState } from "../Home/store/atom"
import { View, ActivityIndicator } from "react-native"

const Stack = createStackNavigator<CategoriesStackParamList>()
export const Categories = () => {
	const { state } = useRecoilValue(postListState)
	return (
		<>
			{state === "loading" && (
				<View className="flex items-center justify-center w-full h-screen">
					<ActivityIndicator size={"large"} />
				</View>
			)}
			{state === "hasValue" && (
				<Stack.Navigator>
					<Stack.Screen name="CategoriesStack" component={CategoriesStack} />
					<Stack.Screen
						options={({ route }) => ({
							headerTitle: route.params.title,
						})}
						name="DetailPostStack"
						component={DetailPostStack}
					/>
				</Stack.Navigator>
			)}
		</>
	)
}
