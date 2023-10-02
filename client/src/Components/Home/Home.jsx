import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import InputBox from "../InputBox/InputBox";
import Table from "../Table/Table";
import Box from "../Box/Box";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import UseUrl from "../Hooks/UseUrl";
import ShortUrlBox from "../ShortUrlBox/ShortUrlBox";
const Home = () => {
  const { urls, loading, getUrls } = UseUrl();

  useEffect(() => {
    getUrls();
  }, []);

  return (
    <div className="bg-dark bg-gradient d-flex flex-column min-vh-100">
      <Navbar />
      <div className="container">
        <InputBox />
        <SkeletonTheme baseColor="#212529" highlightColor="#605d5d">
          {loading ? (
            <Skeleton
              height={180}
              style={{ marginBottom: "20px", marginTop: "20px" }}
            />
          ) : (
            <Table urls={urls} />
          )}
        </SkeletonTheme>
        <Box />
      </div>
      <ShortUrlBox />
      <Footer />
    </div>
  );
};

export default Home;
