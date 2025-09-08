"use client"

import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";


export function ThemeButton() {
    const { theme, setTheme } = useTheme();

    return (
        <div onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="flex items-center gap-2 w-fit h-fit px-3 py-1 rounded-sm border border-gray-400">
            {theme === "dark" ? (
                <FaSun className="h-5 w-5 rotate-0 scale-100 dark:-rotate-90 dark:scale-0"></FaSun>
            ) : (
                <FaMoon className="h-5 w-5 rotate-90 scale-0 dark:-rotate-0 dark:scale-100"></FaMoon>
            )}
        </div>
    
    );
}