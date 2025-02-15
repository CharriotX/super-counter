import { Box, ThemeProvider, Typography } from '@mui/material'
import { Counter } from './components/counter/Counter'
import { CustomAppBar } from './components/appBar/CustomAppBar'
import { darkTheme, lightTheme } from './components/theme/Theme'
import { useState } from 'react'
import { appBoxSx, CustomContainer } from './components/container/CustomContainer'
import { CounterButton } from './components/button/CounterButton'

type CounterType = "primary" | "secondary"

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true)
  const [counterMode, setCounterMode] = useState<CounterType>('primary')

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev)
  }


  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <CustomAppBar isDarkMode={isDarkMode} toggleTheme={toggleTheme}></CustomAppBar>
      <CustomContainer>
        {/* <Box sx={appBoxSx}>
          <Typography component="div" color="textPrimary" marginBottom="20px">Choose counter</Typography>
          <Box sx={{ width: "200px", display: "flex", justifyContent: "space-between" }}>
            <CounterButton>Primary</CounterButton>
            <CounterButton>Secondary</CounterButton>
          </Box>
        </Box> */}
        <Counter></Counter>
      </CustomContainer>
    </ThemeProvider >
  )
}

export default App
