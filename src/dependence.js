import { Component, createElement } from "react";
import { render } from "react-dom";

// import { Component, render } from "inferno";
// import { createElement } from "inferno-create-element";
/**
 *
 * 替换 react 为 react-like 可看到最后一行的 & 表现不一致
 * 下面两个则更为诡异,所以使用 react 后不再建议直接操作 DOM
 *
 **/
// import { Component, createElement, render } from "preact";
// import { Component, createElement, render } from "luy";

export { Component, createElement, render };
