import { Text, View, ScrollView, TouchableOpacity } from "react-native"
import { EvilIcons } from "@expo/vector-icons"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { listNoteState, themeState, updateNoteState } from "../../../../store"
import React from "react"
import { NavigationProp, useNavigation } from "@react-navigation/native"
import { HomeNativeStackParamList } from "../../../type"
import NoteAction from "../../../../hook"

type TItemNoteScreenComponentProps = {
	id: string
	title: string
	note: string
}
export const ItemNoteScreenComponent: React.FC<
	TItemNoteScreenComponentProps
> = (props) => {
	const { title, note, id } = props
	const navigation =
		useNavigation<NavigationProp<HomeNativeStackParamList, "NoteApp">>()
	const { theme, fontSize } = useRecoilValue(themeState)
	const setUpdateNote = useSetRecoilState(updateNoteState)
	const { handleDeleteNote } = NoteAction.useDeleteNote()
	const { handleGetListNote } = NoteAction.useGetListNote()
	const handleSetUpdateNote = () => {
		setUpdateNote({
			state: "hasValue",
			content: { id, title, note },
		})
	}
	return (
		<TouchableOpacity
			onPress={() => {
				handleSetUpdateNote()
				navigation.navigate("NoteApp", { id })
			}}>
			<View className="border-[1px] p-4 border-solid rounded-lg border-gray-500 flex flex-row justify-between items-center mt-4">
				<View className="flex flex-col w-4/5 space-y-2">
					<Text
						style={{ fontSize }}
						className={`font-extrabold ${theme === "Dark" && "text-white"} `}>
						{title}
					</Text>
					<Text
						style={{ fontSize }}
						className={`${theme === "Dark" && "text-white"}`}>
						{note}
					</Text>
				</View>
				<TouchableOpacity
					onPress={() => {
						handleDeleteNote(id)
						handleGetListNote()
					}}>
					<View className="">
						<EvilIcons
							name="trash"
							size={42}
							color={theme === "Dark" ? "white" : "black"}
						/>
					</View>
				</TouchableOpacity>
			</View>
		</TouchableOpacity>
	)
}
export const ListItemNoteScreenComponent = () => {
	const { state, contents } = useRecoilValue(listNoteState)
	return (
		<ScrollView className="flex flex-col w-full px-4">
			{state === "hasValue" && (
				<>
					{contents.map((item) => (
						<ItemNoteScreenComponent
							key={item.id}
							id={item.id}
							title={item.title}
							note={item.note}
						/>
					))}
				</>
			)}
		</ScrollView>
	)
}
