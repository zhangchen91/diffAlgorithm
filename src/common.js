/** @jsx h */
import { createElement as h } from "./dependence";

export const first = "zhang";
export const last = "cHeN";
// 一个简单点的例子
// export const first = "zha";
// export const last = "cH";

export function mounted() {
  Hack("#H1", first.length);
  Hack("#H2", last.length);
}

let flag = {};
function Hack(str, len) {
  // 更好的 Hack 方案可以是把 insertBefore 改为 queue + aysnc 的操作
  const e = document.querySelector(str);
  const l = document.querySelectorAll(`${str} span`);
  new Array(l.length-1).fill(1).map((it, i) => {
    const s = `${str}${i}`
    flag[s] && e.removeChild(flag[s]);
    return s
  }).forEach((s, i) => {
    flag[s] = document.createTextNode("|");
    e && e.insertBefore(flag[s], e.childNodes[l.length-i-1]);
  })
  l && l.forEach((it, i) => {
    if ((i < len) === (len < l.length/2)) {
      it.style.color = "#043CD2"; // 长半边为黄色
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
        {reverseName.map((it, i) => <Span key={it} data-index={i} name={it.toLowerCase()} />)}
      </h1>
      <h1>
        i:{name.map((it, i) => <Span key={i} name={it.toLowerCase()} />)}
      </h1>
      <h1>
        r:{name.map((it, i) => (
          <Span key={Math.random()} name={it.toLowerCase()} />
        ))}
      </h1>
    </div>
  );
  // 非字符串类会走toString， key={{k:it}}
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

