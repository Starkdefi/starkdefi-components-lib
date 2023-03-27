import React from "react";
interface FooterProps {
    style?: React.CSSProperties;
    backgroundColor?: string;
    textColor?: string;
    accentColor?: string;
    socialColor?: string;
    className?: string;
}
/**
 * StarkDefi Footer component
 * This component renders a footer with a logo, an optional title, and a list of social icons.
 * @param {FooterProps} props
 * @returns {JSX.Element}
 */
export default function Footer({ style, backgroundColor, textColor, accentColor, socialColor, className, }: FooterProps): JSX.Element;
export {};
