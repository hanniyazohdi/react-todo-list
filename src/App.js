import React, { useState } from 'react';
import TodoList from './components/TodoList';

import './style.css';

function App() {

  const [value, setValue] = useState('');
  const [todos, setTodos] = useState([]);

  const onChangeInput = (e) => {
    setValue(e.target.value);
  }

  const onHandleAdd = (task) => {
    setTodos(prevTodos => {
      return [...prevTodos, task];
    });

  }

  const onHandleClear = () => {
    setTodos([]);
  }

  return (
    <div>
      <input type="text" value={value} onChange={onChangeInput}/> <br/>

      <button onClick={e => onHandleAdd(value)}>Add</button><br />

      <button onClick={onHandleClear}>Clear</button>

      <TodoList todoArray={todos} />

    </div>
  );
}

export default App;