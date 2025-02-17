import { ChangeEvent, useEffect, useState } from 'react'
import { Box } from '@mui/material'
import { CounterButton } from '../button/CounterButton'
import { settingsBoxSx, settingsButtonBoxSx } from './Settings.style'
import { SettingsInput } from '../input/Input.styles'
import { useError } from '../context/errorContext/useError'

type Props = {
    start: number
    max: number
    setCounter: (start: number) => void
    setMax: (max: number) => void
    closeSettings?: () => void
    handleSetCounterMode?: (set: boolean) => void
    isCounterActive?: boolean
    setStart: (start: number) => void
}

export const Settings = ({ setStart, setMax, closeSettings, setCounter, handleSetCounterMode, isCounterActive, start, max }: Props) => {

    const [newStartNumber, setNewStartNumber] = useState<number>(start);
    const [newMaxNumber, setNewMaxNumber] = useState<number>(max)
    const { error, setError } = useError();

    useEffect(() => {
        handleSetLocalStorage()
        getValuesFromLocalStorage()
    }, [newMaxNumber, newStartNumber, error])

    const getValuesFromLocalStorage = () => {
        let startNumber = localStorage.getItem("startNumber")
        let maxNumber = localStorage.getItem("maxNumber")

        if (startNumber && maxNumber) {
            let newStartNumber = JSON.parse(startNumber);
            let newMaxNumber = JSON.parse(maxNumber);

            setStart(newStartNumber)
            setMax(newMaxNumber)
        }
        setCounter(start)
    }

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
            setCounter(newStartNumber)
            setStart(newStartNumber)
            setMax(newMaxNumber)
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
        <Box>
            <Box sx={settingsBoxSx}>
                <SettingsInput type="number"
                    value={newMaxNumber}
                    variant="outlined"
                    onChange={onChangeInputMax}
                    error={error !== null}
                    size={"small"}
                    label={"max number"}
                    color={error !== null ? "error" : "primary"}
                    focused={false}
                ></SettingsInput>
                <SettingsInput
                    type="number"
                    value={newStartNumber}
                    variant="outlined"
                    onChange={onChangeInputStart}
                    error={error !== null}
                    size={"small"}
                    label={"start number"}
                    margin="normal"
                    color={error !== null ? "error" : "primary"}
                    focused={false}
                ></SettingsInput>
            </Box>
            <Box sx={settingsButtonBoxSx}>
                <CounterButton onClick={setHandler} disabled={error !== null || isCounterActive}>set</CounterButton>
            </Box>
        </Box >
    )
}
