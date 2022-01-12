import React, { useState, useEffect, useRef } from "react";

function TodoForm({ onSubmit, edit }) {
  const [input, setInput] = useState(edit ? edit.value : "");
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleChange = (event) => {
    setInput(event.currentTarget.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input,
      isComplete: false,
    });

    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {edit ? (
        <>
          <input
            type="text"
            placeholder="Update your item"
            value={input}
            name="text"
            className="todo-input edit"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button edit">Update</button>
        </>
      ) : (
        <>
          <input
            type="text"
            placeholder="Add a task"
            value={input}
            name="text"
            className="todo-input"
            onChange={handleChange}
            ref={inputRef}
          />
          <button className="todo-button">Add</button>
        </>
      )}
    </form>
  );
}

export default TodoForm;
