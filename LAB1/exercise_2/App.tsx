import { SafeAreaView, ScrollView, View, Text } from "react-native"
import { Workouts } from "./components/Workouts"
import { Fruit } from "./components/Fruits"
import React from "react"

export default function App() {
	const [itemsSelected, setItemSelected] = React.useState<Array<string>>([])
	const handleItemsSelected = (item: string) => {
		setItemSelected((preState) => {
			if (!itemsSelected.includes(item)) {
				preState.push(item)
				return [...preState]
			}
			const data = preState.filter((itemSelected) => itemSelected !== item)
			return [...data]
		})
	}
	return (
		<SafeAreaView className="flex flex-1 p-[4px]">
			<ScrollView className=" w-full h-full bg-slate-300 flex flex-col object-contain p-[20px_24px]">
				<Workouts onItemsSelected={handleItemsSelected} />
				<Fruit onItemsSelected={handleItemsSelected} />
				<View className="flex items-center justify-center w-full my-[24px] p-[2px]">
					<Text className="font-bold text-red-700">SELECTED EXERCISES:</Text>
					<Text className="font-bold">{itemsSelected.toString()}</Text>
				</View>
			</ScrollView>
		</SafeAreaView>
	)
}
