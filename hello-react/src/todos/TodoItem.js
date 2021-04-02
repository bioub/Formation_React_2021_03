function TodoItem({item = {}}) {
  return (
    <div className="TodoItem">
      {item.title}
    </div>
  );
}

export default TodoItem;
