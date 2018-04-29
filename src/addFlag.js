export default function(str) {
  const e = document.querySelector(str);
  e.insertBefore(document.createTextNode("|"), e.childNodes[5]);
  document.querySelectorAll(`${str} span`).forEach((it, i) => {
    if (i < 5) {
      it.style.color = "#FBC32D";
    } else {
      it.style.color = "#043CD2";
    }
  });
}
