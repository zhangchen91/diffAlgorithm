// import { Component, createElement } from "react";
// import { render } from "react-dom";

/**
 *
 * 替换 react 为 vue 或 react-like 可看到前两行的 & 表现不一致
 * 最后两个则更为诡异,所以使用 Virtual DOM 后不再建议直接操作 DOM
 *
 **/

import Vue from "vue"
const vue = new Vue({})
const createElement = vue.$createElement

// import { Component, render } from "inferno";
// import { createElement } from "inferno-create-element";

// import { Component, createElement, render } from "preact";

// import { Component, createElement, render } from "luy";

export { Component, createElement, render };
