"use client"

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react"


export function ThemeButton() {
    const { theme, setTheme } = useTheme();

    return (
        <div onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="flex items-center gap-2 w-fit h-fit px-3 py-1 rounded-sm border border-gray-400">
            {theme === "light" ? (
                <Sun className="h-5 w-5 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90 cursor-pointer" />
            ) : (
                <Moon className="h-5 w-5 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0 cursor-pointer" />
            )}
        </div>
    );
}