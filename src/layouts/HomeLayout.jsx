import React from "react";
import Home from "../components/Home";
import NavBar from "../components/NavBar";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  );
};

export default HomeLayout;
