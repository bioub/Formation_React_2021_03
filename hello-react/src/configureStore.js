import { createStore } from "redux";
import counterReducer from "./store/reducers/counter";

function configureStore() {
  const store = createStore(
    counterReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );

  // plugins...

  return store;
}

export default configureStore;
