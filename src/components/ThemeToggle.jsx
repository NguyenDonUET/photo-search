import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/context";
import { BsFillSunFill, BsMoonFill } from "react-icons/bs";

const getInitialDarkMode = () => {
    const prefersDarkMode = window.matchMedia(
        "(prefers-color-schema:dark)"
    ).matches;
    const storedDarkMode = localStorage.getItem("darkMode") === "true";

    return storedDarkMode || prefersDarkMode;
};

export default function ThemeToggle() {
    const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode());

    const toggleDarkTheme = () => {
        setIsDarkTheme(!isDarkTheme);
    };

    useEffect(() => {
        if (isDarkTheme) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [isDarkTheme]);

    return (
        <section className="w-[90vw] max-w-6xl py-8 flex justify-end mx-auto">
            <button
                className={`${
                    isDarkTheme ? "text-white" : "text-black"
                } w-8 h-8  grid place-items-center text-xl transition-none`}
                onClick={() => toggleDarkTheme()}
            >
                {isDarkTheme ? (
                    <BsFillSunFill className="toggle-icon" />
                ) : (
                    <BsMoonFill className="toggle-icon" />
                )}
            </button>
        </section>
    );
}
