import { styled, TextField } from "@mui/material";

export const SettingsInput = styled(TextField)(({ theme }) => ({
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: theme.palette.text.primary,
        },
        '&:hover fieldset': {
            border: "2px solid",
            borderColor: theme.palette.text.primary,
        },
    },
    '& .MuiInputLabel-root': {
        color: theme.palette.text.primary,
    },
}));
