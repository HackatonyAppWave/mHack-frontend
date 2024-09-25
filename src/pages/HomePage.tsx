import React from "react";
import Head from "../components/Head";
import Documents from "../components/Documents";
import Services from "../components/Services";
import Footer from "../components/Footer";

const HomePage: React.FC = () => {
  return (
    <section className="home-page__container">
      <Documents />
      <Services />
    </section>
  );
};

export default HomePage;
