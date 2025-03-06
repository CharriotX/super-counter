import { useEffect } from "react";
import s from "@/common/components/header/Header.module.css"
import { NavLink } from "react-router-dom"
import { useAppSelector } from "@/common/hooks/useAppSelector";
import { selectThemeMode } from "@/app/app-selectors";
import { useAppDispatch } from "@/common/hooks/useAppDispatch";
import { toggleThemeAC } from "@/app/app-reducer";

export const Header = () => {
    const theme = useAppSelector(selectThemeMode);
    console.log(theme)
    const dispatch = useAppDispatch()

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        dispatch(toggleThemeAC({ themeMode: theme === 'light' ? 'dark' : 'light' }));
    };

    return (
        <header className={s.header}>
            <nav className={s.nav}>
                <div className={s.leftLinks}>
                    <NavLink
                        to={"/counterWithSettings"}
                        className={({ isActive }) => (isActive ? s.active : s.link)}>
                        Primary
                    </NavLink>
                    <NavLink
                        to={"/counter"}
                        className={({ isActive }) => (isActive ? s.active : s.link)}
                        end>
                        Secondary
                    </NavLink>
                </div>
                <div className={s.rightLinks}>
                    <button onClick={toggleTheme} className={s.themeToggle}>
                        {theme === 'light' ? '🌙' : '☀️'}
                    </button>
                </div>
            </nav>
        </header>
    )
}
