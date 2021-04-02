const initialState = {
  count: 0,
};

// fonction pure
// - prédictive (appelée avec des paramètres données, elle retourne toujours la même valeur)
// ex : sum(1, 2) === 3
// ex (non-prédictive): Math.random() === ???
// - pas de side-effect (elle n'appelle d'autres fonctions type : ajax, localstorage)
// - elle ne modifie pas ses paramètres (en particulier le state) => state immuable
function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

export default counterReducer;
