import { Button, styled } from "@mui/material";



export const CounterButton = styled(Button)(({ theme }) => ({
    background: theme.palette.secondary.main,
    color: theme.palette.text.secondary,
    '&.Mui-disabled': {
        background: theme.palette.action.disabled,
        color: theme.palette.secondary.main,
    },

}))