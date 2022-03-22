import React from "react";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Hackatons from "./components/hackatons/Hackatons";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Portfolio from "./components/portfolio/Portfolio";

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Hackatons />
      <Experience />
      <Portfolio />

      <Contact />
      <Footer />
    </>
  );
};

export default App;
