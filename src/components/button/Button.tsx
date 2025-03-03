import s from "./Button.module.css"

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    children: React.ReactNode
};
export const Button = ({ onClick, children, ...props }: Props) => {
    return (
        <button className={s.button} onClick={onClick} {...props}>
            {children}
        </button>
    )
}
