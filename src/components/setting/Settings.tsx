import { ChangeEvent, useEffect, useState } from 'react'
import "./Settings.css"
import { Button } from '../button/Button'
import { Input } from '../input/Input'

type Props = {
    start: number
    max: number
    setCounter: (start: number) => void
    setMax: (max: number) => void
    closeSettings: () => void
    setStart: (start: number) => void
}

export const Settings = ({ setStart, setMax, closeSettings, setCounter, start, max }: Props) => {

    const [newStartNumber, setNewStartNumber] = useState<number>(start);
    const [newMaxNumber, setNewMaxNumber] = useState<number>(max)
    const [error, setError] = useState<string>("")

    useEffect(() => {
        handleSetLocalStorage()
    }, [newMaxNumber, newStartNumber])

    const onChangeInputStart = (e: ChangeEvent<HTMLInputElement>) => {
        setNewStartNumber(Number(e.target.value))
    }

    const onChangeInputMax = (e: ChangeEvent<HTMLInputElement>) => {
        setNewMaxNumber(Number(e.target.value))
    }

    const setHandler = () => {
        if (error.length === 0) {
            setCounter(newStartNumber)
            setStart(newStartNumber)
            setMax(newMaxNumber)
            closeSettings()
        }
    }

    const handleSetLocalStorage = () => {
        if (newMaxNumber <= newStartNumber) {
            setError("Incorrect input value")
        } else if (newMaxNumber < 0 || newStartNumber < 0) {
            setError("Value cannot be negative")
        }
        else {
            setError("")
            localStorage.setItem("startNumber", JSON.stringify(newStartNumber))
            localStorage.setItem("maxNumber", JSON.stringify(newMaxNumber))
        }
    }

    return (
        <div className='set'>
            <div className="setDisplay">
                <span>max number</span><Input type="number" value={newMaxNumber} onChange={onChangeInputMax} error={error.length > 0}></Input>
                <span>start number</span><Input type="number" value={newStartNumber} onChange={onChangeInputStart} error={error.length > 0}></Input>
                <div className='errorDisplay'>
                    {error.length > 0 ? <div className='errorMessage' style={{ color: "crimson" }}>{error}</div> : ''}
                </div>
            </div>
            <div className="setButton">
                <Button onClick={setHandler} disabled={error.length > 0}>set</Button>
            </div>
        </div >
    )
}
