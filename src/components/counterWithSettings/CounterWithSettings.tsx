import { Box } from "@mui/material"
import { useEffect, useState } from "react"
import { CounterButton } from "../button/CounterButton"
import { CounterDisplay } from "../counterDisplay/CounterDisplay"
import { Settings } from "../setting/Settings"
import { counterSettingsSx, settingsWithCounterSx } from "./CounterWithSettings.styles"

export const CounterWithSettings = () => {
    const [counter, setCounter] = useState<number>(0)
    const [start, setStart] = useState<number>(0)
    const [max, setMax] = useState<number>(5)
    const [isCounterActive, setCounterIsActive] = useState<boolean>(true)

    useEffect(() => {
        getValuesFromLocalStorage()
    }, [start])

    const getValuesFromLocalStorage = () => {
        let startNumber = localStorage.getItem("startNumber")
        let maxNumber = localStorage.getItem("maxNumber")

        if (startNumber && maxNumber) {
            let newStartNumber = JSON.parse(startNumber);
            let newMaxNumber = JSON.parse(maxNumber);

            setStart(newStartNumber)
            setMax(newMaxNumber)
        }
        setCounter(start)
    }

    const add = () => {
        if (counter === max) {
            return
        }
        setCounter(prev => prev + 1)
    }

    const reset = () => {
        getValuesFromLocalStorage()
        setCounter(start)
    }

    const handleSetCounterMode = (set: boolean) => {
        setCounterIsActive(set)
    }

    return (
        <Box sx={counterSettingsSx}>
            <Box sx={settingsWithCounterSx}>
                <Settings
                    setCounter={setCounter}
                    start={start}
                    max={max}
                    setMax={setMax}
                    setStart={setStart}
                    handleSetCounterMode={handleSetCounterMode}
                    isCounterActive={isCounterActive}
                ></Settings>
            </Box>
            <Box sx={settingsWithCounterSx}>
                <CounterDisplay counter={counter} max={max}></CounterDisplay>
                <Box display={"flex"} justifyContent={"space-around"}>
                    <CounterButton variant='contained' onClick={add} disabled={counter === max ? true : !isCounterActive ? true : false} >add</CounterButton>
                    <CounterButton variant='contained' onClick={reset} disabled={counter == start ? true : !isCounterActive ? true : false} >reset</CounterButton>
                </Box>
            </Box>
        </Box>
    )
}
