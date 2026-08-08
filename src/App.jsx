import { LightboxProvider } from './context/LightboxContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import Portfolio from './components/Portfolio';
import PricingModel from './components/PricingModel';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import Lightbox from './components/Lightbox';

export default function App() {
  return (
    <LightboxProvider>
      <Header />
      <Hero />
      <Services />
      <Process />
      <Portfolio />
      <PricingModel />
      <FinalCTA />
      <Footer />
      <Lightbox />
    </LightboxProvider>
  );
}
