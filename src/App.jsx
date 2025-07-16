import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery";
// import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import { Careers } from "./components/careers";
import { Projects } from "./components/projects";
import { Blog } from "./components/blog";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const LandingPage = ({ data }) => (
  <>
    <Navigation />
    <Header data={data.Header} />
    <Features data={data.Features} />
    <About data={data.About} />
    <Services data={data.Services} />
    {/* <Gallery data={data.Gallery} /> */}
    {/* <Testimonials data={data.Testimonials} /> */}
    <Team data={data.Team} />
    <Contact data={data.Contact} />
  </>
);

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<LandingPage data={landingPageData} />} />
          <Route path="/careers" element={
            <>
              <Navigation />
              <Careers />
              <Contact data={landingPageData.Contact} />
            </>
          } />
          <Route path="/projects" element={
            <>
              <Navigation />
              <Projects data={landingPageData.Gallery} />
              <Contact data={landingPageData.Contact} />
            </>
          } />
          <Route path="/blog" element={
            <>
              <Navigation />
              <Blog />
              <Contact data={landingPageData.Contact} />
            </>
          } />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
