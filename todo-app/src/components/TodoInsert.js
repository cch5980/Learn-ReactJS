import React, { useState } from 'react';

const TodoInsert = ({onInsert}) => {
    const [value, setValue] = useState('');
    const onChange = (e) => {
        console.log(e.target.value);
        setValue(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        onInsert(value);
        setValue(''); 
    }

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" value={value} onChange={onChange} />
                <button type="submit">할일 추가</button>
            </form>
        </div>
    );
};

export default TodoInsert;