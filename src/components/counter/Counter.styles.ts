import { Box, styled, SxProps } from "@mui/material";

export const StyledCounterBlock = styled(Box)(({ theme }) => ({
    border: `2px solid ${theme.palette.text.primary}`,
    borderRadius: "15px",
    padding: "20px",
    width: "240px",
    height: "160px",
}))

export const counterBlockSx: SxProps = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "20px 0"
}