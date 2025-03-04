import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "../model/counter-reducer";
import { loadState, saveState } from "./localStorageUtils";

const persistedState = loadState();


const rootReducer = combineReducers({
    counter: counterReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    preloadedState: persistedState?.counter
})

store.subscribe(() => {
    saveState(store.getState())
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 