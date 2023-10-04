import { useState } from "react";
import axios from "axios";

const SERVER_URL = import.meta.env.VITE_APP_SERVER_API;

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

  const downloadQR = () => {
    const canvas = document.getElementById("qrcode");
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let downloadLink = document.createElement("a");
    downloadLink.href = pngUrl;
    downloadLink.download = "QrCode.png";
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return {
    loading,
    setLoading,
    getUrls,
    urls,
    setUrls,
    copy,
    downloadQR,
  };
}

export const isValidUrl = (string) => {
  try {
    new URL(string);
    return true;
  } catch (err) {
    return false;
  }
};
