import React, { useState, useContext } from "react";
import "./ShortUrlBox.css";
import QRCode from "qrcode.react";
import { Link } from "react-router-dom";
import { UrlContext } from "../../Context/UrlContext";
const CLIENT_URL = import.meta.env.VITE_APP_CLIENT_URL;

const ShortUrlBox = () => {
  const { clicks, shorturl, url, setDisplay, setUrl, copy, downloadQR } =
    useContext(UrlContext);
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
            <button
              type="button"
              className="btn btn-primary m-2"
              onClick={() => {
                setDisplay(true);
                setUrl("");
              }}
            >
              Shorten another URL
            </button>
          </div>
        </div>
      ) : (
        <div className="p-5 row">
          <div className="qr-code col-md-5 row">
            <QRCode
              id="qrcode"
              value={CLIENT_URL + shorturl}
              style={{ margin: "auto", width: "80%", height: "100%" }}
              level={"H"}
              includeMargin={true}
            />
            <Link
              onClick={() => downloadQR(shorturl)}
              className="mt-1 text-center"
            >
              {" "}
              Download QR{" "}
            </Link>
          </div>
          <div className="col-md-7 p-2 ">
            <div className="p-2">
              <div className="text-start">Full URL</div>
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

            <button
              type="button"
              className="btn btn-primary m-2"
              onClick={() => {
                setDisplay(true);
                setUrl("");
              }}
            >
              Shorten another URL
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShortUrlBox;
