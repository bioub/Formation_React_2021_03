// optionnel depuis React 17
// import React from "react";
import Hello from './Hello';

function App() {
  const name = 'Romain';

  return (
    <div className="App">
      <h2>Hello (Component, JSX, props)</h2>
      <Hello name="Romain" age={35} isTrainer />
      {/* React.createElement(Hello, {name: 'Romain', age: 35, isTrainer: true}) */}
      <Hello name={name} />
      <h2>Clock (State, Lifecycle)</h2>
      
    </div>
  );
}

export default App;
