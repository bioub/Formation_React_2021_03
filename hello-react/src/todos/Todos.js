import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

// class Todos extends Component {
//   state = {
//     todos: [
//       {id: 1, title: 'Lait', completed: false},
//       {id: 2, title: 'Pain', completed: true},
//       {id: 3, title: 'Beurre', completed: false}
//     ],
//     newTodo: 'Farine',
//   };

//   handleValueChange = (value) => {
//     this.setState({
//       newTodo: value,
//     });
//   }

//   handleAdd = (value) => {
//     const { todos } = this.state;
//     this.setState({
//       todos: [...todos, {id: Math.random(), title: value, completed: false}],
//       newTodo: '',
//     });
//   }

//   render() {
//     const { todos, newTodo } = this.state;
//     return <div className="Todos">
//       <TodoForm value={newTodo} onValueChange={this.handleValueChange} onAdd={this.handleAdd} />
//       <TodoList items={todos} />
//     </div>
//   }
// }

function Todos() {
  const [todos, setTodos] = useState([
    { id: 1, title: "Lait", completed: false },
    { id: 2, title: "Pain", completed: true },
    { id: 3, title: "Beurre", completed: false },
  ]); // récupère 1 clé du state
  const [newTodo, setNewTodo] = useState("Farine"); // récupère 1 clé du state

  function handleValueChange(value) {
    setNewTodo(value);
  }

  function handleAdd(value) {
    setTodos([...todos, {id: Math.random(), title: value, completed: false}]);
    setNewTodo('');
  }

  return (
    <div className="Todos">
      <TodoForm
        value={newTodo}
        onValueChange={handleValueChange}
        onAdd={handleAdd}
      />
      <TodoList items={todos} />
    </div>
  );
}

export default Todos;
