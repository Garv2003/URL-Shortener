const btn = document.querySelector("#btn");
const input = document.querySelector("#copyinput");
btn.addEventListener("click", () => {
  navigator.clipboard.writeText(input.value);
  btn.innerText = "URL Copied";
});
function htmlEncode(value) {
  const div = document.createElement("div");
  div.appendChild(document.createTextNode(value));
  return div.innerHTML;
}
let finalURL =
  "https://chart.googleapis.com/chart?cht=qr&chl=" +
  htmlEncode(input.value) +
  "&chs=160x160&chld=L|0";

const qrCode = document.querySelector(".qr-code");
qrCode.src = finalURL;

let qrcode = document.querySelector(".qrcode");
let url = document.querySelector(".url");
let cont1 = document.querySelector("#cont1");
let cont2= document.querySelector("#cont2");
let footer = document.querySelector("#fot");
qrcode.addEventListener("click", () => {
  qrcode.classList.add("slider");
  url.classList.remove("slider");
  cont2.classList.remove("hidden");
  cont1.classList.add("hidden");
  footer.classList.remove("ml");
});

url.addEventListener("click", () => {
  url.classList.add("slider");
  qrcode.classList.remove("slider");
  cont1.classList.remove("hidden");
  cont2.classList.add("hidden");
  footer.classList.add("ml");
});
