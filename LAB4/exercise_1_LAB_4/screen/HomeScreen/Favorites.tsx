import {
	SafeAreaView,
	View,
	Text,
	Image,
	TouchableOpacity,
	Alert,
	ActivityIndicator,
} from "react-native"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { cartState } from "../../store/atom"
import React from "react"
import { AntDesign } from "@expo/vector-icons"
import { ScrollView } from "react-native-gesture-handler"
import { postListState } from "./Home/store/atom"
import { useNavigation } from "@react-navigation/native"
import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs"
import { HomeTabParamsList } from "../types"

interface IItemCart {
	productId: number
	quantity: number
}
const ItemCart: React.FC<IItemCart> = (props) => {
	const { productId, quantity } = props
	const posts = useRecoilValue(postListState)
	const setCartList = useSetRecoilState(cartState)
	const post = React.useRef<any>(
		posts.contents.find((item) => item.id === productId)
	)
	const alert = () =>
		Alert.alert("Are you sure you want to delete this product", undefined, [
			{
				text: "Yes",
				onPress: () => {
					setCartList((preState) => ({
						...preState,
						products: preState.products.filter(
							(item) => item.productId !== productId
						),
					}))
				},
			},
			{ text: "No", style: "cancel" },
		])
	return (
		<View className="w-full flex rounded-lg px-2 mt-4 py-3 border-[1px] border-solid border-gray-500">
			<Text>{post?.current?.title}</Text>
			<View className="flex flex-row items-center justify-between">
				<View className="w-12 bg-gray-400 aspect-square">
					<Image
						source={{ uri: post?.current.image }}
						className="w-full h-full"
					/>
				</View>

				<View className="flex items-center justify-center">
					<Text className="text-lg font-bold">${post?.current.price}</Text>
					<View className="flex flex-row items-center space-x-2">
						<TouchableOpacity
							onPress={() => {
								setCartList((preState) => ({
									...preState,
									products: preState.products.map((item) => {
										if (item.productId === productId)
											return { productId, quantity: item.quantity - 1 }
										return item
									}),
								}))
							}}>
							<AntDesign name="minus" size={16} />
						</TouchableOpacity>
						<Text className="text-lg font-bold">{quantity}</Text>
						<TouchableOpacity
							onPress={() => {
								setCartList((preState) => ({
									...preState,
									products: preState.products.map((item) => {
										if (item.productId === productId)
											return { productId, quantity: item.quantity + 1 }
										return item
									}),
								}))
							}}>
							<AntDesign name="plus" size={16} />
						</TouchableOpacity>
					</View>
				</View>
				<View>
					<Text>Total: ${(post?.current.price || 0) * quantity}</Text>
				</View>
				<TouchableOpacity onPress={alert}>
					<AntDesign name="close" size={24} color={"red"} />
				</TouchableOpacity>
			</View>
		</View>
	)
}
export const Favorites = () => {
	const navigate =
		useNavigation<BottomTabNavigationProp<HomeTabParamsList, "Favorites">>()
	const cart = useRecoilValue(cartState)
	if (!cart.id) return null
	return (
		<ScrollView>
			<SafeAreaView>
				{cart.state === "loading" && (
					<View className="flex items-center justify-center w-full h-screen">
						<ActivityIndicator size={"large"} />
					</View>
				)}
				{cart.products.length > 0 && cart.state === "hasValue" ? (
					<View className="flex items-center justify-start h-full px-4">
						{cart.products.map((item) => {
							return (
								<ItemCart
									productId={item.productId}
									quantity={item.quantity}
									key={item.productId}
								/>
							)
						})}
					</View>
				) : (
					<View className="flex items-center justify-center h-screen">
						<Text>You have no products in your cart</Text>
						<TouchableOpacity
							onPress={() => navigate.navigate("Home", { screen: "HomeStack" })}
							className="p-2 bg-blue-500">
							<Text>SHOPPING NOW!</Text>
						</TouchableOpacity>
					</View>
				)}
			</SafeAreaView>
		</ScrollView>
	)
}
