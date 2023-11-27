import { atom } from "recoil"

type TListNoteState = {
	state: "idle" | "hasValue"
	contents: {
		id: string
		title: string
		note: string
	}[]
}
type TCreateNoteState = {
	state: "idle" | "hasValue"
	contents: {
		id: string | null
		title: string | null
		note: string | null
	}
}
type TDeleteNoteState = {
	state: "idle" | "hasValue" | "success"
	contents: {
		id: string
	} | null
}
type TUpdateNoteState = {
	state: "idle" | "hasValue"
	content: {
		id: string
		title: string
		note: string
	} | null
}
type TThemeState = {
	theme: "Light" | "Dark"
	fontSize: number
}

export const listNoteState = atom<TListNoteState>({
	key: "listNodeState",
	default: {
		state: "idle",
		contents: [],
	},
})
export const createNoteState = atom<TCreateNoteState>({
	key: "createNoteState",
	default: {
		state: "idle",
		contents: {
			id: null,
			title: null,
			note: null,
		},
	},
})

export const updateNoteState = atom<TUpdateNoteState>({
	key: "updateNoteState",
	default: {
		state: "idle",
		content: {
			id: null,
			title: null,
			note: null,
		},
	},
})
export const deleteNoteState = atom<TDeleteNoteState>({
	key: "deleteNoteState",
	default: {
		state: "idle",
		contents: null,
	},
})
export const themeState = atom<TThemeState>({
	key: "themeStateAtom",
	default: {
		theme: "Light",
		fontSize: 16,
	},
})
