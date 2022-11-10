import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("Produce");

  function handleCategoryChange(event){
    setCategory(event.target.value)
  }

  function handleNameChange(event){
    setName(event.target.value)
  }

  function handleFormSubmit(event){
    event.preventDefault()
    const newItem = {
      id: uuid(),
      name: name,
      category: category
    }
    console.log(newItem);
    onItemFormSubmit(newItem)
  }

  return (
    <form className="NewItem" onSubmit={handleFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleNameChange}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategoryChange}>
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
