import React from "react";
import styles from './button.module.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  btnType?: 'regular' | 'ringed' | 'regular-outline'
}

export default function Button({ children, onClick, className = '', btnType = 'regular', ...props }: ButtonProps) {
  return (
    <button className={`${styles.button} ${styles[btnType || 'regular']} ${className}`} onClick={onClick} {...props}>
      {children}
    </button>
  )
}