import Hero from "@/components/Hero";
import { Navbar } from "@/components/Navbar";


export default function Home() {
  return (
    <div className="bg-white min-h-screen transition-all duration-300">
      <Navbar />
      <Hero />
    </div>
  );
}
