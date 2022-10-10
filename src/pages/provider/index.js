import React from "react";
import Header from "./header";
import Slider from "./slider";
import Search from "./search";
import Filter from "./filter";
import Partners from "./partners";
import Advertisement from "./advertisement";
import PopularCities from "./popularCities";
import Footer from "./footer";

const Provider = () => {
  return (
    <>
      <Header />
      <Slider />
      <Search />

      <space large=""></space>

      <Filter />

      <space small=""></space>

      <Partners />
      <Advertisement />
      <PopularCities />
      <Footer />
    </>
  );
};

export default Provider;
