const btn=document.querySelector("#btn");
const input=document.querySelector("#copyinput");
btn.addEventListener("click",()=>{
  navigator.clipboard.writeText(input.value);
  btn.innerText="URL Copied"
})