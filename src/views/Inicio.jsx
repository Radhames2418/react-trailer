import React from "react";
import trailer from "../helpers/trailer.mp4";
import Header from "../components/Header/Header";
import BannerVideo from "../components/Banner/BannerVideo";
import Section from "../components/CategoryMovie/Section";
import Footer from "../components/Footer/Footer";

export default function Inicio() {
  return (
    <>
      <div className="mx-auto h-screen">
        <Header />
        
        <BannerVideo trailer={trailer}/>
        
        <Section />

        <Footer />
      </div>
    </>
  );
}
