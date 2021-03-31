import { Component } from "react";

// function Clock() {
//   let now = new Date();
//   // state
//   return (
//     <div className="Clock">
//       {now.toLocaleTimeString()}
//     </div>
//   );
// }

class Clock extends Component {
  constructor() {
    super();
    this.state = {
      now: new Date(),
    };
    setInterval(() => {
      // Do not mutate state directly. Use setState()
      this.state.now = new Date();
    }, 1000);
  }
  render() {
    // dans une classe les props sont accessible via this.props
    // const { name = '', age = 0, isTrainer = false } = this.props;
    const { now } = this.state;
    return (
      <div className="Clock">
        {now.toLocaleTimeString()}
      </div>
    );
  }
}

export default Clock;

