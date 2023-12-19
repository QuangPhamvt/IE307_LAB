import { Entypo, FontAwesome, Ionicons } from "@expo/vector-icons"
import React from "react"
import { SafeAreaView, ScrollView, Text, View } from "react-native"
import { useRecoilValue } from "recoil"
import { postListState } from "../../Home/store/atom"
import { TCategories } from "../../../../utilities"
import { TouchableOpacity } from "react-native-gesture-handler"
import ItemDetailComponent from "./ItemDetailComponent"

const CategoriesStack: React.FC = () => {
	const posts = useRecoilValue(postListState)
	const [choiceCategory, setChoiceCategory] = React.useState<TCategories>("all")
	return (
		<SafeAreaView>
			<ScrollView>
				<View className="flex w-full px-2">
					<View className="flex flex-row items-center justify-around">
						<TouchableOpacity onPress={() => setChoiceCategory("all")}>
							<View className="flex items-center justify-center ">
								<Entypo name="grid" size={42} />
								<Text
									className={`${
										choiceCategory === "all" ? "text-blue-400" : ""
									}`}>
									All
								</Text>
							</View>
						</TouchableOpacity>

						<TouchableOpacity onPress={() => setChoiceCategory("electronics")}>
							<View className="flex items-center justify-center ">
								<Ionicons name="logo-electron" size={42} />
								<Text
									className={`${
										choiceCategory === "electronics" ? "text-blue-400" : ""
									}`}>
									electronics
								</Text>
							</View>
						</TouchableOpacity>

						<TouchableOpacity onPress={() => setChoiceCategory("jewelery")}>
							<View className="flex items-center justify-center ">
								<FontAwesome name="diamond" size={42} />
								<Text
									className={`${
										choiceCategory === "jewelery" ? "text-blue-400" : ""
									}`}>
									jewelery
								</Text>
							</View>
						</TouchableOpacity>

						<TouchableOpacity
							onPress={() => setChoiceCategory("men's clothing")}>
							<View className="flex items-center justify-center ">
								<Ionicons name="shirt-outline" size={42} />
								<Text
									className={`${
										choiceCategory === "men's clothing" ? "text-blue-400" : ""
									}`}>
									men's clothing
								</Text>
							</View>
						</TouchableOpacity>
					</View>
					<View className="flex flex-row flex-wrap justify-between ">
						{posts.contents.map((post, index) => {
							if (choiceCategory === "all")
								return <ItemDetailComponent key={index} post={post} />
							if (post.category === choiceCategory)
								return <ItemDetailComponent key={index} post={post} />
						})}
					</View>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}

export default CategoriesStack
