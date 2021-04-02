import TodoItem from "./TodoItem";

function TodoList({ items = [], onDelete }) {
  return (
    <div className="TodoList">
      {items.map((it) => <TodoItem item={it} key={it.id} onDelete={onDelete} />)}
    </div>
  );
}

export default TodoList;
