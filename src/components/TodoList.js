import React from 'react';
import Todo from './Todo';

const TodoList = ({ todos, setTodos, filterTodo }) => {
  console.log(filterTodo);

  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filterTodo.map((todo) => (
          <Todo
            setTodos={setTodos}
            key={todo.id}
            text={todo.text}
            todos={todos}
            todo={todo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
