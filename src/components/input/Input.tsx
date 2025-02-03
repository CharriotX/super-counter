import { ChangeEvent } from 'react'
import "./Input.css"

type Props = {
    type: "text" | "number" | "email" | "password"
    value: string | number
    placeholder?: string
    error: boolean
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
}

export const Input = ({ type, value, placeholder, error, onChange }: Props) => {
    return (
        <input
            type={type}
            value={value}
            placeholder={placeholder}
            onChange={onChange}
            className={error ? "input error" : "input"}
        ></input>
    )
}
