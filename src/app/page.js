import About from "./components/About";
import HeroCarousel from "./components/HeroCarousel";
import Services from "./components/Services";

export default function Home() {
  return (
    <>
      <HeroCarousel />
      <Services />
      <About />
    </>
  );
}
