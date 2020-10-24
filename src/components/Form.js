import React from 'react';

const Form = ({ setInputText, setTodos, todos, inputText, setStatus }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.floor(Math.random() * 100000),
      },
    ]);
    setInputText('');
    document.querySelector('.todo-input').focus();
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <input
        value={inputText}
        onChange={inputTextHandler}
        type="text"
        className="todo-input"
        autoFocus
      />
      <button onClick={submitTodoHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">all</option>
          <option value="completed">completed</option>
          <option value="pending">pending</option>
        </select>
      </div>
    </form>
  );
};
export default Form;
