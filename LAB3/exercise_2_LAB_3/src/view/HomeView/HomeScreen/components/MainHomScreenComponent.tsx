import { AntDesign } from "@expo/vector-icons"
import { NavigationProp, useNavigation } from "@react-navigation/native"
import { View, Text, TouchableOpacity } from "react-native"
import { HomeNativeStackParamList } from "../../../type"
import { useRecoilValue } from "recoil"
import { ListItemNoteScreenComponent } from "./ListItemNoteScreenComponent"
import { themeState } from "../../../../store"
export const MainHomeScreen = () => {
	const navigation = useNavigation<NavigationProp<HomeNativeStackParamList>>()
	const handleNavigateToNoteApp = (id: string | null) => {
		return navigation.navigate("NoteApp", { id })
	}
	const { theme, fontSize } = useRecoilValue(themeState)
	return (
		<View
			className={`flex w-full h-full space-y-2 ${
				theme === "Dark" && "bg-[#1A1A1A]"
			}`}>
			<View className="flex flex-row items-center justify-between w-full px-8 py-6">
				<Text
					style={{ fontSize }}
					className={`text-xl font-bold ${theme === "Dark" && "text-white"}`}>
					All Notes
				</Text>
				<TouchableOpacity onPress={() => handleNavigateToNoteApp(null)}>
					<View>
						<AntDesign
							name="pluscircle"
							color={theme === "Dark" ? "blue" : "orange"}
							size={42}
						/>
					</View>
				</TouchableOpacity>
			</View>
			<ListItemNoteScreenComponent />
		</View>
	)
}
