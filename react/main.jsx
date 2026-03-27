import React from "react";
import ReactDOM from "react-dom/client";

import NameList from "./NameList";
import Greeting from "./Greeting";
import ToggleText from "./ToggleText";
import Counter from "../Counter";
import Button1 from "./Button1";
import Button from "./Button";
import Users from "./Users";
import SearchFilter from "./SearchFilters";
import Dropdown from "./Dropdown";
import MyForm from "./MyForm";
import CharCounter from "./CharCounter";
import LoginForm from "./LoginForm";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <div>
      {/* <NameList /> */}
      {/* <Greeting /> */}
      {/* <ToggleText /> */}
      {/* <Counter /> */}

      {/* <Button text="Click Me" color="blue" />
      <Button text="Submit" color="green" />

      <Button1 /> */}
      {/* <Users></Users> */}
      {/* <SearchFilter></SearchFilter> */}
      {/* <Dropdown></Dropdown> */}
      {/* <MyForm></MyForm> */}
      {/* <CharCounter></CharCounter> */}
      <LoginForm></LoginForm>
    </div>
  </React.StrictMode>
);