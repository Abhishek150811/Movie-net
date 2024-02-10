import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

export default function SearchBar() {
  const [curr, setCurr] = useState(false);

  return (
    <div
      className="search-box"
      style={{
        border: curr ? "2px solid var(--glow-green)" : "none",
        boxShadow: curr ? "8px 5px 15px var(--primary-grey)" : null,
      }}
    >
      <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
      <input
        type="text"
        name=""
        id=""
        onBlur={(e) => setCurr(!curr)}
        onFocus={(e) => setCurr(!curr)}
        placeholder="Search..."
      />
    </div>
  );
}
