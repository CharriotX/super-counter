import { createContext, ReactNode, useState } from "react"

type ErrorContextType = {
    error: string | null
    setError: (error: string | null) => void
}

type ErrorProviderType = {
    children: ReactNode
}
export const ErrorContext = createContext<ErrorContextType | undefined>(undefined);


const ErrorProvider = ({ children }: ErrorProviderType) => {
    const [error, setError] = useState<string | null>(null)

    return (
        <ErrorContext.Provider value={{ error, setError }}>
            {children}
        </ErrorContext.Provider>
    )
}

export default ErrorProvider