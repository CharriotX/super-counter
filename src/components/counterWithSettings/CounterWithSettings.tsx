import { useEffect, useState } from "react"
import { Button } from "../button/Button"
import { CounterDisplay } from "../counterDisplay/CounterDisplay"
import { Settings } from "../setting/Settings"
import s from "./CounterWithSettings.module.css"
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
        <div className={s.counterBox}>
            <div className={s.counterItems}>
                <Settings
                    start={start}
                    max={max}
                    setMax={setMax}
                    setStart={setStart}
                    handleSetCounterMode={handleSetCounterMode}
                    isCounterActive={isCounterActive}
                ></Settings>
            </div>
            <div className={s.counterItems}>
                <CounterDisplay counter={counter} max={max}></CounterDisplay>
                <div className={s.counterButtons}>
                    <Button onClick={add} disabled={counter === max ? true : !isCounterActive ? true : false} >add</Button>
                    <Button onClick={reset} disabled={counter == start ? true : !isCounterActive ? true : false} >reset</Button>
                </div>
            </div>
        </div>
    )
}
