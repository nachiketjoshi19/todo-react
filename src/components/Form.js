import React from 'react';

const Form = () => {
  return (
    <form>
      <input type="text" className="todo-input" />
      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">all</option>
          <option value="completed">completed</option>
          <option value="pending">pending</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
