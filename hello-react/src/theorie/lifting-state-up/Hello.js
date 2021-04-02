function Hello({ name = '', age = 0 }) {
  return (
    <div className="Hello">
      Hello my name is <b>{name}</b>, I'm {age}
    </div>
  );
}

export default Hello;
