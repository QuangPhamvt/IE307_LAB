import { View, Text, SafeAreaView, TouchableOpacity, Image } from "react-native"
import React from "react"
import { TextInput } from "react-native-gesture-handler"
import { Entypo } from "@expo/vector-icons"
import { useGetImageToUp } from "../../../store/hook"
import { useRecoilState, useRecoilValue } from "recoil"
import {
	imageSelectedState,
	inputTitleState,
	locationState,
} from "../../../store/atom"
import MapView, { Marker, Region } from "react-native-maps"

const AddPlaces = () => {
	const { onGetImageToUp } = useGetImageToUp()
	const imageLib = useRecoilValue(imageSelectedState)
	const [location, setLocation] = useRecoilState(locationState)
	const [inputTitle, setInputTitle] = useRecoilState(inputTitleState)
	const handleSelectImageLib = () => onGetImageToUp(true)
	const handleSelectImageCamera = () => onGetImageToUp(false)
	if (!location?.coords) return
	return (
		<SafeAreaView className="">
			<View className="flex w-full px-2 space-y-2">
				<Text className="text-lg font-semibold">Title</Text>
				<TextInput
					value={inputTitle}
					onChangeText={(text) => setInputTitle(text)}
					className="w-full p-2 border border-zinc-400"
				/>
				<View className="flex items-center justify-center w-full h-40 bg-zinc-300">
					{imageLib ? (
						<Image source={{ uri: imageLib }} className="w-full h-full" />
					) : (
						<Text className="font-medium">No image taken yet.</Text>
					)}
				</View>
				<View className="flex flex-row justify-around w-full">
					<TouchableOpacity
						onPress={handleSelectImageLib}
						className="flex flex-row items-center p-2 space-x-2 border border-blue-500 border-solid">
						<Entypo name="image" size={16} color={"#3b82f6"} />
						<Text className="font-bold text-blue-500">Pick image</Text>
					</TouchableOpacity>
					<TouchableOpacity
						onPress={handleSelectImageCamera}
						className="flex flex-row items-center p-2 space-x-2 border border-blue-500 border-solid">
						<Entypo name="camera" size={16} color={"#3b82f6"} />
						<Text className="font-bold text-blue-500">Take image</Text>
					</TouchableOpacity>
				</View>

				<View className="flex items-center justify-center w-full h-40 bg-zinc-300">
					{/* <Text className="font-medium">No location picked yet</Text> */}
					<MapView
						className="w-full h-full"
						initialRegion={{
							latitude: location.coords.latitude,
							longitude: location.coords.longitude,
							latitudeDelta: 0.005,
							longitudeDelta: 0.005,
						}}>
						<Marker
							draggable
							onDragEnd={(e) =>
								setLocation((preState) => {
									if (!preState) return null
									return {
										...preState,
										coords: {
											...preState.coords,
											latitude: e.nativeEvent.coordinate.latitude,
											longitude: e.nativeEvent.coordinate.longitude,
										},
									}
								})
							}
							coordinate={location.coords}
						/>
					</MapView>
				</View>
				<View className="flex flex-row justify-around w-full">
					<TouchableOpacity className="flex flex-row items-center p-2 space-x-2 border border-blue-500 border-solid">
						<Entypo name="location" size={16} color={"#3b82f6"} />
						<Text className="font-bold text-blue-500">Locate User</Text>
					</TouchableOpacity>
					<View className="flex flex-row items-center p-2 space-x-2 border border-blue-500 border-solid">
						<Entypo name="map" size={16} color={"#3b82f6"} />
						<Text className="font-bold text-blue-500">Pick on Map</Text>
					</View>
				</View>

				<TouchableOpacity className="flex items-center justify-center w-full h-10 p-1 bg-blue-500">
					<Text className="font-medium text-white">Add Places</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	)
}

export default AddPlaces
