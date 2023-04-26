import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./redux/action/todoActions";
import "./TodoInput.css";

export function TodoInput() {
  const [newTodo, setNewTodo] = useState();

  function handleClick() {
    dispatch(
      addTodo({
        text: newTodo,
        completed: false,
      })
    );
  }

  function handleInputChange(event) {
    const value = event.target.value;
    setNewTodo(value);
  }

  const dispatch = useDispatch();

  return (
    <>

      <form>
        <h2 id="logo">Todo input</h2>
          <label htmlFor="todo">Todo</label>
          <input type="text" value={newTodo} onChange={handleInputChange} />{" "}
          <br />
          <button onClick={handleClick}>Add todo</button>
       
      </form>
    </>
  );
}