import { AntDesign, Feather, FontAwesome5 } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import React from "react"
import {
	SafeAreaView,
	View,
	Text,
	TextInput,
	TouchableOpacity,
	Alert,
} from "react-native"
import { AuthAction } from "../store/hook"
import { useSetRecoilState } from "recoil"
import { logInFormState } from "../store/atom"

export const LogInScreen = () => {
	const navigation = useNavigation()
	const [email, setEmail] = React.useState<string>("")
	const setLogInForm = useSetRecoilState(logInFormState)
	const { onLogIn } = AuthAction.useLogIn()
	const AlertContent = () =>
		Alert.alert("Incorrect email or password", "", [
			{
				onPress: () => {},
			},
		])
	const handleSubmit = () => {}
	return (
		<SafeAreaView>
			<View className="flex items-center justify-center w-full h-full px-8 space-y-4">
				<View className="flex items-center justify-center w-20 h-20 bg-black rounded-full">
					<FontAwesome5 name="react" size={52} color="#61dbfb" />
				</View>
				<View>
					<Text className="text-2xl font-bold">Welcome</Text>
				</View>
				<View className="flex w-full space-y-4">
					<View className="flex flex-row p-3 space-x-3 border-2 rounded-lg border-slate-300">
						<Feather name="mail" size={24} />
						<TextInput
							onChangeText={(username) =>
								setLogInForm((preState) => ({ ...preState, username }))
							}
							className="grow"
							placeholder="Enter email"
						/>
					</View>
					<View className="flex flex-row p-3 space-x-3 border-2 rounded-lg border-slate-300">
						<AntDesign name="lock1" size={24} />
						<TextInput
							onChangeText={(password) =>
								setLogInForm((preState) => ({ ...preState, password }))
							}
							className="grow"
							placeholder="Enter password"
							secureTextEntry={true}
						/>
					</View>
					<View className="items-end w-full">
						<Text className="text-pink-400">Forgot password</Text>
					</View>
					<TouchableOpacity
						className="p-3 bg-orange-500 border-2 rounded-lg"
						onPress={onLogIn}>
						<Text className="text-lg text-center text-white">LOG IN</Text>
					</TouchableOpacity>
					<View className="flex space-y-2">
						<Text className="text-base font-bold text-center">
							Or login with
						</Text>
						<View className="flex flex-row items-center justify-center space-x-4">
							<FontAwesome5 name="facebook" color="blue" size={48} />
							<AntDesign name="google" color={"red"} size={48} />
						</View>
					</View>
					<View>
						<Text className="text-center">
							Don't have an account?{" "}
							<Text
								onPress={() => navigation.navigate("SignUp")}
								className="font-bold text-blue-600">
								Sign up here!
							</Text>
						</Text>
					</View>
				</View>
			</View>
		</SafeAreaView>
	)
}
