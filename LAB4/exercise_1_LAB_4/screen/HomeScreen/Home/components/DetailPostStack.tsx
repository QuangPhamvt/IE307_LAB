import { RouteProp, useRoute } from "@react-navigation/native"
import React from "react"
import { View, Text, Image } from "react-native"
import { HomeStackParamList } from "../../../types"
import { useRecoilValue } from "recoil"
import { postListState } from "../store/atom"
import { AntDesign } from "@expo/vector-icons"
import { ScrollView } from "react-native-gesture-handler"

const DetailPostStack: React.FC = () => {
	const route = useRoute<RouteProp<HomeStackParamList, "DetailPost">>()
	console.log(route.params.post_id)
	const posts = useRecoilValue(postListState).contents

	return (
		<>
			<ScrollView>
				{posts.map((item, index) => {
					if (item.id === route.params.post_id)
						return (
							<View key={index} className="flex w-full px-4 space-y-2">
								<View className="w-full bg-gray-400 aspect-square">
									<Image
										source={{ uri: item.image }}
										className="w-full h-full"
									/>
								</View>
								<Text className="text-xl font-bold text-black">
									{item.title}
								</Text>
								<Text className="text-base">{item.description}</Text>
								<Text className="text-base font-bold text-black">
									Price: ${item.price}
								</Text>
								<Text className="flex flex-row items-center text-base font-bold text-black">
									Rating: {item.rating.rate}{" "}
									<AntDesign name="star" color={"#EEC759"} size={16} />(
									{item.rating.count} reviews)
								</Text>
							</View>
						)
				})}
			</ScrollView>
		</>
	)
}

export default DetailPostStack
