import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import ServicesGrid from "@/components/sections/ServicesGrid";
import Methodology from "@/components/sections/Methodology";
import FinalCta from "@/components/sections/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesGrid />
      <Methodology />
      <FinalCta />
    </>
  );
}
