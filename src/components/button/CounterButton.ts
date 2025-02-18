import { Button, styled, SxProps, Theme } from "@mui/material";


export const CounterButton = styled(Button)(({ theme }) => ({
    background: theme.palette.secondary.main,
    color: theme.palette.text.secondary,
    '&.Mui-disabled': {
        background: theme.palette.action.disabled,
        color: theme.palette.secondary.main,
    },
}))

export const getCounterModeButtonSx = (active: boolean, theme: Theme): SxProps => ({
    width: "120px",
    boxShadow: active ? `0px 0px 10px 3px ${theme.palette.text.primary}` : "none",
    margin: 1
})