/** @jsx h */
import { createElement as h } from "./dependence";

export const zhang = "zhang";
export const chen = "cHeN";
export function renderApp(name, reverseName, Span, handleChange) {
  name = name.join("").split("")
  reverseName = reverseName.join("").split("")
  return (
    <div>
      <button onClick={handleChange}>change</button>
      <h1>
        r:{name.map((it, i) => (
          <Span key={Math.random()} name={it.toLowerCase()} />
        ))}
      </h1>
      <h1>
        i:{name.map((it, i) => <Span key={i} name={it.toLowerCase()} />)}
      </h1>
      <h1 id="H2">
        {name.map((it, i) => <Span key={it} name={it.toLowerCase()} />)}
      </h1>
      <h1 id="H3">
        {reverseName.map((it, i) => <Span key={it} name={it.toLowerCase()} />)}
      </h1>
    </div>
  );
}
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
}
