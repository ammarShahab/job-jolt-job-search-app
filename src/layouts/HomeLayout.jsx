import React from "react";
import Home from "../components/Home";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
import WhyChooseUs from "../components/WhyChooseUs ";

const HomeLayout = () => {
  return (
    <>
      <header>
        <nav>
          <NavBar></NavBar>
        </nav>
      </header>
      <main className="w-11/12 mx-auto">
        <Outlet></Outlet>
        <WhyChooseUs></WhyChooseUs>
      </main>
      <Footer></Footer>
    </>
  );
};

export default HomeLayout;
