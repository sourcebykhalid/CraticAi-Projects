import React from "react";
import About from "./components/About";
import Services from "./components/Services";
import Careers from "./components/Careers";
import Contacts from "./components/Contacts";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

function App() {
  return (
    <div className=" bg-neutral-950 text-neutral-200">
      <Navbar />
      <Hero id="home" />
      <About id="about" />
      <Services id="services" />
      <Careers id="careers" />
      <Contacts id="contact" />
    </div>
  );
}

export default App;
