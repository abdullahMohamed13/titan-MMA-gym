import Hero from "./sections/Hero"
import FAQ from "./sections/FAQ"
import Routines from "./sections/Routines"
import SellingPoints from './sections/SellingPoints'
import Contact from "./sections/Contact"

export default function Home() {
  document.title = 'Titan MMA'
  return <main>
    <Hero />
    <SellingPoints />
    <Routines />
    <FAQ />
    <Contact />
  </main>
};
