import React from 'react'
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
  MdCheckCircleOutline,
} from 'react-icons/md'
import cn from 'classnames'
import './TodoListItem.scss'

const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo
  return (
    <div className='TodoListItem'>
      <div className={cn('checkbox', {checked})} onClick={() => onToggle(id)} >
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div className='remove' onClick={() => onRemove(id)}>
        <MdCheckCircleOutline />
      </div>
    </div>
  
  )
}

export default TodoListItem