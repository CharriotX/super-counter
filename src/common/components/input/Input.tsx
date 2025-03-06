
import React from 'react';
import s from './Input.module.css';

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    error?: string | null
}

export const Input = ({ error, ...props }: InputProps) => {
    return (
        <input className={error ? s.input + " " + s.error : s.input} {...props}
        />
    );
};