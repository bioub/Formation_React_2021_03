import { Component } from "react";
import Hello from "./Hello";
import HelloWorld from "./HelloWorld";
import CounterControlled from "./CounterControlled";

class Parent extends Component {
  state = {
    prenom: 'Romain',
    age: 35,
  };

  handlePrenomChange = (prenom) => {
    this.setState({
      prenom
    })
  };

  handleIncrement = () => {
    const { age } = this.state;
    this.setState({
      age: age + 1,
    })
  }

  render() {
    const { prenom, age } = this.state;
    return (
      <div className="Parent">
        <HelloWorld prenom={prenom} onPrenomChange={this.handlePrenomChange} />
        <Hello name={prenom} age={age} />
        <CounterControlled count={age} onIncrement={this.handleIncrement} />
        <CounterControlled count={age} onIncrement={this.handleIncrement} />
        <CounterControlled count={age} onIncrement={this.handleIncrement} />
      </div>
    );
  }
}

export default Parent;
