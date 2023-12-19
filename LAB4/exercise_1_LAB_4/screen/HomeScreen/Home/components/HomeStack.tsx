import React from "react"
import {
	ActivityIndicator,
	SafeAreaView,
	ScrollView,
	Text,
	View,
} from "react-native"
import HotDetailComponent from "./HotDetailComponent"
import NewArrivalsComponent from "./NewArivalsComponent"
import { useRecoilValue } from "recoil"
import { postListState } from "../store/atom"

const HomeStack = () => {
	const { state } = useRecoilValue(postListState)
	return (
		<SafeAreaView>
			<ScrollView>
				{state === "loading" && (
					<View className="flex items-center justify-center w-full h-screen">
						<ActivityIndicator size={"large"} />
					</View>
				)}
				{state === "hasValue" && (
					<>
						<View className="flex">
							<View className="flex justify-center w-full px-4 ">
								<Text className="py-2 text-lg italic font-bold text-red-700">
									Shop for quality, Shop for style
								</Text>
								<View className="w-full h-28 bg-slate-500"></View>
							</View>
						</View>
						<HotDetailComponent />
						<NewArrivalsComponent />
					</>
				)}
			</ScrollView>
		</SafeAreaView>
	)
}

export default HomeStack
