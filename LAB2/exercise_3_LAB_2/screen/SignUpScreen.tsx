import { AntDesign, Feather, FontAwesome5 } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native"
import {
	SafeAreaView,
	TextInput,
	TouchableOpacity,
	Text,
	View,
} from "react-native"
export const SignUpScreen = () => {
	const navigation = useNavigation()
	return (
		<SafeAreaView>
			<View className="flex items-center justify-center w-full h-full px-8 space-y-4">
				<View className="flex items-center justify-center w-20 h-20 bg-black rounded-full">
					<FontAwesome5 name="react" size={52} color="#61dbfb" />
				</View>
				<View>
					<Text className="text-2xl font-bold">Create New Account</Text>
				</View>
				<View className="flex w-full space-y-4">
					<View className="flex flex-row p-3 space-x-3 border-2 rounded-lg border-slate-300">
						<AntDesign name="user" size={24} />
						<TextInput className="grow" placeholder="Enter username" />
					</View>
					<View className="flex flex-row p-3 space-x-3 border-2 rounded-lg border-slate-300">
						<Feather name="mail" size={24} />
						<TextInput className="grow" placeholder="Enter email" />
					</View>
					<View className="flex flex-row p-3 space-x-3 border-2 rounded-lg border-slate-300">
						<AntDesign name="lock1" size={24} />
						<TextInput className="grow" placeholder="Enter password" />
					</View>
					<View className="flex flex-row p-3 space-x-3 border-2 rounded-lg border-slate-300">
						<AntDesign name="lock1" size={24} />
						<TextInput className="grow" placeholder="Confirm password" />
					</View>
					<TouchableOpacity className="p-3 bg-orange-500 border-2 rounded-lg">
						<Text className="text-lg text-center text-white">CREATE</Text>
					</TouchableOpacity>
					<View>
						<Text className="text-center">
							Already have an account?{" "}
							<Text
								onPress={() => navigation.navigate("LogIn")}
								className="font-bold text-blue-600">
								Login now!
							</Text>
						</Text>
					</View>
				</View>
			</View>
		</SafeAreaView>
	)
}
