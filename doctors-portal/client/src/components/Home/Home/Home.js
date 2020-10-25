import React from "react";
import Services from "../Services/Services";
import Footer from "../../Shared/Footer/Footer";
import Header from "../Header/Header";
import FeaturedService from "../FeaturedService/FeaturedService";
import MakeAppointment from "../MakeAppointment/MakeAppointment";

const Home = () => {
  return (
    <div>
      <Header />
      <Services />
      <FeaturedService />
      <MakeAppointment />
      <Footer />
    </div>
  );
};

export default Home;
