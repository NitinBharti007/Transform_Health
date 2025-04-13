import React from "react";
import Navbar from "./components/Navbar";
import HealthHero from "./components/HealthHero";
import AboutUs from "./components/AboutUs";
import WorkSection from "./components/WorkSection";
import CommunityAction from "./components/CommunityAction";
import NewsEvents from "./components/NewsSection";
import VideosAndMultimedia from "./components/VideoCard";
import SocialMedia from "./components/SocialMedia";
import NewsLetter from "./components/NewsLetter";
import GetInTouch from "./components/GetInTouch";
import SidebarCard from "./components/SidebarCard";
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HealthHero />
        <AboutUs />
        <WorkSection />
        <CommunityAction />
        <NewsEvents />
        <VideosAndMultimedia />
        <SocialMedia/>
        <NewsLetter/>
        <GetInTouch/>
        <SidebarCard/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
