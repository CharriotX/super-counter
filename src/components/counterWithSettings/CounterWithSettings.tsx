import { useState } from "react"
import { Button } from "../button/Button"
import { CounterDisplay } from "../counterDisplay/CounterDisplay"
import { Settings } from "../setting/Settings"
import s from "./CounterWithSettings.module.css"
import { useSelector } from "react-redux"
import { selectCounter } from "../../model/counter-selector"
import { useAppDispatch } from "../../common/hooks/useAppDispatch"
import { incrementAC, resetAC } from "../../model/counter-reducer"

export const CounterWithSettings = () => {
    const counter = useSelector(selectCounter)
    const dispatch = useAppDispatch()
    const [isCounterActive, setCounterIsActive] = useState<boolean>(true)

    const add = () => {
        if (counter.counterValue === counter.maxValue) {
            return
        }
        dispatch(incrementAC())
    }

    const reset = () => {
        dispatch(resetAC())
    }

    const setCounterModeHandler = (set: boolean) => {
        setCounterIsActive(set)
    }

    return (
        <div className={s.counterBox}>
            <div className={s.counterItems}>
                <Settings
                    setCounterModeHandler={setCounterModeHandler}
                    isCounterActive={isCounterActive}
                ></Settings>
            </div>
            <div className={s.counterItems}>
                <CounterDisplay></CounterDisplay>
                <div className={s.counterButtons}>
                    <Button onClick={add} disabled={counter.counterValue === counter.maxValue ? true : !isCounterActive ? true : false} >add</Button>
                    <Button onClick={reset} disabled={counter.counterValue == counter.startValue ? true : !isCounterActive ? true : false} >reset</Button>
                </div>
            </div>
        </div>
    )
}
