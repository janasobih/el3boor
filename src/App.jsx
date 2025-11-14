import React from "react";
import Home from "./componants/home/Home";
import About from "./componants/about/About";
import Nav from "./componants/nav/nav";
import Service from "./componants/servise/Service";
import Contact from "./componants/contact/Contact";
import Footer from "./componants/foteer/Footer";

const App = () => {
  return (
    <div>
      <div
        className=" w-full min-h-screen bg-cover bg-no-repeat bg-center bg-fixed "
        style={{
          backgroundImage: `linear-gradient(135deg, rgb(2 23 78) 0%, rgb(10 110 80 / 21%) 100%), url(./home.png)`,
        }}
      >
        <Nav />
        <Home />
      </div>

      <About />
      <Service />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
