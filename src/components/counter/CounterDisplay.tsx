import "./Counter.css"

type Props = {
    counter: number
    max: number
}

export const CounterDisplay = ({ counter, max }: Props) => {
    return (
        <div className={counter === max ? "counterDisplay max" : "counterDisplay"}>
            {counter}
        </div>
    )
}
