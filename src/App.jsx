import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className=" flex flex-col justify-center items-center gap-y-3 w-full mx-auto bg-gradient-to-b from-neutral-800 to-neutral-950 min-h-screen">
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
