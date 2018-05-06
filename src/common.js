/** @jsx h */
import { createElement as h } from "./dependence";

export const first = "zhang";
export const last = "cHeN";
// 一个简单点的例子
// export const first = "zha";
// export const last = "cH";

export function mounted() {
  addFlag("#H1", first.length);
  addFlag("#H2", last.length);
}

let flag = {};
function addFlag(str, len) {
  const e = document.querySelector(str);
  const l = document.querySelectorAll(`${str} span`);
  flag[str] && e.removeChild(flag[str]);
  flag[str] = document.createTextNode("&");
  e && e.insertBefore(flag[str], e.childNodes[len]);
  l && l.forEach((it, i) => {
    if ((i < len) === (len < l.length/2)) {
      it.style.color = "#043CD2"; // 长半边为黄瓜色
    } else {
      it.style.color = "#FBC32D"; // 短半边为蓝色
    }
  });
}

export function renderApp(name, reverseName, Span, letter, word, reset) {
  name = name.join("").split("")
  reverseName = reverseName.join("").split("")
  return (
    <div>
      <button onClick={letter}>reverse_letter</button>
      <button onClick={word}>reverse_word</button>
      <button onClick={reset}>reset</button>
      <h1 id="H1">
        {name.map((it, i) => <Span key={it} name={it.toLowerCase()} />)}
      </h1>
      <h1 id="H2">
        {reverseName.map((it, i) => <Span key={it} name={it.toLowerCase()} />)}
      </h1>
      {/* <h1>
        i:{name.map((it, i) => <Span key={i} name={it.toLowerCase()} />)}
      </h1>
      <h1>
        r:{name.map((it, i) => (
          <Span key={Math.random()} name={it.toLowerCase()} />
        ))}
      </h1> */}
    </div>
  );
};

export function renderSpan(name, old) {
  if (!old) {
    return <span style={{ color: "#000" }}>{name}</span>;
  } else {
    return (
      <span style={{ color: "red" }}>
        <span style={{ textDecoration: "line-through" }}>{old}</span>
        <span style={{ color: "green" }}>{name}</span>
      </span>
    );
  }
};

