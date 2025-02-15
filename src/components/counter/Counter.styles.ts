import { Box, styled } from "@mui/material";

export const StyledCounterBlock = styled(Box)(({ theme }) => ({
    border: `2px solid ${theme.palette.text.primary}`,
    borderRadius: "15px",
    padding: "20px",
    width: "240px",
    height: "160px",
}))