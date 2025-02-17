import { Grid2, ThemeProvider } from '@mui/material'
import { Counter } from './components/counter/Counter'
import { CustomAppBar } from './components/appBar/CustomAppBar'
import { darkTheme, lightTheme } from './components/theme/Theme'
import { useState } from 'react'
import { CustomContainer } from './components/container/CustomContainer'
import { CounterWithSettings } from './components/counterWithSettings/CounterWithSettings'
import ErrorProvider from './components/context/errorContext/ErrorProvider'
import { ChangeThemeBox } from './components/changeThemeBlock/ChangeThemeBox'
import { changeThemeContainerSx } from './components/changeThemeBlock/ChangeThemeBox.styled'
import { counterBlockSx } from './components/counter/Counter.styles'

export type CounterModeType = "primary" | "secondary"

function App() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true)
  const [counterMode, setCounterMode] = useState<CounterModeType>('primary')

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev)
  }

  const toggleCounterMode = (mode: CounterModeType) => {
    setCounterMode(mode)
  }


  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <ErrorProvider>
        <CustomAppBar isDarkMode={isDarkMode} toggleTheme={toggleTheme}></CustomAppBar>
        <CustomContainer>
          <Grid2 sx={changeThemeContainerSx}>
            <ChangeThemeBox toggleCounterMode={toggleCounterMode} counterMode={counterMode}></ChangeThemeBox>
          </Grid2>
          <Grid2 sx={counterBlockSx}>
            {counterMode === "primary"
              ? <Counter></Counter>
              : <CounterWithSettings></CounterWithSettings>
            }
          </Grid2>
        </CustomContainer>
      </ErrorProvider>
    </ThemeProvider >
  )
}

export default App
