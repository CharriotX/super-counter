import { Box, Switch, Toolbar, Typography } from "@mui/material"
import { StyledAppBar } from "./CustomAppBar.styles"
import { ThemeModeType } from "../../App"

type Props = {
    isDarkMode: boolean
    toggleTheme: (mode: ThemeModeType) => void
}

export const CustomAppBar = ({ isDarkMode, toggleTheme }: Props) => {
    const onChangeThemeMode = () => {
        toggleTheme(isDarkMode ? "light" : "dark")
    }

    return (
        <StyledAppBar>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Super Counter
                </Typography>
                <Box>
                    <Typography component="span">
                        Dark mode
                    </Typography>
                    <Switch
                        checked={isDarkMode}
                        onChange={onChangeThemeMode}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                </Box>
            </Toolbar>
        </StyledAppBar>
    )
}
