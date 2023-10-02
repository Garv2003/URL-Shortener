import React, { useState, useEffect } from "react";
import axios from "axios";

const SERVER_URL = import.meta.env.VITE_APP_SERVER_URL;

export default function UseUrl() {
  const [urls, setUrls] = useState([]);
  const [loading, setLoading] = useState(true);

  const getUrls = async () => {
    try {
      const res = await axios.get(SERVER_URL + "/url");
      setUrls(res.data.urls);
      setLoading(false);
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
    loading,
    setLoading,
    getUrls,
    urls,
    setUrls,
    copy,
    htmlEncode,
  };
}
