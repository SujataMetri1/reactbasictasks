import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Import your main App component

import Calculator from "./Calculator";
import App1 from "./App1";
import SearchBar from "./SearchBar";
import Counter from "./Counter";
import Hide from "./Hide";
import Text from "./Text";
import App2 from "./App2";
import AddItemToList from "./AddItemToList";
import ConditionRendering from "./ConditionRendering";
import Toggale from "./Toggale";
import ShowHide from "./ShowHide";
import Button from "./button";
import StatusBadge from "./StatusBadge";

// Get the 'root' div from index.html
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render your App component inside the root
root.render(
  <div>
  {/* <App /> */}
    {/* <App1 /> */}
   {/* <Calculator></Calculator> */}
   {/* <App1></App1> */}
   {/* <SearchBar></SearchBar> */}
   {/* <Counter></Counter> */}
   {/* <Hide></Hide> */}
   {/* <Text></Text> */}
    {/* <App2></App2> */}
    {/* <AddItemToList></AddItemToList> */}
    {/* <ConditionRendering></ConditionRendering> */}
    {/* <Toggale></Toggale> */}
    {/* <ShowHide></ShowHide> */}
    {/* <Button></Button> */}
    <StatusBadge></StatusBadge>
  </div>
);