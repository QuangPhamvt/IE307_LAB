import {
	NavigatorScreenParams,
	CompositeScreenProps,
} from "@react-navigation/native"
import { NativeStackScreenProps } from "@react-navigation/native-stack"
import { StackScreenProps } from "@react-navigation/stack"
export type RootNativeStackParamList = {
	Places: NavigatorScreenParams<PlacesStackParamList>
	Media: undefined
}
export type PlacesStackParamList = {
	MainPlaces: undefined
	AddNewPlace: undefined
  MapPlaces: undefined
  OriginPlaces: {id: string, image: string, latitude: number, longitude: number, title: string}
  MapOrignPlaces: {latitude: number, longitude: number}
}
export type MediaStackParamList = {
	MainMedia: undefined
	RecordVideo: undefined
}
export type RootNativeStackViewProps<T extends keyof RootNativeStackParamList> =
	NativeStackScreenProps<RootNativeStackParamList, T>
export type PlacesStackProps<T extends keyof PlacesStackParamList> =
	CompositeScreenProps<
		StackScreenProps<PlacesStackParamList, T>,
		RootNativeStackViewProps<keyof RootNativeStackParamList>
	>
export type MediaStackProps<T extends keyof MediaStackParamList> =
	CompositeScreenProps<
		StackScreenProps<MediaStackParamList, T>,
		RootNativeStackViewProps<keyof RootNativeStackParamList>
	>
