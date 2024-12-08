import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Solutions from "./components/Solutions";
import Insights from "./components/Insights";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";



function App() {
  return (
    <div classNaw='scroll-smooth'>
      <Header />
      <Hero />
     <Solutions />
     <Insights />
     <Contact />
     <Footer />
     <ScrollToTop />
    </div>
    
  );
}

export default App;
