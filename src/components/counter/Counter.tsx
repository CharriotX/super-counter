import { Settings } from "../setting/Settings"
import { useEffect, useState } from "react"
import { Box } from "@mui/material"
import { CounterDisplay } from "../counterDisplay/CounterDisplay"
import { StyledCounterBlock } from "./Counter.styles"
import { CounterButton } from "../button/CounterButton"

export const Counter = () => {
    const [counter, setCounter] = useState<number>(0)
    const [start, setStart] = useState<number>(0)
    const [max, setMax] = useState<number>(5)
    const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false)


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

    const openSettings = () => {
        setIsSettingsOpen(true)
    }

    const closeSetting = () => {
        setIsSettingsOpen(false)
    }

    return (
        <StyledCounterBlock>
            {isSettingsOpen
                ? <Settings setCounter={setCounter} start={start} max={max} setMax={setMax} setStart={setStart} closeSettings={closeSetting}></Settings>
                : <Box>
                    <CounterDisplay counter={counter} max={max}></CounterDisplay>
                    <Box>
                        <CounterButton variant='contained' onClick={add} disabled={counter === max ? true : false} >add</CounterButton>
                        <CounterButton variant='contained' onClick={reset} disabled={counter == start ? true : false} sx={{ margin: '0 10px' }}>reset</CounterButton>
                        <CounterButton variant='contained' onClick={openSettings}>set</CounterButton>
                    </Box>
                </Box>
            }
        </StyledCounterBlock >
    )
}
