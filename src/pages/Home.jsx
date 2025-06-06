import React from "react";
import HomeLayouts from "../layouts/HomeLayouts";
import Hero from "../components/molecules/Hero";
import Collection from "../components/molecules/Collection";
import Card from "../components/molecules/Card";
import Banner from "../components/molecules/Banner";

const Home = () => {
  return (
    <>
      <HomeLayouts>
        <Hero />
        <Collection />
        <Card />
        <Banner />
      </HomeLayouts>
    </>
  );
};

export default Home;
