import { useRecoilValue, useResetRecoilState } from "recoil"
import { updateNoteState } from "../store"
import "react-native-get-random-values"
import { Alert } from "react-native"
import { db } from "../config"

export const useUpdateNote = () => {
	const {
		content: { title, note },
	} = useRecoilValue(updateNoteState)
	const alert = () =>
		Alert.alert("Warning", "Please enter a title", [
			{ text: "Oke", style: "default" },
		])
	const reset = useResetRecoilState(updateNoteState)
	const handleUpdateNote = (id: string) => {
		if (!title || !note) {
			console.log("Not true")
			alert()
			return
		} else {
			db.transaction((tx) => {
				tx.executeSql(`update Note set title = ?, note = ? where id = ?`, [
					title,
					note,
					id,
				])
			})
		}
		reset()
	}
	return { handleUpdateNote }
}
