import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ThreeDots } from "react-loader-spinner";
import axios from "axios";

const SERVER_URL = import.meta.env.VITE_APP_SERVER_URL;

const Redirect = () => {
  const { id } = useParams();

  useEffect(() => {
    try {
      axios.get(SERVER_URL + `/url/shorturl/${id}`).then((res) => {
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
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#ffffff"
          ariaLabel="three-dots-loading"
          wrapperStyle={{}}
          wrapperClassName=""
          visible={true}
        />
      </div>
    </div>
  );
};

export default Redirect;
