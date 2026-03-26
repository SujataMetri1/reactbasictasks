import React from "react";
import ReactDOM from "react-dom/client";
import Level from "./Level";
import Input from "./Input";
import LoginLogout from "./LoginLogout";
import ColorToggle from "./ColorToggle";
import FormValidation from "./FormValidation";
import UserCard from "./UserCard";
import Example from "./Example";
const root = ReactDOM.createRoot(document.getElementById("root"));

// Render your App component inside the root
root.render(
  <div> 
    {/* <Level></Level> */}
    {/* <Input></Input> */}
    {/* <LoginLogout></LoginLogout> */}
    {/* <ColorToggle></ColorToggle> */}
    {/* <FormValidation></FormValidation> */}
    {/* <UserCard></UserCard> */}     <Example></Example>
  </div>
);