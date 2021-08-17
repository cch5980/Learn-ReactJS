import React from 'react';
import { TodoConsumer } from '../contexts/todo';
import TodoListItem from './TodoListItem';

const TodoList = () => {
    return (
        <TodoConsumer>
            {value => (
                <div>
                    {value.state.todos.map((data) => 
                        <TodoListItem data={data} key={data.id}/>)
                    }
                </div>
                
            )}
        </TodoConsumer>
    );
};

export default TodoList;