import { useAppSelector } from "../../common/hooks/useAppSelector"
import { selectCounter } from "../../model/counter-selector"
import { useError } from "../context/errorContext/UseError"
import s from "./CounterDisplay.module.css"


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
