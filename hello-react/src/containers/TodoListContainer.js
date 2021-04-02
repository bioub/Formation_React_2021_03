import { useDispatch, useSelector } from "react-redux";
import TodoList from "../todos/TodoList";

function TodoListContainer() {
  const items = useSelector((state) => state.todos.items);
  const dispatch = useDispatch();

  return (
    <TodoList items={items} onDelete={(item) => dispatch({type: 'DELETE_TODO', payload: item})} />
  );
}

export default TodoListContainer;
