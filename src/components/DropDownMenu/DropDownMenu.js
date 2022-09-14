import React from "react";
import "./DropDownMenu.scss";

const DropDownMenu = ({ setSelection, selection }) => {
  return (
    <div className="menu-container">
      <label for="sections">Choose a section:</label>
      <select
        id="sections"
        name="sections"
        value={selection}
        onChange={(e) => setSelection(e.target.value)}
      >
        <option value="arts">Arts</option>
        <option value="automobiles">Automobiles</option>
        <option value="fashion">Fashion</option>
        <option value="home">Home</option>
      </select>
    </div>
  );
};

export default DropDownMenu;
