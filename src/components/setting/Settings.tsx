import { ChangeEvent, useEffect, useState } from 'react'
import { Button } from '../button/Button'
import { Input } from '../input/Input'
import { useError } from '../context/errorContext/UseError'
import { useAppDispatch } from '../../common/hooks/useAppDispatch'
import { setCounterAC } from '../../model/counter-reducer'
import s from "./Settings.module.css"


type Props = {
    start: number
    max: number
    setMax: (max: number) => void
    closeSettings?: () => void
    handleSetCounterMode?: (set: boolean) => void
    isCounterActive?: boolean
    setStart: (start: number) => void
}

export const Settings = ({ setStart, setMax, closeSettings, handleSetCounterMode, isCounterActive, start, max }: Props) => {
    const dispatch = useAppDispatch()
    const [newStartNumber, setNewStartNumber] = useState<number>(() => {
        let startNumber = localStorage.getItem("startNumber")
        return startNumber ? JSON.parse(startNumber) : start
    });
    const [newMaxNumber, setNewMaxNumber] = useState<number>(() => {
        let maxNumber = localStorage.getItem("maxNumber")
        return maxNumber ? JSON.parse(maxNumber) : max
    })
    const { error, setError } = useError();

    useEffect(() => {
        handleSetLocalStorage()
    }, [newMaxNumber, newStartNumber])

    const onChangeInputStart = (e: ChangeEvent<HTMLInputElement>) => {
        setNewStartNumber(Number(e.target.value))
        if (handleSetCounterMode !== undefined) {
            handleSetCounterMode(false)
        }
    }

    const onChangeInputMax = (e: ChangeEvent<HTMLInputElement>) => {
        setNewMaxNumber(Number(e.target.value))
        if (handleSetCounterMode !== undefined) {
            handleSetCounterMode(false)
        }
    }

    const setHandler = () => {
        if (!error) {
            setStart(newStartNumber)
            setMax(newMaxNumber)
            dispatch(setCounterAC({ newNum: newStartNumber }))
            if (closeSettings !== undefined) {
                closeSettings()
            } if (handleSetCounterMode !== undefined) {
                handleSetCounterMode(true)
            }
        }
    }

    const handleError = (message: string | null) => {
        setError(message)
    }

    const handleSetLocalStorage = () => {
        if (newMaxNumber <= newStartNumber) {
            handleError("Incorrect input value")
        } else if (newStartNumber < 0) {
            handleError("Value cannot be negative")
        }
        else {
            handleError(null)
            localStorage.setItem("startNumber", JSON.stringify(newStartNumber))
            localStorage.setItem("maxNumber", JSON.stringify(newMaxNumber))
        }
    }

    return (
        <div>
            <div className={s.inputsBlock}>
                <Input
                    type="number"
                    value={newMaxNumber}
                    onChange={onChangeInputMax}
                    error={error}
                ></Input>
                <Input
                    type="number"
                    value={newStartNumber}
                    onChange={onChangeInputStart}
                    error={error}
                ></Input>
            </div>
            <div className={s.buttonBlock}>
                <Button onClick={setHandler} disabled={error !== null || isCounterActive}>set</Button>
            </div>
        </div >
    )
}
