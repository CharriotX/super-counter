import { RootState } from "./store";

export const loadState = () => {
    try {
        const counterState = localStorage.getItem("counter");
        return {
            counter: counterState ? JSON.parse(counterState) : undefined,
        }
    } catch (err) {
        console.error('Could not load state from localStorage', err);
        return undefined;
    }
};

export const saveState = (state: RootState) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("counter", serializedState);
    } catch (err) {
        console.error('Could not save state to localStorage', err);
    }
};