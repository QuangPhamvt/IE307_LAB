//PHAM MINH QUANG MSSV 21522517
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import { DrawerScreenProps } from "@react-navigation/drawer"
import { MaterialTopTabScreenProps } from "@react-navigation/material-top-tabs"
import {
	CompositeScreenProps,
	NavigatorScreenParams,
} from "@react-navigation/native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"

export type RootNativeStackParamList = {
	HomeScreen: NavigatorScreenParams<HomeTabParamsList>
	HomeDetailScreen: undefined
	NotificationDetailScreen: undefined
	LogIn: undefined
	SignUp: undefined
}

export type RootNativeStackScreenProps<
	T extends keyof RootNativeStackParamList
> = NativeStackScreenProps<RootNativeStackParamList, T>

export type HomeTabParamsList = {
	HomeTab: NavigatorScreenParams<HomeDrawerParamsList>
	Categories: NavigatorScreenParams<CategoriesMaterialTopTabParamsList>
	Favorites: undefined
	Profile: undefined
}
export type HomeTabScreenProps<T extends keyof HomeTabParamsList> =
	CompositeScreenProps<
		BottomTabScreenProps<HomeTabParamsList, T>,
		RootNativeStackScreenProps<keyof RootNativeStackParamList>
	>
// HomeScreen/CATEGORIES MATERIAL TOP TAB
export type CategoriesMaterialTopTabParamsList = {
	CATEGORIES1: undefined
	CATEGORIES2: undefined
	CATEGORIES3: undefined
}
export type CategoriesMaterialTopTabScreenProps<
	T extends keyof CategoriesMaterialTopTabParamsList
> = CompositeScreenProps<
	MaterialTopTabScreenProps<CategoriesMaterialTopTabParamsList, T>,
	HomeTabScreenProps<keyof HomeTabParamsList>
>
// HomeScreen/HOME DRAWER
export type HomeDrawerParamsList = {
	Home: undefined
	Notification: undefined
	Helps: undefined
}
export type HomeDrawerScreenProps<T extends keyof HomeDrawerParamsList> =
	CompositeScreenProps<
		DrawerScreenProps<HomeDrawerParamsList, T>,
		HomeTabScreenProps<keyof HomeTabParamsList>
	>

declare global {
	namespace ReactNavigation {
		interface RootParamList extends RootNativeStackParamList {}
	}
}
