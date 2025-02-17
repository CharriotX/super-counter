import { styled } from "@mui/material";

export const CustomContainer = styled("div")(({ theme }) => [{
    width: "100vw",
    height: "100vh",
    margin: "0 auto",
    padding: 0,
    background: theme.palette.background.default,
}])
