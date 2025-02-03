import { useEffect, useState } from "react"
import { Button } from "../button/Button"
import "./Counter.css"
import { Settings } from "../setting/Settings"
import { CounterDisplay } from "./CounterDisplay"

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
        setCounter(counter + 1)
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
        <div className="counter">
            {isSettingsOpen
                ? <Settings setCounter={setCounter} start={start} max={max} setMax={setMax} setStart={setStart} closeSettings={closeSetting}></Settings>
                : <CounterDisplay counter={counter} max={max}></CounterDisplay>
            }
            {isSettingsOpen
                ? ""
                : <div className="counterButtons">
                    <Button onClick={add} disabled={counter === max ? true : false}>add</Button>
                    <Button onClick={reset} disabled={counter == start ? true : false}>reset</Button>
                    <Button onClick={openSettings}>set</Button>
                </div>
            }
        </div >
    )
}
