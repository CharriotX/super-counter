import { ReactNode } from "react"

type Props = {
    children: ReactNode
    onClick: () => void
    disabled?: boolean
}

export const Button = ({ children, onClick, disabled }: Props) => {

    const onClickHandler = () => {
        onClick()
    }
    return (
        <button onClick={onClickHandler} disabled={disabled}>
            {children}
        </button>
    )
}
