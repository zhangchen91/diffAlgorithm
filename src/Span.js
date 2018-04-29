/** @jsx h */
import { Component, createElement as h } from "./dependence";

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
}
