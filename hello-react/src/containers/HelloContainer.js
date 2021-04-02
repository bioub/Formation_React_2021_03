import { useSelector } from "react-redux";
import Hello from "../theorie/lifting-state-up/Hello";

function HelloContainer() {
  const name = useSelector((state) => state.prenom);
  const age = useSelector((state) => state.age);

  return (
    <Hello name={name} age={age} />
  );
}

export default HelloContainer;
