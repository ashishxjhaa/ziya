"use client"

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { createPortal } from "react-dom";


export function ThemeButton() {
    const { theme, setTheme } = useTheme();
    const [animating, setAnimating] = useState(false);

    const toggleTheme = () => {
        if (animating) return;
        setAnimating(true);

        const audio = new Audio("/lightdarkmode.mp3");
        audio.volume = 0.3;
        audio.play();

        setTimeout(() => {
            setTheme(theme === "dark" ? "light" : "dark");
            setAnimating(false);
        }, 500);
    };


    return (
        <>
        <button onClick={toggleTheme} className="px-2.5 py-2 cursor-pointer rounded-md dark:hover:bg-[#1E1D27] hover:bg-[#F2F2F2] relative z-10" aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}>
            {theme === "light" ? (
                <Moon className="h-5 w-5 scale-100 rotate-0 transition-all dark:scale-0 dark:rotate-90" />
            ) : (
                <Sun className="h-5 w-5 scale-0 rotate-90 transition-all dark:scale-100 dark:-rotate-0" />
            )}
        </button>
        {typeof window !== "undefined" &&
            createPortal(
                <AnimatePresence>
                    {animating && (
                        <motion.div
                            initial={{ y: "-100%", opacity: 1 }}
                            animate={{ y: "0%", opacity: 1 }}
                            exit={{ y: "100%", opacity: 0 }}
                            transition={{ duration: 0.5, ease: "easeInOut" }}
                            className="fixed inset-0 z-50 bg-black dark:bg-white"
                        />
                    )}
                </AnimatePresence>,
                document.body
            )}
        </>
    );
}