import React, {useState} from 'react';
import TodoTemplate from './components/TodoTemplate';

const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      todo: 'todo1',
      checked: false
    },
    {
      id: 2,
      todo: 'todo2',
      checked: true
    },
    {
      id: 3,
      todo: 'todo3',
      checked: false
    },
    {
      id: 4,
      todo: 'todo4',
      checked: true
    },
  ]);
  const [idx, setIdx] = useState(5);

  const onCheckChange = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id ? {...todo, checked: !todo.checked} : todo
      )
    )
  }

  const onInsert = (todo) => {
    const data = {
      id: idx,
      todo: todo,
      checked: false
    }
    setTodos(todos.concat(data));
    setIdx(idx+1)
  }

  const onRemove = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div>
      <TodoTemplate todos={todos} onInsert={onInsert} onCheckChange={onCheckChange} onRemove={onRemove} />
    </div>
  );
};

export default App;