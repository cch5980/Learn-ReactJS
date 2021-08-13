import React from 'react';
import TodoInsert from './TodoInsert';
import TodoList from './TodoList';

const TodoTemplate = ({todos, onInsert, onCheckChange, onRemove}) => {
    return (
        <div>
            TodoApp을 만들자
            <TodoInsert onInsert={onInsert} />
            <TodoList todos={todos} onCheckChange={onCheckChange} onRemove={onRemove} />
        </div>
    );
};

export default TodoTemplate;