import { useState } from "react";
function SearchFilter() {
  const [search, setSearch] = useState("");
  const items = ["Apple", "Banana", "Mango"];

  const filtered = items.filter(item =>
    item.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <input value={search} onChange={e => setSearch(e.target.value)} />
      {filtered.map((item, i) => <p key={i}>{item}</p>)}
    </>
  );
}
export default SearchFilter