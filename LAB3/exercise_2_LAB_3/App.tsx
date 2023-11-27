import React from "react"
import { Router } from "./src/view"
import { NavigationContainer } from "@react-navigation/native"
import * as SQLite from "expo-sqlite"
import { RecoilRoot } from "recoil"
import { db } from "./src/config"

export default function App() {
	React.useEffect(() => {
		db.transaction((tx) => {
			tx.executeSql(
				"create table if not exists Note (id varchar primary key not null, title varchar, note varchar);"
			)
			console.log("success create table Notes")
		})
	}, [])
	return (
		<RecoilRoot>
			<NavigationContainer>
				<Router />
			</NavigationContainer>
		</RecoilRoot>
	)
}
