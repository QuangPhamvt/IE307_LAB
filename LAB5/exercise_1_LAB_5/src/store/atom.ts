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
export const selectLocationState = atom<Location.LocationObject | null>({
	key: "selectLocationStateAtom",
	default: null,
})
export const listPlaceState = atom<Array<{id: string, image: string, title: string, latitude: number, longitude: number}>>({
  key: "listPlaceStateAtom",
  default: []
})
export const listImageLibraryState = atom<{state: "loading" | "hasValue" | "hasError", data: Array<{id: string, uri: string} >}>({
  key: "listImageLibraryStateAtom",
  default: {
    state: "hasValue",
    data: []
  }
})
