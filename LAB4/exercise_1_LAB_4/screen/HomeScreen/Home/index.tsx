import React from "react"
import { HomeAction } from "./store/hook"
import { useRecoilValue } from "recoil"
import { postListState } from "./store/atom"
import { createStackNavigator } from "@react-navigation/stack"
import { HomeStackParamList } from "../../types"
import HomeStack from "./components/HomeStack"
import DetailPostStack from "./components/DetailPostStack"

const Stack = createStackNavigator<HomeStackParamList>()
export const Home = () => {
	const { onGetPostList } = HomeAction.useGetPostList()
	const postList = useRecoilValue(postListState)
	React.useEffect(() => {
		onGetPostList()
	}, [])
	if (postList.state !== "hasValue") return null
	return (
		<Stack.Navigator initialRouteName="HomeStack">
			<Stack.Screen name="HomeStack" component={HomeStack} />
			<Stack.Screen
				options={({ route }) => ({
					headerTitle: route.params.title,
				})}
				name="DetailPost"
				component={DetailPostStack}
			/>
		</Stack.Navigator>
	)
}
