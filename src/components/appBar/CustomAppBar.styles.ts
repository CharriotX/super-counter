import { styled } from "@mui/material";

export const StyledAppBar = styled("div")(({ theme }) => ({
    padding: 0,
    background: theme.palette.secondary.main,
    position: "static",
    top: 0
}))