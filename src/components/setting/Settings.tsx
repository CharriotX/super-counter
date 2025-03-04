import { ChangeEvent, useEffect, useState } from 'react'
import { Button } from '../button/Button'
import { Input } from '../input/Input'
import { useError } from '../context/errorContext/UseError'
import { useAppDispatch } from '../../common/hooks/useAppDispatch'
import { setCounterAC, setCounterSettingsAC } from '../../model/counter-reducer'
import s from "./Settings.module.css"
import { useAppSelector } from '../../common/hooks/useAppSelector'
import { selectCounter } from '../../model/counter-selector'


type Props = {
    closeSettings?: () => void
    setCounterModeHandler?: (set: boolean) => void
    isCounterActive?: boolean
}

export const Settings = ({ closeSettings, setCounterModeHandler, isCounterActive }: Props) => {
    const counter = useAppSelector(selectCounter)
    const dispatch = useAppDispatch()
    const [startNumberInput, setStartNumberInput] = useState<number>(counter.startValue)
    const [maxNumberInput, setMaxNumberInput] = useState<number>(counter.maxValue)
    const { error, setError } = useError();

    useEffect(() => {
        errorHandler()
    }, [startNumberInput, maxNumberInput])

    const onChangeInputStart = (e: ChangeEvent<HTMLInputElement>) => {
        setStartNumberInput(Number(e.currentTarget.value))
        if (setCounterModeHandler !== undefined) {
            setCounterModeHandler(false)
        }
    }

    const onChangeInputMax = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxNumberInput(Number(e.currentTarget.value))
        if (setCounterModeHandler !== undefined) {
            setCounterModeHandler(false)
        }
    }

    const setHandler = () => {
        if (!error) {
            dispatch(setCounterSettingsAC({ newStartValue: startNumberInput, newMaxValue: maxNumberInput }))
            dispatch(setCounterAC({ newNum: startNumberInput }))
            if (closeSettings !== undefined) {
                closeSettings()
            } if (setCounterModeHandler !== undefined) {
                setCounterModeHandler(true)
            }
        }
    }

    const errorHandler = () => {
        if (maxNumberInput <= startNumberInput) {
            setError("Incorrect input value")
        } else if (startNumberInput < 0 || maxNumberInput < 0) {
            setError("Value cannot be negative")
        }
        else {
            setError(null)
        }
    }

    return (
        <div className={s.settingsBlock}>
            <div className={s.inputsBlock}>
                <Input
                    type="number"
                    value={maxNumberInput}
                    onChange={onChangeInputMax}
                    error={error}
                ></Input>
                <Input
                    type="number"
                    value={startNumberInput}
                    onChange={onChangeInputStart}
                    error={error}
                ></Input>
            </div>
            {isCounterActive === undefined ? <div className={s.errorMessage}>{error}</div> : ""}
            <div className={s.buttonBlock}>
                <Button onClick={setHandler} disabled={error !== null || isCounterActive}>set</Button>
            </div>
        </div >
    )
}
