import React, { useState } from "react";
import "./ShortUrlBox.css";
import { Link } from "react-router-dom";
import UseUrl from "../../Hooks/UseUrl";

const CLIENT_URL = import.meta.env.VITE_APP_CLIENT_URL;

const ShortUrlBox = ({ clicks, shorturl, url }) => {
  const { copy, htmlEncode } = UseUrl();
  const [show, setShow] = useState(true);

  return (
    <div className="container-sm bg-dark text-light mt-5 mb-5">
      <div className="text-center shadow p-4">
        <button
          onClick={() => setShow(true)}
          className={`shorturl text-light ${show ? "slider" : ""}`}
        >
          URL
        </button>
        <button
          onClick={() => setShow(false)}
          className={`qr_code text-light ${show ? "" : "slider"}`}
        >
          QR CODE
        </button>
      </div>
      {show ? (
        <div className="p-5" id="cont1">
          <div className="d-flex" style={{ marginLeft: "15%" }}>
            <input
              type="text"
              className="forminput ps-4 border-0 col-6 p-2"
              id="copyinput"
              value={CLIENT_URL + shorturl}
              readOnly={true}
            />
            <button
              className="formbtn border-0 col-4 bg-primary text-light "
              id="btn"
              onClick={copy}
            >
              Copy URL
            </button>
          </div>
          <div>
            <div className="p-2">
              <div>Full URL</div>
              <div className="text-truncate" style={{ maxWidth: "600px" }}>
                <Link to={url} target="_blank">
                  {url}
                </Link>
              </div>
            </div>
            <div className="d-flex">
              <div className="p-2">Total of clicks of Your shortened URL</div>
              <span className="text-primary p-2">{clicks}</span>
            </div>
            <a className="p-2" href="/">
              <button type="button" className="btn btn-primary">
                Shorten another URL
              </button>
            </a>
          </div>
        </div>
      ) : (
        <div className="p-5 row">
          <img
            src={
              "https://chart.googleapis.com/chart?cht=qr&chl=" +
              htmlEncode(CLIENT_URL + shorturl) +
              "&chs=160x160&chld=L|0"
            }
            className="qr-code col-md-5"
            alt=""
          />
          <div className="col-md-7 p-2 ">
            <div className="p-2">
              <div>Full URL</div>
              <div className="text-truncate" style={{ maxWidth: "600px" }}>
                <Link to={url} target="_blank">
                  {url}
                </Link>
              </div>
            </div>
            <div className="d-flex">
              <div className="p-2">Total of clicks of Your shortened URL</div>
              <span className="text-primary p-2">{clicks}</span>
            </div>
            <a className="p-2" href="/">
              <button type="button" className="btn btn-primary">
                Shorten another URL
              </button>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShortUrlBox;
