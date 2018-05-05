import { Component } from "./dependence";
import {renderSpan} from "./common";

export default class Span extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentWillMount() {
    console.log("Mount", this.props.name);
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.name !== nextProps.name) {
      this.setState({
        old: this.props.name
      });
      console.log(`Re-render from ${this.props.name} to ${nextProps.name}`);
    }
  }
  shouldComponentUpdate(nextProps) {
    if (this.props.name === nextProps.name) {
      console.log("Reuse", this.props.name);
      return false;
    } else return true;
  }
  render() {
    const { name } = this.props;
    const { old } = this.state;
    return renderSpan(name, old)
  }
}
