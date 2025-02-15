import { Box, useTheme } from "@mui/material"
import { getColorCounter } from "./CounterDisplay.styles"

type Props = {
    counter: number
    max: number
}

export const CounterDisplay = ({ counter, max }: Props) => {
    const theme = useTheme();

    return (
        <Box sx={getColorCounter({ max, counter, theme })}>
            {counter}
        </Box >
    )
}
