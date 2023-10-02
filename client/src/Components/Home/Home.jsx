import React, { useState, useEffect } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import InputBox from "../InputBox/InputBox";
import Table from "../Table/Table";
import Box from "../Box/Box";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import UseUrl from "../../Hooks/UseUrl";
import ShortUrlBox from "../ShortUrlBox/ShortUrlBox";
import { ThreeCircles } from "react-loader-spinner";
const Home = () => {
  const { urls, loading, getUrls } = UseUrl();
  const [display, setDisplay] = useState(true);
  const [loadingbox, setLoadingbox] = useState(false);
  const [shorturl, setShortUrl] = useState("");
  const [clicks, setClicks] = useState(0);
  const [url, setUrl] = React.useState("");

  useEffect(() => {
    getUrls();
  }, []);

  return (
    <div className="bg-dark bg-gradient d-flex flex-column min-vh-100">
      <Navbar />
      {loadingbox ? (
        <div className="text-center mt-5">
          <div className="text-light fs-2 p-2">
            Creating a short link may take a few seconds.
          </div>
          <div className="text-light fs-2"> Please wait...</div>
          <div className="mt-5 mb-5">
            <ThreeCircles
              height="100%"
              width="20%"
              color="#ffffff"
              wrapperStyle={{ alignItems: "center", justifyContent: "center" }}
              wrapperClass=""
              visible={true}
              ariaLabel="three-circles-rotating"
              outerCircleColor=""
              innerCircleColor=""
              middleCircleColor=""
            />
          </div>
        </div>
      ) : (
        ""
      )}
      {display ? (
        !loadingbox && (
          <div className="container">
            <InputBox
              setDisplay={setDisplay}
              setLoadingbox={setLoadingbox}
              setClicks={setClicks}
              setShortUrl={setShortUrl}
              setUrl={setUrl}
              url={url}
            />
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
        )
      ) : (
        <ShortUrlBox shorturl={shorturl} clicks={clicks} url={url} />
      )}

      <Footer />
    </div>
  );
};

export default Home;
