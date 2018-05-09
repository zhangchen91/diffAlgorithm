import { Component } from "./dependence";
import {renderSpan} from "./common";

let once
export default class Span extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    once = true
  }
  componentWillMount() {
    console.log("Mount", this.props.letter);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.letter !== nextProps.letter) {
      this.setState({
        old: this.props.letter
      });
      console.log(`Re-render from ${this.props.letter} to ${nextProps.letter}`);
    }
  }
  shouldComponentUpdate(nextProps) {
    if (this.props.letter === nextProps.letter) {
      console.log("Reuse", this.props.letter);
      return false;
    } else return true;
  }
  render() {
    const { letter } = this.props;
    const { old } = this.state;
    return renderSpan(letter, once, old)
  }
}
