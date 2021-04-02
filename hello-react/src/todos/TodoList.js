import TodoItem from "./TodoItem";

function TodoList({ items = [] }) {
  return (
    <div className="TodoList">
      {items.map((it) => <TodoItem item={it} key={it.id} />)}
    </div>
  );
}

export default TodoList;
