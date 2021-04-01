import { Component } from "react";
import Clock from "./Clock";

class ClockWithControls extends Component {
  state = {
    showClock: true,
    delay: 1000,
    format: 'HH:mm:ss',
  };
  toggleShowClock = () => {
    const { showClock } = this.state;
    this.setState({
      showClock: !showClock,
    });
  }
  handleChangeDelay = (event) => {
    this.setState({
      delay: Number(event.target.value),
    });
  }
  handleChangeFormat = (event) => {
    this.setState({
      format: event.target.value,
    });
  }
  render() {
    const { showClock, delay, format } = this.state;
    return (
      <div className="ClockWithControls">
        Delay : <input type="number" value={delay} onChange={this.handleChangeDelay} />
        Format : <input type="text" value={format} onChange={this.handleChangeFormat} />
        <button onClick={this.toggleShowClock}>{!showClock ? "On" : "Off"}</button>
        {showClock && <Clock delay={delay} format={format} />}
      </div>
    );
  }
}

export default ClockWithControls;
