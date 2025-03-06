import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { loadState, saveState } from "./localStorageUtils";
import { counterReducer } from "@/features/counter/model/counter-reducer";
import { appReducer } from "./app-reducer";

const persistedState = loadState();


const rootReducer = combineReducers({
    counter: counterReducer,
    app: appReducer
})

export const store = configureStore({
    reducer: rootReducer,
    preloadedState: persistedState
})

store.subscribe(() => {
    saveState(store.getState())
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch 