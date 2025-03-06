import { useState } from "react"
import { Button } from "../../../../common/components/button/Button"
import { selectCounter } from "../../model/counter-selector"
import { useAppSelector } from "../../../../common/hooks/useAppSelector"
import { useAppDispatch } from "../../../../common/hooks/useAppDispatch"
import { incrementAC, resetAC } from "../../model/counter-reducer"
import s from "@/features/counter/ui/counter/Counter.module.css"
import { Settings } from "@/common/components/setting/Settings"
import { CounterDisplay } from "@/common/components/counterDisplay/CounterDisplay"

export const Counter = () => {
    const counter = useAppSelector(selectCounter)
    const dispatch = useAppDispatch()
    const [isSettingsOpen, setIsSettingsOpen] = useState<boolean>(false)

    const add = () => {
        if (counter.startValue === counter.maxValue) {
            return
        }
        dispatch(incrementAC())
    }

    const reset = () => {
        dispatch(resetAC())
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
                    <Settings closeSettings={closeSetting}></Settings>
                </div>
                : <div>
                    <CounterDisplay></CounterDisplay>
                    <div className={s.buttonBlock}>
                        <Button onClick={add} disabled={counter.counterValue === counter.maxValue ? true : false} >add</Button>
                        <Button onClick={reset} disabled={counter.counterValue == counter.startValue ? true : false}>reset</Button>
                        <Button onClick={openSettings}>set</Button>
                    </div>
                </div>
            }
        </div >
    )
}
