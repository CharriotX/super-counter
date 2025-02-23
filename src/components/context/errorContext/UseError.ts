import { useContext } from "react"
import { ErrorContext } from "./ErrorProvider"

export const useError = () => {
    const context = useContext(ErrorContext)

    if (context === undefined) {
        throw new Error("useError context undefined")
    }

    return context
}