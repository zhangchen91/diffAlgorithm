/** @jsx h */
import { Component, createElement as h } from "./dependence";
import Span from "./Span";
import addFlag from "./addFlag.js";
export default class App extends Component {
  constructor() {
    super();
    this.state = {
      list: "zhangcHeN".split("")
    };
  }
  handleChange = () => {
    this.setState({
      list: "cHeNzhang".split("")
    });
  };
  componentDidMount() {
    addFlag("#H2");
  }
  render() {
    const { list } = this.state;
    return (
      <div>
        <button onClick={this.handleChange}>change</button>
        <h1>
          r:{list.map((it, i) => (
            <Span key={Math.random()} name={it.toLowerCase()} />
          ))}
        </h1>
        <h1>
          i:{list.map((it, i) => <Span key={i} name={it.toLowerCase()} />)}
        </h1>
        <h1 id="H2">
          {list.map((it, i) => <Span key={it} name={it.toLowerCase()} />)}
        </h1>
      </div>
    );
  }
}
