import { Component } from "react";

class ExMultiStateButton extends Component {
  state = {
    index: 0
  };
  handleClick = () => {
    const { index } = this.state;
    const { values } = this.props;
    this.setState({
      index: (index + 1) % values.length,
    });
  };
  render() {
    const { index } = this.state;
    const { values } = this.props;
    return (
      <button className="ExMultiStateButton" onClick={this.handleClick}>
        {values[index]}
      </button>
    );
  }
}

export default ExMultiStateButton;
