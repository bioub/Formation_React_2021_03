import CounterControlled from "../theorie/lifting-state-up/CounterControlled";

import { connect, useDispatch, useSelector } from "react-redux";

function CounterContainer() {
  // const age = useStore().getState().age;
  const age = useSelector((state) => state.age);
  const dispatch = useDispatch();

  return (
    <CounterControlled count={age} onIncrement={() => dispatch({type: 'INCREMENT' })}/>
  );
}

// function mapStateToProps(state) {
//   return {
//     count: state.age,
//   };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     onIncrement() {
//       dispatch({ type: "INCREMENT" });
//     },
//   };
// }

// const enhance = connect(mapStateToProps, mapDispatchToProps);
// const CounterContainer = enhance(CounterControlled);

export default CounterContainer;
