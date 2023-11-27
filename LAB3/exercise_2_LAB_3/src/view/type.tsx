import { BottomTabScreenProps } from "@react-navigation/bottom-tabs"
import {
	CompositeScreenProps,
	NavigatorScreenParams,
} from "@react-navigation/native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"

export type RootNativeStackParamList = {
	HomeScreen: NavigatorScreenParams<HomeTabParamList>
}
export type RootNativeStackScreenProps<
	T extends keyof RootNativeStackParamList
> = NativeStackScreenProps<RootNativeStackParamList, T>

export type HomeTabParamList = {
	Home: NavigatorScreenParams<HomeNativeStackParamList>
	Settings: undefined
}
export type HomeTabScreenProps<T extends keyof HomeTabParamList> =
	CompositeScreenProps<
		BottomTabScreenProps<HomeTabParamList, T>,
		RootNativeStackScreenProps<keyof RootNativeStackParamList>
	>

export type HomeNativeStackParamList = {
	Main: undefined
	NoteApp: { id: string | null }
}
export type HomeNativeStackScreenProps<
	T extends keyof HomeNativeStackParamList
> = CompositeScreenProps<
	NativeStackScreenProps<HomeNativeStackParamList, T>,
	HomeTabScreenProps<keyof HomeTabParamList>
>

declare global {
	namespace ReactNavigation {
		interface RootParamList extends RootNativeStackParamList {}
	}
}
