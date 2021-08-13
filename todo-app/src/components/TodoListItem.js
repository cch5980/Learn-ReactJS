import React from 'react';

const TodoListItem = ({data, onCheckChange, onRemove}) => {
    const onChange = () => {
        onCheckChange(data.id);
    }

    const onClick = () => {
        onRemove(data.id);
    }

    return (
        <div>
            <div>
                <input type="checkbox" checked={data.checked} onChange={onChange} />
                {data.checked ? <del>{data.todo}</del> : data.todo}
                <input type="button" value="삭제" onClick={onClick} />
            </div>
        </div>
    );
};

export default TodoListItem;