import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit }) {

  const [newItemField, setNewItemField] = useState("");
  const [newItemCategory, setNewItemCategory] = useState("Produce");

  function handleNewItem(e) {
    e.preventDefault()
    const newItem = {
      id: uuid(),
      name: newItemField,
      category: newItemCategory,
    }
    onItemFormSubmit(newItem)
  }

  return (
    <form className="NewItem" onSubmit={handleNewItem}>
      <label>
        Name:
        <input type="text" name="name" value={newItemField} onChange={(e) => setNewItemField(e.target.value)} />
      </label>

      <label>
        Category:
        <select name="category" value={newItemCategory} onChange={(e) => setNewItemCategory(e.target.value)} >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;

// create state variables for both category dropdown and text input in this component (CHECK)
// make callback fn in app component, send down to this one (CHECK)
// on submit, make new item obj in this component, send up to app component (CHECK)
// then, update stateful items array of objs in App with the new item obj (CHECK)
