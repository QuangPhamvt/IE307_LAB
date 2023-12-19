import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import {
	CompositeScreenProps,
	NavigatorScreenParams,
} from "@react-navigation/native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { StackScreenProps } from "@react-navigation/stack"

export type RootNativeStackParamList = {
	HomeScreen: NavigatorScreenParams<HomeTabParamsList>
	LogIn: undefined
	SignUp: undefined
}

export type RootNativeStackScreenProps<
	T extends keyof RootNativeStackParamList
> = NativeStackScreenProps<RootNativeStackParamList, T>

export type HomeTabParamsList = {
	Home: NavigatorScreenParams<HomeStackParamList>
	Categories: undefined
	Favorites: undefined
	Profile: NavigatorScreenParams<ProfileStackParamList>
}
export type HomeStackParamList = {
	HomeStack: undefined
	DetailPost: { post_id: number; title: string }
}
export type ProfileStackParamList = {
	ProfileStack: undefined
	EditProfile: undefined
}
export type CategoriesStackParamList = {
	CategoriesStack: undefined
	DetailPostStack: { post_id: number; title: string }
}

export type HomeTabScreenProps<T extends keyof HomeTabParamsList> =
	CompositeScreenProps<
		BottomTabScreenProps<HomeTabParamsList, T>,
		RootNativeStackScreenProps<keyof RootNativeStackParamList>
	>
export type HomeStackProps<T extends keyof HomeStackParamList> =
	CompositeScreenProps<
		StackScreenProps<HomeStackParamList, T>,
		HomeTabScreenProps<keyof HomeTabParamsList>
	>
export type CategoriesStackProps<T extends keyof CategoriesStackParamList> =
	CompositeScreenProps<
		StackScreenProps<CategoriesStackParamList, T>,
		HomeTabScreenProps<keyof HomeTabParamsList>
	>
export type ProfileStackProps<T extends keyof ProfileStackParamList> =
	CompositeScreenProps<
		StackScreenProps<ProfileStackParamList, T>,
		HomeTabScreenProps<keyof HomeTabParamsList>
	>

declare global {
	namespace ReactNavigation {
		interface RootParamList extends RootNativeStackParamList {}
	}
}
