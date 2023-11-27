import { View, TextInput, TouchableOpacity } from "react-native"
import { useRecoilValue, useSetRecoilState } from "recoil"
import { createNoteState, themeState, updateNoteState } from "../../../../store"
import { AntDesign, Octicons } from "@expo/vector-icons"
import NoteAction from "../../../../hook"
import { RouteProp, useRoute } from "@react-navigation/native"
import { HomeNativeStackParamList } from "../../../type"

export const NoteAppHomeScreen = () => {
	const {
		params: { id },
	} = useRoute<RouteProp<HomeNativeStackParamList, "NoteApp">>()
	const getCreateNoteState = useRecoilValue(createNoteState)
	const getUpdateNoteState = useRecoilValue(updateNoteState)
	const { theme, fontSize } = useRecoilValue(themeState)
	const setCreateNoteState = useSetRecoilState(createNoteState)
	const setUpdateNoteState = useSetRecoilState(updateNoteState)
	const { handleCreateNote } = NoteAction.useCreateNote()
	const { handleGetListNote } = NoteAction.useGetListNote()
	const { handleUpdateNote } = NoteAction.useUpdateNote()
	return (
		<View
			className={`flex flex-col p-4 space-y-4 h-full ${
				theme === "Dark" && "bg-[#1A1A1A]"
			}`}>
			<View className="py-2 border-[1px] border-solid border-gray-500 rounded-lg px-4">
				<TextInput
					style={{ fontSize }}
					className={`${theme === "Dark" && "text-white"}`}
					placeholderTextColor={theme === "Dark" ? "white" : "gray"}
					placeholder=" Enter your title"
					value={
						id
							? getUpdateNoteState.content.title
							: getCreateNoteState.contents.title
					}
					onChangeText={(text) => {
						if (!id)
							setCreateNoteState((preState) => ({
								state: "hasValue",
								contents: {
									...preState.contents,
									title: text,
								},
							}))
						if (id)
							setUpdateNoteState((preState) => ({
								state: "hasValue",
								content: {
									...preState.content,
									title: text,
								},
							}))
					}}
				/>
			</View>
			<View className="h-32 border-[1px] border-solid border-gray-500 rounded-lg py-2 px-4">
				<TextInput
					multiline={true}
					style={{ fontSize }}
					className={`${theme === "Dark" && "text-white"}`}
					placeholderTextColor={theme === "Dark" ? "white" : "gray"}
					placeholder=" Enter your note"
					value={
						id
							? getUpdateNoteState.content.note
							: getCreateNoteState.contents.note
					}
					onChangeText={(text) => {
						if (!id)
							setCreateNoteState((preState) => ({
								state: "hasValue",
								contents: {
									...preState.contents,
									note: text,
								},
							}))
						if (id)
							setUpdateNoteState((preState) => ({
								state: "hasValue",
								content: {
									...preState.content,
									note: text,
								},
							}))
					}}
				/>
			</View>
			<View className="flex flex-row items-center justify-center space-x-4">
				<Octicons name="x-circle-fill" size={44} color={"red"} />
				<TouchableOpacity
					onPress={() => {
						if (!id) {
							handleCreateNote()
							handleGetListNote()
						}
						if (id) {
							handleUpdateNote(id)
							handleGetListNote()
						}
					}}>
					<AntDesign name="checkcircle" size={44} color={"green"} />
				</TouchableOpacity>
			</View>
		</View>
	)
}
