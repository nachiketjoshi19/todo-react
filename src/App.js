import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  //states
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  //run once when starts
  useEffect(() => {
    getLocalTodos();
  }, []);
  //useEffect
  useEffect(() => {
    filteredHandler();
    saveLocalTodos();
  }, [todos, status]);

  const filteredHandler = () => {
    switch (status) {
      case 'completed':
        setFilteredTodos(todos.filter((todo) => todo.completed === true));
        break;
      case 'pending':
        setFilteredTodos(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  };
  //save to local
  const saveLocalTodos = () => {
    if (localStorage.getItem('todos') === null) {
      localStorage.setItem('todos', JSON.stringify([]));
    } else {
      localStorage.setItem('todos', JSON.stringify(todos));
    }
  };

  const getLocalTodos = () => {
    let todoLocal = JSON.parse(
      localStorage.getItem('todos', JSON.stringify(todos))
    );
    setTodos(todoLocal);
  };
  return (
    <div className="App">
      <header>
        <h1>NJ's To Do list </h1>
      </header>
      <Form
        todos={todos}
        inputText={inputText}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList
        filteredTodos={filteredTodos}
        setTodos={setTodos}
        todos={todos}
      />
    </div>
  );
}

export default App;
