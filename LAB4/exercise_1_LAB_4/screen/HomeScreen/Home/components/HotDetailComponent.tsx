import React from "react"
import { Text, View } from "react-native"
import { useRecoilValue } from "recoil"
import { postListState } from "../store/atom"
import ItemDetailComponent from "./ItemDetailComponent"

const HotDetailComponent: React.FC = () => {
	const posts = useRecoilValue(postListState)
	return (
		<View className="w-full px-4">
			<Text className="py-3 text-2xl font-bold text-rose-600">Hot detail</Text>
			<View className="flex flex-row flex-wrap justify-between ">
				{posts.contents.map((post, index) => {
					if (index % 2 === 0)
						return <ItemDetailComponent key={index} post={post} />
				})}
			</View>
		</View>
	)
}

export default HotDetailComponent
