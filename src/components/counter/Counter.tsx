import { Settings } from "../setting/Settings"
import { useEffect, useState } from "react"
import { CounterDisplay } from "../counterDisplay/CounterDisplay"
import { Button } from "../button/Button"
import { selectCounter } from "../../model/counter-selector"
import { useAppSelector } from "../../common/hooks/useAppSelector"
import { useAppDispatch } from "../../common/hooks/useAppDispatch"
import { incrementAC, resetAC, setCounterAC } from "../../model/counter-reducer"
import s from "./Counter.module.css"

export const Counter = () => {
    const counter = useAppSelector(selectCounter)
    const dispatch = useAppDispatch()
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
        dispatch(setCounterAC({ newNum: start }))
    }

    const add = () => {
        if (counter === max) {
            return
        }
        dispatch(incrementAC())
    }

    const reset = () => {
        // getValuesFromLocalStorage()
        dispatch(resetAC({ startNum: start }))
    }

    const openSettings = () => {
        setIsSettingsOpen(true)
    }

    const closeSetting = () => {
        setIsSettingsOpen(false)
    }

    return (
        <div className={s.counter}>
            {isSettingsOpen
                ? <div>
                    <Settings start={start} max={max} setMax={setMax} setStart={setStart} closeSettings={closeSetting}></Settings>
                </div>
                : <div>
                    <CounterDisplay counter={counter} max={max}></CounterDisplay>
                    <div className={s.buttonBlock}>
                        <Button onClick={add} disabled={counter === max ? true : false} >add</Button>
                        <Button onClick={reset} disabled={counter == start ? true : false}>reset</Button>
                        <Button onClick={openSettings}>set</Button>
                    </div>
                </div>
            }
        </div >
    )
}
