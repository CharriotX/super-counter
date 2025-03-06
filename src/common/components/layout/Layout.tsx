import { ReactNode } from "react"
import ErrorProvider from "@/common/context/errorContext/ErrorProvider"
import { Header } from "@/common/components/header/Header"
import s from "@/common/components/layout/Layout.module.css"

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
