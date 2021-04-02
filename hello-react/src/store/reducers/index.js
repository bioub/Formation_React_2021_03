import { combineReducers } from "redux";

const initialState = {
  age: 35,
  prenom: "Romain",
  todos: {
    newTodo: "Achet",
    items: [
      {
        id: 1,
        title: "Acheter du pain",
        completed: false,
      },
      {
        id: 2,
        title: "Aller au sport",
        completed: true,
      },
      {
        id: 3,
        title: "Utiliser Redux",
        completed: false,
      },
    ],
  },
};

function ageReducer(state = initialState.age, action) {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 2;
    default:
      return state;
  }
}

function prenomReducer(state = initialState.prenom, action) {
  switch (action.type) {
    case "UPDATE_PRENOM":
      return action.payload;
    default:
      return state;
  }
}

function todosReducer(state = initialState.todos, action) {
  switch (action.type) {
    case "CHANGE_TODO":
      return { ...state, newTodo: action.payload };
    case "ADD_TODO":
      return { ...state, newTodo: "", items: [...state.items, action.payload] };
    case "DELETE_TODO":
      return {
        ...state,
        items: state.items.filter((it) => it.id !== action.payload.id),
      };
    default:
      return state;
  }
}

const reducer = combineReducers({
  age: ageReducer,
  prenom: prenomReducer,
  todos: todosReducer,
  // todos: combineReducers({
  //   items: todosItemsReducer,
  //   newTodo: todosNewTodoReducer,
  // })
});
// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case "INCREMENT":
//       return { ...state, age: ageReducer(state.age, action) };
//     case "DECREMENT":
//       return { ...state, age: ageReducer(state.age, action) };
//     case "UPDATE_PRENOM":
//       return { ...state, prenom: prenomReducer(state.prenom, action) };
//     default:
//       return state;
//   }
// }

// fonction pure
// - prédictive (appelée avec des paramètres données, elle retourne toujours la même valeur)
// ex : sum(1, 2) === 3
// ex (non-prédictive): Math.random() === ???
// - pas de side-effect (elle n'appelle d'autres fonctions type : ajax, localstorage)
// - elle ne modifie pas ses paramètres (en particulier le state) => state immuable
// function reducer(state = initialState, action) {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { ...state, age: state.age + 1 };
//     case 'DECREMENT':
//       return { ...state, age: state.age - 1 };
//     case 'UPDATE_PRENOM':
//       return { ...state, prenom: action.payload };
// case 'ADD_TODO':
//   return { ...state, todos: {...state.todos, items: [...state.todos.items, {}]} };
//     default:
//       return state;
//   }
// }

export default reducer;
