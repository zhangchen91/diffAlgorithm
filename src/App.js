import { Component } from "./dependence";
import {first, last, mounted, renderApp} from "./common";
import Span from "./Span.js";

export default class App extends Component {
  constructor() {
    super();
    let name = [first, last]
    this.state = {
      name,
      reverseName: [...name].reverse()
    };
  }
  letter = () => {
    const {name} = this.state
    const letter_reverse = [name[0], name[1].split("").reverse().join("")];
    this.setState({
      name: [...letter_reverse].reverse(),
      reverseName: letter_reverse
    });
  }
  word = () => {
    const {name: reverseName, reverseName: name} = this.state
    this.setState({name, reverseName});
  }
  componentDidMount = mounted
  render() {
    let { name, reverseName } = this.state;
    const {letter, word} = this;
    return renderApp(name, reverseName, Span, letter, word);
  }
}
