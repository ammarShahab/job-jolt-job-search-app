import React from "react";
import { useParams } from "react-router";
import CompanyDetailsCard from "./CompanyDetailsCard";
import NavBar from "./NavBar";
import Footer from "./Footer";

const CompanyDetailsPage = () => {
  const { id } = useParams();
  console.log(id);

  return (
    <>
      <header>
        <nav>
          <NavBar></NavBar>
        </nav>
      </header>
      <main className="w-11/12 mx-auto">
        <CompanyDetailsCard id={id}></CompanyDetailsCard>
      </main>
      <Footer></Footer>
    </>
  );
};

export default CompanyDetailsPage;
