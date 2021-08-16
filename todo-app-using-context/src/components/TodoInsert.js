import React, { useState } from 'react';
import { TodoConsumer } from '../contexts/todo';

const TodoInsert = () => {
    const [inputValue, setInputValue] = useState('');

    return (
        <div>
            <TodoConsumer>
            {value => 
                <form onSubmit={(e) => {
                    e.preventDefault();
                    value.actions.onInsert(inputValue);
                    setInputValue('');
                }}>
                <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
                <button type="submit">할일 추가</button>
                </form>
            }
            </TodoConsumer>
        </div>
    );
};

export default TodoInsert;