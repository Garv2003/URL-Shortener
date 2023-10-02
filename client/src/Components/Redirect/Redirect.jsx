import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { RotateLoader } from "react-spinners";
import axios from "axios";

const Redirect = () => {
  const { id } = useParams();

  useEffect(() => {
    try {
      axios.get(`http://localhost:1234/url/shorturl/${id}`).then((res) => {
        window.location.href = res.data.result.FullUrl;
      });
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="bg-dark min-vh-100">
      <h1 className="text-light text-center p-5">Redirecting...</h1>
      <div className="d-flex justify-content-center mt-5">
        <RotateLoader color="#ffffff" />
      </div>
    </div>
  );
};

export default Redirect;
