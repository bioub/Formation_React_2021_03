import { useDispatch, useSelector } from "react-redux";
import HelloWorld from "../theorie/lifting-state-up/HelloWorld";

function HelloWorldContainer() {
  const name = useSelector((state) => state.prenom);
  const dispatch = useDispatch();

  return (
    <HelloWorld
      prenom={name}
      onPrenomChange={(value) =>
        dispatch({ type: "UPDATE_PRENOM", payload: value })
      }
    />
  );
}

export default HelloWorldContainer;
