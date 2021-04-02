// function component (anciennement stateless component)
function CounterControlled({ count = 0, onIncrement = () => {} }) {
  return (
    <button className="CounterControlled" onClick={onIncrement}>
      {count}
    </button>
  );
}

export default CounterControlled;
