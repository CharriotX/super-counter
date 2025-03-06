import { createAction, createReducer } from "@reduxjs/toolkit"

const initialState = {
    themeMode: "light" as ThemeModeType
}

export const toggleThemeAC = createAction<{ themeMode: ThemeModeType }>("app/toggleTheme")

export const appReducer = createReducer(initialState, builder => {
    builder.addCase(toggleThemeAC, (state, actions) => {
        state.themeMode = actions.payload.themeMode
    })
})

type ThemeModeType = "light" | "dark"