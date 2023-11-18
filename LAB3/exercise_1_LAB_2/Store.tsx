import React from "react"

type AppProps = {
	children: React.ReactNode
}
type AppContextProps = {
	data: {
		email: string
		password: string
	}[]
	isLoggedIn: "idle" | "success" | "hasError"
	setIsLoggedIn: React.Dispatch<
		React.SetStateAction<"idle" | "success" | "hasError">
	>
}
export const AppContext = React.createContext<AppContextProps | null>(null)
export const AppContextProvider: React.FC<AppProps> = (props) => {
	const { children } = props
	const [isLoggedIn, setIsLoggedIn] = React.useState<
		"idle" | "success" | "hasError"
	>("idle")
	return (
		<AppContext.Provider
			value={{
				data: [
					{
						email: `21522517@gm.uit.edu.vn`,
						password: `123456`,
					},
				],
				isLoggedIn,
				setIsLoggedIn,
			}}>
			{children}
		</AppContext.Provider>
	)
}
