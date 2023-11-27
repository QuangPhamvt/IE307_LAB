import { useRecoilValue, useResetRecoilState } from "recoil"
import { createNoteState } from "../store"
import "react-native-get-random-values"
import { v4 as uuid } from "uuid"
import { Alert } from "react-native"
import { db } from "../config"

export const useCreateNote = () => {
	const {
		contents: { title, note },
	} = useRecoilValue(createNoteState)
	const alert = () =>
		Alert.alert("Warning", "Please enter a title", [
			{ text: "Oke", style: "default" },
		])
	const reset = useResetRecoilState(createNoteState)
	const handleCreateNote = () => {
		if (!title || !note) {
			console.log("Not true")
			alert()
			return
		} else {
			const id = uuid()
			db.transaction((tx) => {
				tx.executeSql(`insert into Note (id, title, note) values(?, ?, ?)`, [
					id,
					title,
					note,
				])
			})
			reset()
		}
	}
	return { handleCreateNote }
}
