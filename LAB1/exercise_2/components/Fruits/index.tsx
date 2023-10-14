import {
	Image,
	Text,
	View,
	ImageBackground,
	SafeAreaView,
	SectionList,
	TouchableOpacity,
	Platform,
} from "react-native"
import { fruits_vegetables } from "../../data"
import React from "react"
const Item = ({
	item,
	onItemsSelected,
}: {
	item: string
	onItemsSelected: <T extends string>(item: T) => void
}) => {
	const [isSelect, setIsSelect] = React.useState<boolean>(false)
	const handleIsSelect = () => {
		onItemsSelected(item)
		setIsSelect((preState) => !preState)
	}
	const buttonStyle = {
		backGround: `${Platform.OS === "android" ? "bg-blue-300" : ""}`,
		text: `${
			Platform.OS === "ios" ? "text-blue-300 font-bold" : "text-white font-bold"
		}`,
	}
	return (
		<View className="flex flex-row justify-between p-4 mt-2 bg-gray-100 rounded-xl">
			<Text>{item}</Text>
			<TouchableOpacity
				className={buttonStyle.backGround}
				onPress={handleIsSelect}>
				<Text className={buttonStyle.text}>
					{`${isSelect ? "Selected" : "Select"}`}
				</Text>
			</TouchableOpacity>
		</View>
	)
}

export const Fruit = ({
	onItemsSelected,
}: {
	onItemsSelected: <T extends string>(item: T) => void
}) => {
	const DATA = fruits_vegetables
	return (
		<View className="flex items-center justify-center h-[264px] mt-[24px]">
			<Text className="text-lg font-bold text-blue-600">
				SelectList - Fruits & Vegetables
			</Text>
			<View className="flex flex-col w-full p-1">
				<ImageBackground
					className="p-2"
					source={{
						uri: "https://www.eatingwell.com/thmb/L6xxfuFKUg9MNr4U58-j-UvY_NE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/bad-fruits-you-should-be-eating-56c1dedd080140b7b34e099943cbb1ec.jpg",
					}}>
					<SafeAreaView className="flex w-full">
						<SectionList
							showsVerticalScrollIndicator={false}
							className="p-2"
							sections={DATA}
							renderItem={({ item }) => (
								<Item onItemsSelected={onItemsSelected} item={item} />
							)}
							renderSectionHeader={({ section: { title, url } }) => {
								return (
									<View className="flex flex-row items-center justify-around">
										<Text className="text-lg font-bold text-white">
											{title}
										</Text>
										<Image
											width={36}
											height={36}
											source={{
												uri: url,
											}}
										/>
									</View>
								)
							}}
							keyExtractor={(item, index) => item + index}
						/>
					</SafeAreaView>
				</ImageBackground>
			</View>
		</View>
	)
}
