import React from "react";
import styles from "./button.module.css";
import theme from "../theme";

const colors = theme.colors;

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  textColor?: string;
  accentColor?: string;
  backgroundColor?: string;
  hoverTextColor?: string;
  btnType?: "regular" | "ringed" | "regular-outline";
}

export default function Button({
  children,
  onClick,
  className = "",
  btnType = "regular",
  textColor,
  accentColor,
  backgroundColor,
  hoverTextColor,
  ...props
}: ButtonProps) {
  return (
    <button
      style={
        {
          "--btn-text-color": textColor ? textColor : colors.green_light,
          "--btn-accent-color": accentColor ? accentColor : colors.green_light,
          "--btn-bg-color": backgroundColor
            ? backgroundColor
            : colors.green_light5,
          "--btn-hover-text-color": hoverTextColor ? hoverTextColor : "white",
        } as React.CSSProperties
      }
      className={`${styles.button} ${
        styles[btnType || "regular"]
      } ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
