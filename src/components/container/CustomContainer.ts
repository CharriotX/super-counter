import { Container, styled, SxProps } from "@mui/material";

export const CustomContainer = styled(Container)(({ theme }) => [{
    width: "100vw",
    height: "100vh",
    background: theme.palette.background.default,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
}])

export const appBoxSx: SxProps = {
    textAlign: "center",
    marginBottom: "50px"
}