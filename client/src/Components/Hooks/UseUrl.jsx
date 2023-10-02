import React, { useState, useEffect } from "react";
import axios from "axios";

export default function UseUrl() {
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [clicks, setClicks] = useState(0);

  const getUrls = async () => {
    try {
      const res = await axios.get("http://localhost:1234/url");
      setUrls(res.data.urls);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:1234/url/addurl", {
        FullUrl: url,
      });
      setShortUrl(res.data.shortUrl);
    } catch (err) {
      console.log(err);
    }
  };

  const copy = () => {
    var copyText = document.getElementById("copyinput");
    navigator.clipboard.writeText(copyText.value);
    var tooltip = document.getElementById("btn");
    tooltip.innerHTML = "URL Copied";
    setTimeout(() => {
      tooltip.innerHTML = "Copy URL";
    }, 5000);
  };

  function htmlEncode(value) {
    const div = document.createElement("div");
    div.appendChild(document.createTextNode(value));
    return div.innerHTML;
  }

  return {
    url,
    setUrl,
    loading,
    setLoading,
    shortUrl,
    setShortUrl,
    handleSubmit,
    getUrls,
    urls,
    setUrls,
    clicks,
    setClicks,
    copy,
    htmlEncode,
  };
}
