import React from "react";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import ServicesBody from "../components/ServicesBody";

const ServicesPage: React.FC = () => {
  return (
    <section className="services-page__container">
      <h3 className="services__page--title">Usługi</h3>
      <ServicesBody />
      <Footer />
    </section>
  );
};

export default ServicesPage;
