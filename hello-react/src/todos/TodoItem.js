function TodoItem({item = {}, onDelete }) {
  return (
    <div className="TodoItem">
      {item.title} <button onClick={() => onDelete(item)}>-</button>
    </div>
  );
}

export default TodoItem;
