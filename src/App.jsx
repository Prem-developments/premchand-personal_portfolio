import Navbar from "./components/navbar/navbar.jsx";
import Hero from "./components/Hero/Hero.jsx";
import Projects from "./components/Projects/Projects.jsx";
import "./App.css";
import "./fonts.css";
import "./styleguide.css";
import React from "react";
import Contact from "./components/Contact/Contact.jsx";
import Footer from "./components/Footer/Footer.jsx";
const Banner = React.lazy(() => import("./components/Banner/Banner.jsx"));
const About = React.lazy(() => import("./components/About/About.jsx"));

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <React.Suspense fallback={<div />}>
        <Banner />
        <About />
      </React.Suspense>
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
