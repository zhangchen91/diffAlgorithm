import { Component } from "./dependence";
import addFlag from "./addFlag";
import {zhang, chen, renderApp} from "./common";
import Span from "./Span.js";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      name: [zhang, chen],
      reverseName: [chen, zhang]
    };
  }
  handleChange = () => {
    const {name, reverseName} = this.state
    name.reverse()
    reverseName.reverse()
    this.setState({
      name,
      reverseName
    });
  };
  componentDidMount() {
    addFlag("#H2", 5);
    addFlag("#H3", 4);
  }
  render() {
    let { name, reverseName } = this.state;
    name = name.join("").split("");
    reverseName = reverseName.join("").split("");
    return renderApp(name, reverseName, Span, this.handleChange);
  }
}
