import { createContext, useState } from 'react';

const TodoContext = createContext({
    state: {
        todos: [
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
        ],
        idx: 5
    },
    actions: {
        setTodos: () => {},
        setIdx: () => {},
        onCheckChange: () => {},
        onInsert: () => {},
        onRemove: () => {},
    }
});

const TodoProvider = ({ children }) => {
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
        console.log("hello")
        setTodos(todos.filter(todo => todo.id !== id));
      }

    const value = {
        state: {todos, idx},
        actions: {setTodos, setIdx, onCheckChange, onInsert, onRemove}
    }
    return (
        <TodoContext.Provider value={value}>{children}</TodoContext.Provider>
    )
}

const { Consumer: TodoConsumer } = TodoContext;
export { TodoProvider, TodoConsumer };


export default TodoContext;