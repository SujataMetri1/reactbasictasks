import React from "react";
import ReactDOM from "react-dom/client";


import NameList from "./NameList";
import Greeting from "./Greeting";
import ToggleText from "./ToggleText";
import Counter from "../Counter";

// Get the 'root' div from index.html
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render your App component inside the root
root.render(
  <div>
  {/* <NameList></NameList> */}
  {/* <Greeting></Greeting> */}
  {/* <ToggleText></ToggleText> */}
  <Counter></Counter>
  </div>
);