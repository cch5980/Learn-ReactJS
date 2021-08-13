import React from 'react';
import TodoListItem from './TodoListItem';

const TodoList = ({todos, onCheckChange, onRemove}) => {
    return (
        <div>
            {todos.map((data) => 
                <TodoListItem data={data} key={data.id} onCheckChange={onCheckChange} onRemove={onRemove} />)
            }
        </div>
    );
};

export default TodoList;