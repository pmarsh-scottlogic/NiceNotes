import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "./nameSlice";

function App() {
  const name = useSelector((state) => state.name.chosenName);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Change the name that's stored in the state.</h1>
      <button onClick={() => dispatch(changeName("William"))}>William</button>
      <button onClick={() => dispatch(changeName("Arnold"))}>Arnold</button>
      <button onClick={() => dispatch(changeName("Joe"))}>Joe</button>
      <p>
        The name stored in the state is <b>{name}</b>
      </p>
      <p>
        Look in the redux devtools plugin to confirm this. You can also see all
        the slices there!
      </p>
    </>
  );
}

export default App;
