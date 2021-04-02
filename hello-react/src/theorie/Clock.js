import { Component } from "react";
import { format as formatDate } from 'date-fns'

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
  }
  startInterval() {
    const { delay = 1000 } = this.props;
    this._interval = setInterval(() => {
      // Do not mutate state directly. Use setState()
      // this.state.now = new Date();

      // appeler setState conduira React à rappeler render
      this.setState({
        now: new Date(),
      });
    }, delay);
  }
  componentDidMount() {
    // addEventListener
    // new WebSocket
    // new Worker
    this.startInterval();
  }
  componentDidUpdate(previousProps) {
    // ne pas redémarrer l'interval si le delay n'a pas changé
    if (previousProps.delay === this.props.delay) {
      return;
    }
    clearInterval(this._interval);
    this.startInterval();
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
    const { format = 'HH:mm:ss' } = this.props;
    return (
      <div className="Clock">
        {formatDate(now, format)}
      </div>
    );
  }
}

export default Clock;

