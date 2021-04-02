import { useDispatch, useSelector } from "react-redux";
import TodoForm from "../todos/TodoForm";

function TodoFormContainer() {
  const newTodo = useSelector((state) => state.todos.newTodo);
  const dispatch = useDispatch();

  return (
    <TodoForm
      value={newTodo}
      onAdd={(value) =>
        dispatch({
          type: "ADD_TODO",
          payload: { id: Math.random(), title: value, completed: false },
        })
      }
      onValueChange={(value) =>
        dispatch({ type: "CHANGE_TODO", payload: value })
      }
    />
  );
}

export default TodoFormContainer;
