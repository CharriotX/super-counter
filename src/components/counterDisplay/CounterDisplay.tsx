import { useError } from "../context/errorContext/UseError"
import s from "./CounterDisplay.module.css"

type Props = {
    counter: number
    max: number
}

export const CounterDisplay = ({ counter, max }: Props) => {
    const { error } = useError()

    return (
        <div className={s.display}>
            {error
                ? <span className={s.errorMessage}>{error}</span>
                : <span className={counter === max ? s.maxCount : ""}>{counter}</span>}
        </div >
    )
}
