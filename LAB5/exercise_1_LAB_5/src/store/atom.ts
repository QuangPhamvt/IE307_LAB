import { atom } from "recoil"
import * as Location from "expo-location"

export const imageSelectedState = atom<string>({
	key: "imageSelectedStateAtom",
	default: "",
})
export const inputTitleState = atom<string>({
	key: "inputTitleStateAtom",
	default: "",
})
export const locationState = atom<Location.LocationObject | null>({
	key: "locationStateAtom",
	default: null,
})
