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
    // addEventListener
    // new WebSocket
    // new Worker
    this._interval = setInterval(() => {
      // Do not mutate state directly. Use setState()
      // this.state.now = new Date();

      // appeler setState conduira React à rappeler render
      this.setState({
        now: new Date(),
      });
    }, 1000);
  }
  componentWillUnmount() {
    // removeEventListener
    // ws.close()
    // worker.terminate()
    clearInterval(this._interval);
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

