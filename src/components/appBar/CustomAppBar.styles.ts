import { AppBar, styled } from "@mui/material";

export const StyledAppBar = styled(AppBar)(({ theme }) => ({
    background: theme.palette.secondary.main,
    position: "static",
}))