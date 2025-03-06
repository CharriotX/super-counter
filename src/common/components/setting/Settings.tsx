import { useAppDispatch } from "@/common/hooks/useAppDispatch"
import { useAppSelector } from "@/common/hooks/useAppSelector"
import { ChangeEvent, useEffect, useState } from "react"
import { Input } from "../input/Input"
import { Button } from "../button/Button"
import s from "@/common/components/setting/Settings.module.css"
import { useError } from "@/common/context/errorContext/UseError"
import { selectCounter } from "@/features/counter/model/counter-selector"
import { setCounterAC, setCounterSettingsAC } from "@/features/counter/model/counter-reducer"


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
