import Clock from "../theorie/Clock";
import ClockWithControls from "../theorie/ClockWithControls";
import Counter from "../theorie/Counter";
import ExHelloWorld from "../theorie/ExHelloWorld";
import ExMultiStateButton from "../theorie/ExMultiStateButton";
import Hello from "../theorie/Hello";
import Parent from "../theorie/lifting-state-up/Parent";
import Select from "../theorie/Select";
import UserForm from "../theorie/UserForm";

function Home() {

  const name = 'Romain';

  return (
    <div className="Home">
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

export default Home;
