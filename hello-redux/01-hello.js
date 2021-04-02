const { createStore } = require('redux');

const initialState = {
    count: 0,
};

// const nextState = reducer(state, action);
function reducer(state = initialState, action) {
    // console.log('reducer', state, action);

    if (action.type === 'INCREMENT') {
        return {
            count: state.count + 1,
        };
    }

    if (action.type === 'DECREMENT') {
        return {
            count: state.count - 1,
        };
    }

    return state;
}

/** @type {import('redux').Store} */
const store = createStore(reducer);

// console.log('state', store.getState());

store.subscribe(() => {
    // après chaque dispatch
    console.log('state', store.getState());
});

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });

// console.log('state', store.getState());