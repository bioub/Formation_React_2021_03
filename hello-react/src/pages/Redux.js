import CounterContainer from "../containers/CounterContainer";
import HelloContainer from "../containers/HelloContainer";
import HelloWorldContainer from "../containers/HelloWorldContainer";

function Redux() {
  return (
    <div className="Redux">
      <h2>Redux</h2>
      <CounterContainer />
      <CounterContainer />
      <CounterContainer />
      <CounterContainer />
      <HelloContainer />
      <HelloWorldContainer />
    </div>
  );
}

export default Redux;
