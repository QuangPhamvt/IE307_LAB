import "react-native-get-random-values"
import { db } from "../config"

export const useDeleteNote = () => {
	const handleDeleteNote = (id: string) => {
		db.transaction((tx) => {
			tx.executeSql(`delete from Note where id = ?`, [id])
		})
	}
	return { handleDeleteNote }
}
