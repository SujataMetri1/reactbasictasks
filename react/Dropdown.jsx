import { useState } from "react";
function Dropdown() {
  const [value, setValue] = useState("");

  return (
    <>
      <select onChange={e => setValue(e.target.value)}>
        <option value="">Select</option>
        <option value="React">React</option>
        <option value="Vue">Vue</option>
      </select>

      <p>Selected: {value}</p>
    </>
  );
}
export default Dropdown