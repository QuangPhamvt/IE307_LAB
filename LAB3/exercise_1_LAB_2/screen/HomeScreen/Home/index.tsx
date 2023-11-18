import { AntDesign, Feather } from "@expo/vector-icons"
import { createDrawerNavigator } from "@react-navigation/drawer"
import { HomeDrawerParamsList } from "../../types"
import { HomeDrawer } from "./HomeDrawer"
import { NotificationDrawer } from "./NotificationDrawer"
import { HelpDrawer } from "./HelpDrawer"
import { View, Text } from "react-native"
const Drawer = createDrawerNavigator<HomeDrawerParamsList>()
export const Home = () => {
	return (
		<Drawer.Navigator
			initialRouteName="Home"
			screenOptions={({ route }) => ({
				drawerIcon: () => {
					if (route.name === "Home") return <AntDesign name="home" size={24} />
					if (route.name === "Notification")
						return <AntDesign name="notification" size={24} />
					if (route.name === "Helps")
						return <Feather name="help-circle" size={24} />
				},
			})}>
			<Drawer.Screen name="Home" component={HomeDrawer} />
			<Drawer.Screen name="Notification" component={NotificationDrawer} />
			<Drawer.Screen name="Helps" component={HelpDrawer} />
		</Drawer.Navigator>
	)
}
