import { Box, Switch, Toolbar, Typography } from "@mui/material"
import { StyledAppBar } from "./CustomAppBar.styles"

type Props = {
    isDarkMode: boolean
    toggleTheme: () => void
}

export const CustomAppBar = ({ isDarkMode, toggleTheme }: Props) => {
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
                        onChange={toggleTheme}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                </Box>

            </Toolbar>
        </StyledAppBar>
    )
}
