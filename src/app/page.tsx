import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";


export default function Home() {
  return (
    <div className="text-black dark:text-white">
      <Navbar />
      <Hero />
    </div>
  );
}
