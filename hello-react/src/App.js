// optionnel depuis React 17
// import React from "react";
import Clock from './Clock';
import ClockWithControls from './ClockWithControls';
import Counter from './Counter';
import ExHelloWorld from './ExHelloWorld';
import ExMultiStateButton from './ExMultiStateButton';
import Hello from './Hello';
import Parent from './lifting-state-up/Parent';
import Select from './Select';
import UserForm from './UserForm';

function App() {
  const name = 'Romain';

  return (
    <div className="App">
      <h2>Hello (Component, JSX, props)</h2>
      <Hello name="Romain" age={35} isTrainer />
      {/* React.createElement(Hello, {name: 'Romain', age: 35, isTrainer: true}) */}
      <Hello name={name}  />
      <h2>Clock (State, Lifecycle)</h2>
      <Clock  />
      <h2>Counter (Events)</h2>
      <Counter />
      <Counter />
      <h2>Exercices</h2>
      <ExHelloWorld />
      <ExMultiStateButton values={['Rouge', 'Orange', 'Bleu']} />
      <h2>Select (conditionnal JSX and List)</h2>
      <Select items={['Rouge', 'Orange', 'Bleu']} />
      <h2>ClockWithControls (Composition and Lifecycle)</h2>
      <ClockWithControls />
      <h2>Form</h2>
      <UserForm />
      <h2>Parent (Lifting state up)</h2>
      <Parent />
    </div>
  );
}

export default App;
