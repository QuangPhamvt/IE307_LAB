import { RecoilRoot } from "recoil"
import Router from "./src"
import { NavigationContainer } from "@react-navigation/native"


export default function App() {
	return (
		<RecoilRoot>
			<NavigationContainer>
				<Router />
			</NavigationContainer>
		</RecoilRoot>
	)
}
