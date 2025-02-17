import { Box, Typography, useTheme } from '@mui/material'
import { CounterButton, getCounterModeButtonSx } from '../button/CounterButton'
import { CounterModeType } from '../../App'
import { changeThemeBoxSx } from './ChangeThemeBox.styled'

type Props = {
    counterMode: CounterModeType
    toggleCounterMode: (mode: CounterModeType) => void
}

export const ChangeThemeBox = ({ counterMode, toggleCounterMode }: Props) => {
    const theme = useTheme();
    return (
        <Box sx={changeThemeBoxSx}>
            <Typography component="div" color="textPrimary" marginBottom="20px">Choose counter</Typography>
            <Box display={"flex"} justifyContent={"space-around"}>
                <CounterButton
                    sx={getCounterModeButtonSx(counterMode === 'primary' ? true : false, theme)}
                    onClick={() => toggleCounterMode("primary")}
                >Primary
                </CounterButton>
                <CounterButton
                    sx={getCounterModeButtonSx(counterMode === 'secondary' ? true : false, theme)}
                    onClick={() => toggleCounterMode("secondary")}
                >Secondary
                </CounterButton>
            </Box>
        </Box>
    )
}
