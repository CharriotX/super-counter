import { createAction, createReducer } from "@reduxjs/toolkit";

let initialState = {
    counterValue: 0,
    startValue: 0,
    maxValue: 5
}

export const incrementAC = createAction("counter/increment")
export const resetAC = createAction("counter/reset")
export const setCounterSettingsAC = createAction<{ newStartValue: number, newMaxValue: number }>("counter/setSettings")
export const setCounterAC = createAction<{ newNum: number }>("counter/setNum")

export const counterReducer = createReducer(initialState, builder =>
    builder
        .addCase(incrementAC, (state) => {
            state.counterValue = state.counterValue + 1
        })
        .addCase(resetAC, (state) => {
            state.counterValue = state.startValue
        })
        .addCase(setCounterSettingsAC, (state, action) => {
            const { newStartValue, newMaxValue } = action.payload
            state.counterValue = newStartValue
            state.startValue = newStartValue
            state.maxValue = newMaxValue
        })
        .addCase(setCounterAC, (state, action) => {
            state.counterValue = action.payload.newNum
        })
)