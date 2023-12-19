import React from "react"
import { Text, View, TextInput, ScrollView } from "react-native"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { userState } from "../../../../store/atom"
import { editProfileFormState } from "../store/atom"

const EditProfileStack: React.FC = () => {
	const user = useRecoilValue(userState)
	const setEditProfile = useSetRecoilState(editProfileFormState)
	return (
		<ScrollView>
			<View className="flex w-full px-4 pt-4 space-y-4">
				<View className="flex flex-row w-full space-x-2">
					<View className="flex space-y-2 grow">
						<Text className="text-lg font-bold">First Name</Text>
						<TextInput
							onChangeText={(firstname) =>
								setEditProfile((preState) => ({ ...preState, firstname }))
							}
							className="border-[1px] border-solid border-gray-500 py-2 rounded-md"
							placeholder={user.name?.firstname}
						/>
					</View>
					<View className="flex space-y-2 grow">
						<Text className="text-lg font-bold">Last Name</Text>
						<TextInput
							onChangeText={(lastname) =>
								setEditProfile((preState) => ({ ...preState, lastname }))
							}
							className="border-[1px] border-solid border-gray-500 py-2 rounded-md"
							placeholder={user.name?.lastname}
						/>
					</View>
				</View>

				<View className="flex flex-row w-full space-x-2">
					<View className="flex space-y-2 grow">
						<Text className="text-lg font-bold">Username</Text>
						<TextInput
							onChangeText={(username) =>
								setEditProfile((preState) => ({ ...preState, username }))
							}
							className="border-[1px] border-solid border-gray-500 py-2 rounded-md"
							placeholder={user?.username || ""}
						/>
					</View>
				</View>

				<View className="flex flex-row w-full space-x-2">
					<View className="flex space-y-2 grow">
						<Text className="text-lg font-bold">Email</Text>
						<TextInput
							onChangeText={(email) =>
								setEditProfile((preState) => ({ ...preState, email }))
							}
							className="border-[1px] border-solid border-gray-500 py-2 rounded-md"
							placeholder={user?.email || ""}
						/>
					</View>
				</View>

				<View className="flex flex-row w-full space-x-2">
					<View className="flex space-y-2 grow">
						<Text className="text-lg font-bold">Phone Number</Text>
						<TextInput
							onChangeText={(phonenumber) =>
								setEditProfile((preState) => ({
									...preState,
									phonenumber,
								}))
							}
							className="border-[1px] border-solid border-gray-500 py-2 rounded-md"
							placeholder={user?.phone || ""}
						/>
					</View>
				</View>

				<View className="flex flex-row w-full space-x-2">
					<View className="flex space-y-2 grow">
						<Text className="text-lg font-bold">House Number</Text>
						<TextInput
							onChangeText={(number) =>
								setEditProfile((preState) => ({
									...preState,
									housenumber: +number,
								}))
							}
							className="border-[1px] border-solid border-gray-500 py-2 rounded-md"
							placeholder={`${user?.address?.number || ""}`}
						/>
					</View>
				</View>

				<View className="flex flex-row w-full space-x-2">
					<View className="flex space-y-2 grow">
						<Text className="text-lg font-bold">Street</Text>
						<TextInput
							onChangeText={(street) =>
								setEditProfile((preState) => ({ ...preState, street }))
							}
							className="border-[1px] border-solid border-gray-500 py-2 rounded-md"
							placeholder={`${user?.address?.street || ""}`}
						/>
					</View>
				</View>

				<View className="flex flex-row w-full space-x-2">
					<View className="flex space-y-2 grow">
						<Text className="text-lg font-bold">City</Text>
						<TextInput
							onChangeText={(city) =>
								setEditProfile((preState) => ({ ...preState, city }))
							}
							className="border-[1px] border-solid border-gray-500 py-2 rounded-md"
							placeholder={`${user?.address?.city || ""}`}
						/>
					</View>
				</View>
			</View>
		</ScrollView>
	)
}

export default EditProfileStack
