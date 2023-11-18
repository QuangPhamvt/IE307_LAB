import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"
import { CategoriesMaterialTopTabParamsList } from "../../types"
import { CATEGORIES1 } from "./CATEGORIES1"
import { CATEGORIES2 } from "./CATEGORIES2"
import { CATEGORIES3 } from "./CATEGORIES3"
const Tab = createMaterialTopTabNavigator<CategoriesMaterialTopTabParamsList>()
export const Categories = () => {
	return (
		<Tab.Navigator initialRouteName="CATEGORIES1">
			<Tab.Screen name="CATEGORIES1" component={CATEGORIES1} />
			<Tab.Screen name="CATEGORIES2" component={CATEGORIES2} />
			<Tab.Screen name="CATEGORIES3" component={CATEGORIES3} />
		</Tab.Navigator>
	)
}
