"use client";
import Link from "next/link"

import { motion } from "framer-motion";

export const Dashboard = () => {
   
    return (
        <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 0.35 }}
    
            className="flex w-fit h-fit px-3 py-1 cursor-pointer rounded-md border border-gray-400 hover:shadow-md">
            <Link href="#" className="text-sm font-semibold tracking-wider text-black">
                Dashboard
            </Link>
        </motion.button>
    );
};