import { Grid2, ThemeProvider } from '@mui/material'
import { Counter } from './components/counter/Counter'
import { CustomAppBar } from './components/appBar/CustomAppBar'
import { darkTheme, lightTheme } from './components/theme/Theme'
import { useEffect, useState } from 'react'
import { CustomContainer } from './components/container/CustomContainer'
import { CounterWithSettings } from './components/counterWithSettings/CounterWithSettings'
import ErrorProvider from './components/context/errorContext/ErrorProvider'
import { ChangeThemeBox } from './components/changeThemeBlock/ChangeThemeBox'
import { changeThemeContainerSx } from './components/changeThemeBlock/ChangeThemeBox.styled'
import { counterBlockSx } from './components/counter/Counter.styles'

export type CounterModeType = "primary" | "secondary"
export type ThemeModeType = "dark" | "light"

function App() {
  const [themeMode, setThemeMode] = useState<ThemeModeType>(() => {
    return localStorage.getItem("themeMode") as ThemeModeType || "dark"
  })
  const [counterMode, setCounterMode] = useState<CounterModeType>('primary')

  useEffect(() => {
    getThemeFromLocalStorage()
  }, [])

  const getThemeFromLocalStorage = () => {
    let themeModeStr = localStorage.getItem("themeMode")
    if (themeModeStr) {
      if (themeModeStr === "dark" || themeModeStr === "light") {
        setThemeMode(themeModeStr)
      }
    }
  }

  const toggleTheme = (mode: ThemeModeType) => {
    setThemeMode(mode)
    localStorage.setItem("themeMode", mode)
  }

  const toggleCounterMode = () => {
    setCounterMode(prev => (prev === "primary" ? "secondary" : "primary"))
  }

  return (
    <ThemeProvider theme={themeMode === "dark" ? darkTheme : lightTheme}>
      <ErrorProvider>
        <CustomAppBar isDarkMode={themeMode === "dark"} toggleTheme={toggleTheme}></CustomAppBar>
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
