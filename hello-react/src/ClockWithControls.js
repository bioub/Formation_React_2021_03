import { Component } from "react";
import Clock from "./Clock";

class ClockWithControls extends Component {
  state = {
    showClock: true,
  };
  toggleShowClock = () => {
    const { showClock } = this.state;
    this.setState({
      showClock: !showClock,
    });
  }
  render() {
    const { showClock } = this.state;
    return (
      <div className="ClockWithControls">
  
        <button onClick={this.toggleShowClock}>{!showClock ? "On" : "Off"}</button>
        {showClock && <Clock />}
      </div>
    );
  }
}

export default ClockWithControls;
