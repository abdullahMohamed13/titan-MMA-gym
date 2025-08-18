import Hero from "./sections/Hero"
import FAQ from "./sections/FAQ"
import Routines from "./sections/Routines"
import SellingPoints from './sections/SellingPoints'
import Contact from "./sections/Contact"
import FadeInOnScroll from '../../components/FadeInOnScroll'

export default function Home() {
  document.title = 'Titan MMA'
  return <main>
      <FadeInOnScroll><Hero /></FadeInOnScroll>
      <FadeInOnScroll><SellingPoints /></FadeInOnScroll>
      <FadeInOnScroll><Routines /></FadeInOnScroll>
      <FadeInOnScroll><FAQ /></FadeInOnScroll>
      <FadeInOnScroll><Contact /></FadeInOnScroll>
  </main>
};
