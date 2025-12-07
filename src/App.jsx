import { useState } from "react";

import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import ShowcaseSection from "./sections/ShowcaseSection";
import LogoShowcase from "./sections/LogoShowcase";
import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/NavBar";

const App = () => {
  const [language, setLanguage] = useState('en');

  return (
    <>
      <Navbar language={language} setLanguage={setLanguage} />
      <Hero language={language} />
      <ShowcaseSection language={language} />
      <LogoShowcase />
      <FeatureCards language={language} />
      <Experience language={language} />
      <TechStack language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </>
  )
};

export default App;
