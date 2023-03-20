import React, { useContext } from "react";
import { userContext } from "./App";

function Peacock() {
  const result = useContext(userContext);
  return (
    <div>
      Peacock
      <h5>{result}</h5>
    </div>
  );
}

export default Peacock;
