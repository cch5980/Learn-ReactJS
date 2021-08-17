import React from 'react';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';

const TodoTemplate = () => {
    return (
        <div>
            TodoApp을 만들자
            <TodoInsert />
            <TodoList />
        </div>
    );
};

export default TodoTemplate;