import { AntDesign } from "@expo/vector-icons"
import React from "react"
import { Text, View, Image, ViewBase } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { useRecoilValue } from "recoil"
import { userState } from "../../../../store/atom"
import { useNavigation } from "@react-navigation/native"
import { StackNavigationProp } from "@react-navigation/stack"
import { ProfileStackParamList } from "../../../types"
import { AuthAction } from "../../../../store/hook"

const ProfileStack: React.FC = () => {
	const user = useRecoilValue(userState)
	const { onLogOut } = AuthAction.useLogOut()
	const navigation =
		useNavigation<StackNavigationProp<ProfileStackParamList, "ProfileStack">>()
	return (
		<View className="flex w-full px-4 pt-4 space-y-2">
			<View className="flex flex-row items-center justify-between w-full space-x-2">
				<View className="w-16 h-16 bg-gray-400 rounded-full" />
				<Text className="text-lg font-bold grow">{`${user.name?.firstname} ${user.name?.lastname}`}</Text>
				<View className="text-end">
					<TouchableOpacity onPress={() => navigation.navigate("EditProfile")}>
						<AntDesign name="form" size={24} />
					</TouchableOpacity>
				</View>
			</View>

			<View className="">
				<Text className="text-base font-bold">Name:</Text>
				<Text>{`${user.name?.firstname} ${user.name?.lastname}`}</Text>
			</View>

			<View className="">
				<Text className="text-base font-bold">Username:</Text>
				<Text>{user.username}</Text>
			</View>

			<View className="">
				<Text className="text-base font-bold">Email:</Text>
				<Text>{user.email}</Text>
			</View>

			<View className="">
				<Text className="text-base font-bold">Phone:</Text>
				<Text>{user.phone}</Text>
			</View>

			<View className="">
				<Text className="text-base font-bold">Address:</Text>
				<Text>{`${user.address?.number}, ${user.address?.street}, ${user.address?.city}`}</Text>
			</View>
			<TouchableOpacity
				onPress={onLogOut}
				className="flex items-center justify-center py-2 bg-sky-600">
				<Text className="font-bold text-white">LOG OUT</Text>
			</TouchableOpacity>
		</View>
	)
}

export default ProfileStack
