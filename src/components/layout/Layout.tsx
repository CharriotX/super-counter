import { ReactNode } from "react"
import { Header } from "../header/Header"
import ErrorProvider from "../context/errorContext/ErrorProvider"
import s from "./Layout.module.css"

type Props = {
    children: ReactNode
}

export const Layout = ({ children }: Props) => {
    return (
        <ErrorProvider>
            <Header></Header>
            <div className={s.content}>
                {children}
            </div>
        </ErrorProvider >
    )
}
