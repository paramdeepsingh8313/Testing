import React, { createContext, useReducer, useState } from "react";
import "./App.css";
import { Firstname, LastName, hobbies, obj, add } from "./data";
import Animal from "./Animal";
import Birds from "./Birds";

import { initialValue, reducer } from "./reducer";

function Hello() {
  return "Hello world";
}

let cities = ["bangalore", "mumbai"];
cities = [...cities, "Delhi"];
console.log(cities);

let student = {
  name: "Roshan",
  age: 27,
};

student = { ...student, marks: 100 };

console.log(student);

let userContext = React.createContext();

function App() {
  const [count, dispatch] = useReducer(reducer, initialValue);

  return (
    <div className="App">
      <h1>Hello</h1>
      {/* <h1>
        {Firstname} {LastName}
      </h1>
      {hobbies.map((element) => {
        return <h4>{element}</h4>;
      })}
      <h2>
        My address is {obj?.address?.country}, {obj?.address?.city}
      </h2>
      {add(10, 10)}

      <br />

      <Animal>
        <Hello />
        <h1>Hello I am an Animal</h1>
      </Animal>

      <userContext.Provider value={"Sparrow"}>
        <Birds />
      </userContext.Provider> */}

      <h1>{count.counting}</h1>

      <button onClick={() => dispatch({ type: "INCREMENT", value: 50 })}>
        Increment by 1
      </button>
      <br />
      <button onClick={() => dispatch({ type: "DECREMENT", value: 10 })}>
        DEcrement by 1
      </button>
      <br />

      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}

export default App;

export { userContext };
