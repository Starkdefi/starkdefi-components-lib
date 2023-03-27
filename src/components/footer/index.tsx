import React, { ReactNode } from "react";
import styles from "./footer.module.css";
import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { ReactComponent as Powered } from "../../assets/icons/powered.svg";
import { ReactComponent as Arrow } from "../../assets/icons/arrow-v2.svg";
import { ReactComponent as Discord } from "../../assets/icons/discord.svg";
import { ReactComponent as Medium } from "../../assets/icons/medium.svg";
import { ReactComponent as Twitter } from "../../assets/icons/twitter.svg";
import { ReactComponent as Telegram } from "../../assets/icons/telegram.svg";
import { ReactComponent as Github } from "../../assets/icons/github.svg";
import resolveConfig from "tailwindcss/resolveConfig";
const config = require("../../../tailwind.config.js");

const fullConfig = resolveConfig(config);
const colors = fullConfig.theme.colors;
console.log(fullConfig.theme.colors);

import Button from "../button";

const socials = [
  {
    url: "https://discord.com/invite/starkdefi",
    Icon: Discord,
  },
  {
    url: "https://starkdefi.medium.com/",
    Icon: Medium,
  },
  {
    url: "https://twitter.com/StarkDefi",
    Icon: Twitter,
  },
  {
    url: "https://t.me/starkdefi_ann",
    Icon: Telegram,
  },
  {
    url: "https://github.com/Starkdefi",
    Icon: Github,
  },
];

const Link: React.FC<
  {
    children: ReactNode;
    textColor?: string;
    accentColor?: string;
  } & React.HTMLProps<HTMLAnchorElement>
> = ({ children, textColor, accentColor, ...props }) => {
  return (
    <a
      className={`${styles.section_nav_link} text-[var(--text-color)] hover:text-[var(--accent-color)]`}
      href={props.href}
      rel="noopener noreferrer"
      target="_blank"
    >
      {children}
    </a>
  );
};

const LegalLink: React.FC<
  {
    children: ReactNode;
    textColor?: string;
    accentColor?: string;
  } & React.HTMLProps<HTMLAnchorElement>
> = ({ children, textColor, accentColor, ...props }) => {
  return (
    <a
      className={`${styles.tos_pp} text-[var(--text-color)] hover:text-[var(--accent-color)]`}
      href={props.href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

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

export default function Footer({
  style,
  backgroundColor,
  textColor,
  accentColor,
  socialColor,
  className,
}: FooterProps) {
  return (
    <footer
      style={
        {
          "--bg-color": backgroundColor ? backgroundColor : colors.green_dark2,
          "--text-color": textColor ? textColor : "white",
          "--accent-color": accentColor ? accentColor : colors.green_light,
          "--social-color": socialColor ? socialColor : "#9B9C9D",
          ...style,
        } as React.CSSProperties
      }
      className={`${styles.footer} before:bg-[var(--bg-color)] ${
        className ?? ""
      }`}
    >
      <section className="xl:max-container md:px-8 px-4 m-auto flex items-start justify-between flex-wrap md:flex-nowrap">
        <div className="lg:w-[55%] md:w-[40%] w-full">
          <div className="flex flex-col gap-4">
            <a href="/">
              <Logo />
            </a>

            <p className="flex items-center gap-2 opacity-40 pt-4">
              <Powered />
              <span
                className={`text-[var(--text-color)] font-CeraPro-Light leading-[160%]`}
              >
                Powered by StarkNet
              </span>
            </p>
          </div>
          <div className="flex items-center lg:gap-8 gap-4 xl:pt-28 lg:pt-24 md:pt-12 pt-8 lg:flex-nowrap flex-wrap md:pb-0 pb-8">
            <a
              href="mailto:starkdefi@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <Button
                className={`xl:text-[18px] md:text-[14px] text-[12px] !text-[var(--accent-color)] bg-green_2 rounded`}
              >
                <p className="flex gap-3 items-center py-1">
                  Contact Us <Arrow className={styles.arrow} />
                </p>
              </Button>
            </a>
            <a
              href="https://linktr.ee/starkdefi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                className="txl:text-[18px] !text-[var(--accent-color)]  md:text-[14px] text-[12px]"
                btnType="ringed"
              >
                <p className="flex gap-3 items-center py-1">
                  Join Our Community <Arrow className={styles.arrow} />
                </p>
              </Button>
            </a>
          </div>
        </div>

        <div className={styles.section_column}>
          <div>
            <h3 className={`${styles.section_head} text-[var(--text-color)]`}>
              Documentation
            </h3>
            <div className="flex items-start justify-between flex-col pt-4">
              <Link
                textColor={textColor}
                accentColor={accentColor}
                href="https://docs.starkdefi.com/project-overview"
              >
                Litepaper
              </Link>
              <Link
                textColor={textColor}
                accentColor={accentColor}
                href="https://docs.starkdefi.com/quick-start/connect-to-starkdefi"
              >
                How to connect wallet
              </Link>
              <Link
                textColor={textColor}
                accentColor={accentColor}
                href="https://docs.starkdefi.com/extras/resources"
              >
                Resources
              </Link>
            </div>
          </div>

          <LegalLink
            textColor={textColor}
            accentColor={accentColor}
            href="https://docs.starkdefi.com/extras/privacy-policy"
          >
            Privacy Policy
          </LegalLink>
        </div>

        <div className={styles.section_column}>
          <div>
            <h3 className={`${styles.section_head} text-[var(--text-color)]`}>
              Social
            </h3>
            <div className="flex items-center lg:justify-between justify-start lg:flex-nowrap flex-wrap gap-3 pt-4">
              {socials.map((social) => (
                <a
                  className={styles.section_nav_link}
                  href={social.url}
                  target="_blank"
                  key={social.url}
                  rel="noopener noreferrer"
                >
                  <social.Icon className={`${styles.social_icon} `} />
                </a>
              ))}
            </div>
          </div>
          <LegalLink
            textColor={textColor}
            accentColor={accentColor}
            href="https://docs.starkdefi.com/extras/terms-of-use"
          >
            Terms of Use
          </LegalLink>
        </div>
      </section>
    </footer>
  );
}
