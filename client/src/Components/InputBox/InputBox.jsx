import React from "react";
import "./InputBox.css";
import UseUrl from "../Hooks/UseUrl";
const Body = () => {
  const { url, setUrl, handleSubmit } = UseUrl();
  return (
    <>
      <div className="container text-light text-center shadow-lg p-4 bg-dark mt-4 rounded-3">
        <h3 className="fs-1">Paste the URL to be Shortened</h3>
        <form
          className="d-flex"
          style={{ marginLeft: "15%" }}
          onSubmit={handleSubmit}
        >
          <input
            className="forminput ps-4 border-0 col-6 p-2"
            type="text"
            placeholder="Enter the Link here"
            name="FullUrl"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
          <button
            className="formbtn border-0 col-4 bg-primary text-light "
            type="submit"
          >
            Shorten URL
          </button>
        </form>
        <div className="fs-5">
          <div className="p-2">
            ShortURL is a free tool to shorten URLs and generate short links
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
