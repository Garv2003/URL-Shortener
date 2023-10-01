import React from "react";
import "./ShortUrlBox.css";

const ShortUrlBox = () => {
  return (
    <div class="container-sm bg-dark text-light mt-5 mb-5">
      <div class="text-center shadow p-4">
        <button class="url bg-primary slider text-light">URL</button>
        <button class="bg-primary qrcode text-light">QR CODE</button>
      </div>
      <div class="p-5" id="cont1">
        <div class="form_url">
          <input
            type="text"
            class="forminput col-5"
            id="copyinput"
            // value={http://localhost:1234/{{url.ShortUrl}}}
          />
          <button class="formbtn col-4" id="btn">
            Copy URL
          </button>
        </div>
        <div>
          <div class="p-2">
            <div>Full URL</div>
            <div class="text-truncate" style="max-width: 600px;">
              <a href="{{url.FullUrl}}" target="_blank">
                {/* {{url.FullUrl}} */}
              </a>
            </div>
          </div>
          <div class="d-flex">
            <div class="p-2">Total of clicks of Your shortened URL</div>
            <span class="text-primary p-2">{/* {{url.Clicks}} */}</span>
          </div>
          <a class="p-2" href="/">
            <button type="button" class="btn btn-primary">
              Shorten another URL
            </button>
          </a>
        </div>
      </div>

      <div class="p-5 hidden" id="cont2">
        <img
          src="https://chart.googleapis.com/chart?cht=qr&chl=Hello+World&chs=160x160&chld=L|0"
          class="qr-code"
          alt=""
        />
        <div>
          <div class="p-2">
            <div>Full URL</div>
            <div class="text-truncate" style="max-width: 600px;">
              <a href="{{url.FullUrl}}" target="_blank">
                {/* {{url.FullUrl}} */}
              </a>
            </div>
          </div>
          <div class="d-flex">
            <div class="p-2">Total of clicks of Your shortened URL</div>
            <span class="text-primary p-2">{/* {{url.Clicks}} */}</span>
          </div>
          <a class="p-2" href="/">
            <button type="button" class="btn btn-primary">
              Shorten another URL
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ShortUrlBox;
