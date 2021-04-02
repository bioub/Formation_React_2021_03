function HelloWorld({ prenom = '', onPrenomChange = () => {} }) {
  return (
    <div className="HelloWorld">
      <div>
        Prénom : <input value={prenom} onChange={(event) => onPrenomChange(event.target.value)} />
      </div>
      <p>Bonjour {prenom}</p>
    </div>
  );
}

export default HelloWorld;
