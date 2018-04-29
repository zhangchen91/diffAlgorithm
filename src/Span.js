/** @jsx h */
import { Component, createElement as h } from "./dependence";

export default class Span extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "#000"
    };
  }
  componentWillReceiveProps(nextProps) {
    if (this.props.name !== nextProps.name) {
      this.setState({
        old: this.props.name
      });
      console.log(`Prop from ${this.props.name} to ${nextProps.name}`);
    } else console.log("Reuse");
  }
  render() {
    const { id, name } = this.props;
    const { old } = this.state;
    if (!old) {
      return <span id={id}>{name}</span>;
    } else {
      return (
        <span style={{ color: "red" }} id={id}>
          <span style={{ textDecoration: "line-through" }}>{old}</span>
          <span style={{ color: "green" }}>{name}</span>
        </span>
      );
    }
  }
}
