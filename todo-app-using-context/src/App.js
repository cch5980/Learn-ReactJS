import React from 'react';
import TodoTemplate from './components/TodoTemplate';
import { TodoProvider } from './contexts/todo';

const App = () => {


  return (
    <div>
      <TodoProvider>
        <TodoTemplate />
      </TodoProvider>
    </div>
  );
};

export default App;