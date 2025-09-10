import Hero from "@/components/Hero";
import Hero1 from "@/components/Hero1";
import { Navbar } from "@/components/Navbar";


export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Hero1 />
    </div>
  );
}
