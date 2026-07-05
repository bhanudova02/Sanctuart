import { useEffect } from "react";
import Lenis from "lenis";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ProjectHighlights from "./components/ProjectHighlights/ProjectHighlights";
import Lifestyle from "./components/Lifestyle/Lifestyle";
import WhySanctuary from "./components/WhySanctuary/WhySanctuary";
import LocationAdvantage from "./components/LocationAdvantage/LocationAdvantage";
import MasterPlan from "./components/MasterPlan/MasterPlan";
import Clubhouse from "./components/Clubhouse/Clubhouse";
import BeachExperience from "./components/BeachExperience/BeachExperience";
import Investment from "./components/Investment/Investment";
import Gallery from "./components/Gallery/Gallery";
import Testimonials from "./components/Testimonials/Testimonials";
import WhyBuyNow from "./components/WhyBuyNow/WhyBuyNow";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <ProjectHighlights />
      <Lifestyle />
      <WhySanctuary />
      <LocationAdvantage />
      <MasterPlan />
      <Clubhouse />
      <BeachExperience />
      <Investment />
      <Gallery />
      <Testimonials />
      <WhyBuyNow />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
