import React from "react";
import "./ShortUrlBox.css";
import { Link } from "react-router-dom";
import UseUrl from "../Hooks/UseUrl";

const ShortUrlBox = () => {
  const { shorturl, clicks, url } = UseUrl();
  return (
    <div className="container-sm bg-dark text-light mt-5 mb-5">
      <div className="text-center shadow p-4">
        <button className="url bg-primary slider text-light">URL</button>
        <button className="bg-primary qrcode text-light">QR CODE</button>
      </div>
      <div className="p-5" id="cont1">
        <div className="form_url">
          <input
            type="text"
            className="forminput col-5"
            id="copyinput"
            value={shorturl}
          />
          <button className="formbtn col-4" id="btn">
            Copy URL
          </button>
        </div>
        <div>
          <div className="p-2">
            <div>Full URL</div>
            <div className="text-truncate" style={{ maxWidth: "600px" }}>
              <Link href="{{url.FullUrl}}" target="_blank">
                {/* {{url.FullUrl}} */}
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

      <div className="p-5 " id="cont2">
        <img
          src="https://chart.googleapis.com/chart?cht=qr&chl=Hello+World&chs=160x160&chld=L|0"
          className="qr-code"
          alt=""
        />
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
    </div>
  );
};

export default ShortUrlBox;
