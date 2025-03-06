
import { useAppSelector } from "@/common/hooks/useAppSelector"
import s from "./CounterDisplay.module.css"
import { selectCounter } from "@/features/counter/model/counter-selector"
import { useError } from "@/common/context/errorContext/UseError"


export const CounterDisplay = () => {
    const counter = useAppSelector(selectCounter)
    const { error } = useError()

    return (
        <div className={s.display}>
            {error
                ? <span className={s.errorMessage}>{error}</span>
                : <span className={counter.counterValue === counter.maxValue ? s.maxCount : ""}>{counter.counterValue}</span>}
        </div >
    )
}
