import { createAction, createReducer } from "@reduxjs/toolkit";

let initialState = {
    value: 0
}

export const incrementAC = createAction("counter/increment")
export const resetAC = createAction<{ startNum: number }>("counter/reset")
export const setCounterAC = createAction<{ newNum: number }>("counter/setNum")

export const counterReducer = createReducer(initialState, builder =>
    builder
        .addCase(incrementAC, (state) => {
            state.value = state.value + 1
        })
        .addCase(resetAC, (state, action) => {
            state.value = action.payload.startNum
        })
        .addCase(setCounterAC, (state, action) => {
            state.value = action.payload.newNum
        })
)