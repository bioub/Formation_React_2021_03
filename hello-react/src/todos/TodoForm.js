function TodoForm({ value, onValueChange, onAdd }) {

  function handleSubmit(event) {
    event.preventDefault();
    onAdd(value); // remonte la valeur à Todos
  }

  function handleChange(event) {
    onValueChange(event.target.value); // remonte la valeur à Todos
  }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input value={value} onChange={handleChange} />
      <button>+</button>
    </form>
  );
}

export default TodoForm;
