/** @jsx h */
import { createElement as h } from "./dependence";

export const first = "zhang";
export const last = "cHeN";
// 一个简单点的例子
// export const first = "zha";
// export const last = "cH";

export function mounted() {
  Hack("H1");
  Hack("H2");
  Hack("H3", first.length);
  Hack("H4", last.length);
}

let comma = ",", flags = {};
function Hack(str, len) {
  // 更好的 Hack 方案可以是把 insertBefore 改为 queue + aysnc 的操作
  const e = document.querySelector(`#${str}`);
  const l = document.querySelectorAll(`#${str} span`);
  l.length && new Array(l.length-1).fill(1).map((it, i) => {
    const s = `${str}${i}`
    flags[s] && e.removeChild(flags[s]);
    return s
  }).forEach((s, i) => {
    flags[s] = document.createTextNode(comma);
    e && e.insertBefore(flags[s], e.childNodes[l.length-i-1]);
  })
  len && l && l.forEach((it, i) => {
    if ((i < len) === (len < l.length/2)) {
      it.style.color = "#043CD2"; // 长半边为黄色
    } else {
      it.style.color = "#FBC32D"; // 短半边为蓝色
    }
  });
}

let prev_name = [], prev_reverseName = [];
function renderHold(prev) {
  const n = <h2 class="prev hold" className="prev hold"><span>-</span></h2>
  const p = (
    <h2 class="prev hold" className="prev hold">{
      prev.length ?
      prev.map((it, i) => <span key={i}>{i ? comma: ''}{it.toLowerCase()}</span>) :
      <span>　</span>
    }</h2>
  )
  return prev.length ? p : n
};

function toggle(str) {
  return () => {
    let ele = document.querySelector(`#${str}`)
    ele.className === "visible" ?
    ele.className = "" :
    ele.className = "visible"
  }
}

export function renderApp(name, reverseName, Span, letter, word) {
  name = name.join("").split("")
  reverseName = reverseName.join("").split("")
  const ret = (
    <div>
      <button onClick={letter}>
        <p>zhangchen</p><p>nechzhang</p><p>and</p>
        <p>chenzhang</p><p>zhangnech</p>
      </button>
      <button onClick={word}>
        <p>zhangchen</p><p>chenzhang</p><p>and</p>
        <p>chenzhang</p><p>zhangchen</p>
      </button>
      <hr/>
      {renderHold(prev_name)}
      <h2 id="H1" class="visible" className="visible"
        onClick={toggle('H1')}>
        {name.map((it, i) => <Span key={i} letter={it.toLowerCase()} />)}
      </h2>
      <h2 id="H2" onClick={toggle('H2')}>
        {name.map((it, i) => <Span key={Math.random()} letter={it.toLowerCase()} />)}
      </h2>
      <h2 id="H3" onClick={toggle('H3')}>
        {name.map((it, i) => <Span key={it} letter={it.toLowerCase()} />)}
      </h2>
      <hr/>
      {renderHold(prev_reverseName)}
      <h2 id="H4" class="visible" className="visible"
        onClick={toggle('H4')}>
        {reverseName.map((it, i) => <Span key={it} letter={it.toLowerCase()} />)}
      </h2>
    </div>
  );
  // 非字符串的 Key 会走toString， key={{k:it}}
  // setTimeout(() => {
  prev_name = name
  prev_reverseName = reverseName
  // }, 100)
  return ret
};

export function renderSpan(letter, once, old) {
  if (!once) {
    return <span style={{ color: "#000" }}>{letter}</span>;
  } else if (old) {
    return <span style={{ color: "green" }}>{letter}</span>;
  } else {
    return <span style={{ color: "red" }}>{letter}</span>;
  }
};
