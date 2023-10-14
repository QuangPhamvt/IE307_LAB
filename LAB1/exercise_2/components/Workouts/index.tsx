import {
	FlatList,
	ScrollView,
	Text,
	View,
	TouchableOpacity,
	SafeAreaView,
	ImageBackground,
	Platform,
} from "react-native"
import { workouts } from "../../data"
import React from "react"

const Item = ({
	id,
	type,
	onItemsSelected,
}: {
	id: string
	type: string
	onItemsSelected: <T extends string>(item: T) => void
}) => {
	const [isSelect, setIsSelect] = React.useState<boolean>(false)
	const handleIsSelect = () => {
		onItemsSelected(type)
		setIsSelect((preState) => !preState)
	}
	const buttonStyle = {
		backGround: `${Platform.OS === "android" ? "bg-blue-300" : ""}`,
		text: `${
			Platform.OS === "ios" ? "text-blue-300 font-bold" : "text-white font-bold"
		}`,
	}
	return (
		<View className="p-[12px] flex flex-row m-2 items-center justify-between bg-white rounded-lg">
			<Text>{type}</Text>
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
export const Workouts = ({
	onItemsSelected,
}: {
	onItemsSelected: <T extends string>(item: T) => void
}) => {
	const DATA = workouts
	return (
		<View className="flex items-center justify-center h-[264px]">
			<Text className="text-lg font-bold text-blue-600">
				FlatList - Workouts
			</Text>
			<View className="flex flex-col w-full p-1">
				<ImageBackground
					source={{
						uri: "https://img.livestrong.com/750x750/media-storage/livestrong-data/hub/3afa350e-5dc3-4c4f-ae59-b2f32aa2807d-20MinuteWorkoutmobileHubHeader1.png",
					}}>
					<SafeAreaView className="flex w-full ">
						<FlatList
							showsVerticalScrollIndicator={false}
							renderItem={(props) => (
								<Item onItemsSelected={onItemsSelected} {...props.item} />
							)}
							data={DATA}
							keyExtractor={(item) => item.id}
						/>
					</SafeAreaView>
				</ImageBackground>
			</View>
		</View>
	)
}
