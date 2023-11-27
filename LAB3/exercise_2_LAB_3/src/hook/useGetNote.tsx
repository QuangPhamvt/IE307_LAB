import { useSetRecoilState } from "recoil"
import { db } from "../config"
import { listNoteState } from "../store"

export const useGetListNote = () => {
	const setListNote = useSetRecoilState(listNoteState)
	const handleGetListNote = () => {
		db.transaction((tx) => {
			tx.executeSql(`select * from Note`, [], (_, { rows }) => {
				setListNote({
					state: "hasValue",
					contents: rows._array,
				})
			})
		})
	}
	return { handleGetListNote }
}
