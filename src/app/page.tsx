import Hero from "@/components/Hero";
import Hero1 from "@/components/Hero1";
import Hero2 from "@/components/Hero2";
import { Navbar } from "@/components/Navbar";


export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Hero1 />
      <Hero2 />
    </div>
  );
}
