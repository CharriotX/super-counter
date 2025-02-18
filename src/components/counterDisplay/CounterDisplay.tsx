import { Box, Typography, useTheme } from "@mui/material"
import { getColorCounter } from "./CounterDisplay.styles"
import { useError } from "../context/errorContext/UseError"

type Props = {
    counter: number
    max: number
}

export const CounterDisplay = ({ counter, max }: Props) => {
    const theme = useTheme();
    const { error } = useError()

    return (
        <Box sx={getColorCounter({ max, counter, theme })}>
            {error ? <Typography fontSize={"14px"} color={"error"}>{error}</Typography> : counter}
        </Box >
    )
}
