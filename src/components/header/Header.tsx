import { useEffect, useState } from "react";
import s from "./Header.module.css"
import { NavLink } from "react-router-dom"

export const Header = () => {
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
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
