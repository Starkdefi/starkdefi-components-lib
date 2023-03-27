import React from "react";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    textColor?: string;
    accentColor?: string;
    backgroundColor?: string;
    hoverTextColor?: string;
    btnType?: "regular" | "ringed" | "regular-outline";
}
export default function Button({ children, onClick, className, btnType, textColor, accentColor, backgroundColor, hoverTextColor, ...props }: ButtonProps): JSX.Element;
export {};
