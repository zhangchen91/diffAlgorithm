export default function(str, len) {
  const e = document.querySelector(str);
  e.insertBefore(document.createTextNode("&"), e.childNodes[len]);
  document.querySelectorAll(`${str} span`).forEach((it, i) => {
    if (i < len) {
      it.style.color = "#FBC32D";
    } else {
      it.style.color = "#043CD2";
    }
  });
}
