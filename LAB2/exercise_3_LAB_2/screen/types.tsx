import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import {
	CompositeScreenProps,
	NavigatorScreenParams,
} from "@react-navigation/native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"

export type RootNativeStackParamList = {
	Home: NavigatorScreenParams<HomeTabParamsList>
	LogIn: undefined
	SignUp: undefined
}

export type RootNativeStackScreenProps<
	T extends keyof RootNativeStackParamList
> = NativeStackScreenProps<RootNativeStackParamList, T>

export type HomeTabParamsList = {
	Home: undefined
	Categories: undefined
	Favorites: undefined
	Profile: undefined
}
export type HomeTabScreenProps<T extends keyof HomeTabParamsList> =
	CompositeScreenProps<
		BottomTabScreenProps<HomeTabParamsList, T>,
		RootNativeStackScreenProps<keyof RootNativeStackParamList>
	>

declare global {
	namespace ReactNavigation {
		interface RootParamList extends RootNativeStackParamList {}
	}
}
