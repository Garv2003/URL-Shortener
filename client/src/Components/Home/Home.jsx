import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import InputBox from "../InputBox/InputBox";
import Table from "../Table/Table";
import Box from "../Box/Box";

const Home = () => {
  return (
    <div className="bg-dark bg-gradient d-flex flex-column min-vh-100">
      <Navbar />
      <div className="container">
        <InputBox />
        <Table />
        <Box />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
