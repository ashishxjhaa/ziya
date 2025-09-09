"use client"

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react"


export function ThemeButton() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        const audio = new Audio("/lightdarkmode.mp3");
        audio.volume = 0.2;
        audio.play();

        setTheme(theme === "dark" ? "light" : "dark");
    };


    return (
        <button onClick={toggleTheme} className="px-2.5 py-2 cursor-pointer rounded-md dark:hover:bg-black hover:bg-[#F2F2F2] relative z-10" aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
            {theme === "light" ? (
                <Moon className="h-5 w-5 scale-100 rotate-0 transition-all dark:scale-0 dark:rotate-90" />
            ) : (
                <Sun className="h-5 w-5 scale-0 rotate-90 transition-all dark:scale-100 dark:-rotate-0" />
            )}
        </button>
    );
}