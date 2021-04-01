// optionnel depuis React 17
// import React from "react";
import Clock from './Clock';
import Counter from './Counter';
import ExHelloWorld from './ExHelloWorld';
import ExMultiStateButton from './ExMultiStateButton';
import Hello from './Hello';

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
    </div>
  );
}

export default App;
