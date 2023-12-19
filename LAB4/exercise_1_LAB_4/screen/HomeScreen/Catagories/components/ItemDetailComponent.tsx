import React from "react"
import { Text, View, Image, Alert } from "react-native"
import { AntDesign } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { CategoriesStackParamList, HomeStackParamList } from "../../../types"
import { TouchableOpacity } from "react-native-gesture-handler"
import { useRecoilState, useRecoilValue } from "recoil"
import { cartState } from "../../../../store/atom"

interface IItemDetailComponent {
	post: {
		id: number
		title: string
		price: number
		description: string
		category: string
		image: string
		rating: {
			rate: number
			count: number
		}
	}
}
const ItemDetailComponent: React.FC<IItemDetailComponent> = (props) => {
	const { post } = props
	const [cartList, setCartList] = useRecoilState(cartState)
	const navigation =
		useNavigation<
			StackNavigationProp<CategoriesStackParamList, "CategoriesStack">
		>()
	const alert = () =>
		Alert.alert("Message", "This product is already in your cart", [
			{ text: "Ok" },
		])
	const handleAddPostToCartList = () => {
		console.log("plus")
		if (cartList.products.find((item) => item.productId === post.id)) {
			alert()
			return
		}
		setCartList((preState) => ({
			...preState,
			products: [...preState.products, { productId: post.id, quantity: 1 }],
		}))
	}
	return (
		<View className="w-[48%] mt-2 px-1 bg-white">
			<View className="object-cover w-full h-48">
				<TouchableOpacity
					onPress={() =>
						navigation.navigate("DetailPostStack", {
							post_id: post.id,
							title: post.title,
						})
					}>
					<Image source={{ uri: post.image || "" }} className="w-full h-full" />
				</TouchableOpacity>
			</View>
			<View className="flex justify-between grow">
				<View className="w-full px-2">
					<Text className="text-sm line-clamp-2">{post.title}</Text>
				</View>

				<View className="flex flex-row ">
					<View className="flex">
						<Text className="font-bold text-red-600">${post.price}</Text>
						<Text>
							{post.rating.rate}
							<AntDesign name="star" color={"#FFC436"} />({post.rating.count})
						</Text>
					</View>
					<View className="flex items-end justify-center grow">
						<TouchableOpacity onPress={handleAddPostToCartList}>
							<AntDesign name="pluscircle" size={32} color={"#0F2167"} />
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	)
}

export default ItemDetailComponent
