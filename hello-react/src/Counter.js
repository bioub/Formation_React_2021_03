import { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    };
    // grace à cette ligne, this existera dans handleClick au moment du click :
    this.handleClick = this.handleClick.bind(this);
  }
  // handleClick() {
  //   const { count } = this.state;
  //   this.setState({
  //     count: count + 1
  //   });
  // }
  handleClick(event) {
    const count = Number(event.target.innerText);
    this.setState({
      count: count + 1
    });
  }
  render() {
    const { count } = this.state;

    // buttonEl.addEventListener('click', (event) => {
        // event.target
    // });

    return (
      <button className="Counter" onClick={this.handleClick}>
        {count}
      </button>
    );
  }
}

export default Counter;

