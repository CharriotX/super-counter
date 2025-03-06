import { RootState } from "./store";

export const loadState = () => {
    try {
        const counterState = localStorage.getItem("counter");
        const appState = localStorage.getItem("app")
        return {
            counter: counterState ? JSON.parse(counterState) : undefined,
            app: appState ? JSON.parse(appState) : undefined,
        }
    } catch (err) {
        console.error('Could not load state from localStorage', err);
        return undefined;
    }
};

export const saveState = (state: RootState) => {
    try {
        const serializedStateCounter = JSON.stringify(state.counter);
        const serializedStateTheme = JSON.stringify(state.app);
        localStorage.setItem("counter", serializedStateCounter);
        localStorage.setItem("app", serializedStateTheme)
    } catch (err) {
        console.error('Could not save state to localStorage', err);
    }
};