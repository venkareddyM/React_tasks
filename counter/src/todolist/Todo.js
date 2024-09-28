// TodoList.js
import React, { useState } from 'react';
import './Todo.css'; // Importing CSS file

const TodoList = () => {
  const [todos, setTodos] = useState([]); // State for storing todos
  const [inputValue, setInputValue] = useState(''); // State for the input field
  const [editIndex, setEditIndex] = useState(-1); // Track index of the todo being edited

  const addOrUpdateTodo = () => {
    if (inputValue) {
      if (editIndex >= 0) {
        // Update existing todo
        const updatedTodos = todos.map((todo, index) => 
          index === editIndex ? { ...todo, text: inputValue } : todo
        );
        setTodos(updatedTodos); // Set updated todos
        setEditIndex(-1); // Reset editIndex
      } else {
        // Add new todo
        setTodos([...todos, { text: inputValue, completed: false }]);
      }
      setInputValue(''); // Clear input
    }
  };

  const removeTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index); // Remove todo by index
    setTodos(newTodos);
  };

  const startEditing = (index) => {
    setInputValue(todos[index].text); // Set inputValue to the todo text for editing
    setEditIndex(index); // Set the current index for editing
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)} // Update inputValue state on change
        placeholder="Add or update a task"
      />
      <button onClick={addOrUpdateTodo}>{editIndex >= 0 ? 'Update' : 'Add'}</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            {todo.text} {/* Show todo text */}
            <button onClick={() => startEditing(index)}>Edit</button>
            <button onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
