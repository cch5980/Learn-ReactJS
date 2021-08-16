import React from 'react';
import { TodoConsumer } from '../contexts/todo';

const TodoListItem = ({data}) => {
    return (
        <div>
            <TodoConsumer>
                {value => (
                    <div>
                        <input type="checkbox" checked={data.checked} onChange={() => value.actions.onCheckChange(data.id)} />
                        {data.checked ? <del>{data.todo}</del> : data.todo}
                        <input type="button" value="삭제" onClick={() => value.actions.onRemove(data.id)} />
                    </div>

                )}
            </TodoConsumer>
        </div>
    );
};

export default TodoListItem;