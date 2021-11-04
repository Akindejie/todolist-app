import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';
import { useState, useEffect } from 'react';

function App() {
  // useState stuff
  const [inputText, setInputText] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filteredTodos, setFilteredTodos] = useState([]);

  // useEffect stuff

  useEffect(() => {
    const filterHandler = () => {
      switch (status) {
        case 'completed':
          setFilteredTodos(todos.filter((todo) => todo.completed === true));
          break;
        case 'uncompleted':
          setFilteredTodos(todos.filter((todo) => todo.completed === false));
          break;
        default:
          setFilteredTodos(todos);
          break;
      }
    };
    filterHandler();
  }, [todos, status]);

  // useEffect(() => {
  //   const getLocalTodos = () => {
  //     if (localStorage.getItem('todos') === null) {
  //       localStorage.setItem('todos', JSON.stringify([]));
  //     } else {
  //       let todoLocal = JSON.parse(localStorage.getItem('todos'));
  //       setTodos(todoLocal);
  //     }
  //   };
  //   getLocalTodos();
  // });

  // // Save to Local

  // const saveLocalTodos = () => {
  //   localStorage.setItem('todos', JSON.stringify(todos));
  // };

  return (
    <div className="App">
      <header>
        <h1>Deji Todo List</h1>
      </header>
      <Form
        inputText={inputText}
        todos={todos}
        setTodos={setTodos}
        setInputText={setInputText}
        setStatus={setStatus}
      />
      <TodoList filterTodo={filteredTodos} setTodos={setTodos} todos={todos} />
    </div>
  );
}

export default App;
