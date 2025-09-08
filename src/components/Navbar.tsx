import { Dashboard } from "./Dashboard";
import { ThemeButton } from "./ThemeButton";


export const Navbar = () => {
  return (
    <nav className="sticky top-4 z-50 flex items-center justify-between gap-2 p-2 px-4 rounded-xl backdrop-blur-sm bg-[#F1F1F1]/10 max-w-[90%] mx-auto h-full shadow-xl">
        <div className="font-bold text-3xl flex items-center h-12 text-[#F97300] cursor-pointer">
            Ziya.
        </div>
        <div className="flex items-center gap-2 h-12 relative text-black dark:text-white">
          <Dashboard />
          <ThemeButton />
        </div>
    </nav>
  );
};