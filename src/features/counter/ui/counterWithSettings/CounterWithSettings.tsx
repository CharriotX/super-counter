import { useAppDispatch } from "@/common/hooks/useAppDispatch"
import { useState } from "react"
import { useSelector } from "react-redux"
import s from "@/features/counter/ui/counterWithSettings/CounterWithSettings.module.css"
import { CounterDisplay } from "@/common/components/counterDisplay/CounterDisplay"
import { Settings } from "@/common/components/setting/Settings"
import { selectCounter } from "@/features/counter/model/counter-selector"
import { incrementAC, resetAC } from "@/features/counter/model/counter-reducer"
import { Button } from "@/common/components/button/Button"


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
