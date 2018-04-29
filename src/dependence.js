import { Component, createElement } from "react";
import { render } from "react-dom";
// import { Component, render } from "inferno";
// import { createElement } from "inferno-create-element";
/**
 *
 * 替换 react 为 react-like 可看到最后一行的定位符表现不一致
 * 下面两种则行为更诡异，所以使用 react 后不建议再操作 DOM
 *
 **/
// import { Component, createElement, render } from "preact";
// import { Component, createElement, render } from "luy";

export { Component, createElement, render };
