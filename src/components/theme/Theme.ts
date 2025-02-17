import { createTheme } from "@mui/material";

export const lightTheme = createTheme({
    palette: {
        mode: 'light',
        primary: {
            main: "#482880",
        },
        secondary: {
            main: "#37474f",
        },
        background: {
            default: '#ffffff',
            paper: "#37474f"
        },
        text: {
            primary: "#263238",
            secondary: '#ffffff',
        },
        action: {
            disabled: '#78909c',
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#ffffff',
        },
        secondary: {
            main: '#37474f',
        },
        background: {
            default: "#263238"
        },
        text: {
            primary: "#ffffff",
            secondary: '#cccccc',
        },
        action: {
            disabled: '#78909c',
        },
    },
});