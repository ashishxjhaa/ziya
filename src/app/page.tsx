import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";


export default function Home() {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white">
      <Navbar />
      <Hero />
    </div>
  );
}
