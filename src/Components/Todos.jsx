import React, { useState } from 'react';
import DeleteIcon from './DeleteIcon';
import '../Styles/Todos.css';

const Todos = ({ todos, cardId, todoAction }) => {
    const [val, setVal] = useState('')

    const handleKeydown = (e) => {
        let id = (new Date()).getTime()
        if (e.keyCode == '13') {
            todoAction('new-todo',cardId, {
                id: id,
                task: val,
                isDone: false
            });
            setVal('')
        }
    }
    
    return (
        <>
            <input type="text" id='newTodo' className="todo-new" onKeyDown={(e) => { handleKeydown(e) }} value={val} onChange={(e) => setVal(e.target.value)} placeholder='Add a Task' />
            {
                todos.map((todo) => (
                    <div className="todo-item">
                        <div className="todo-content">
                            <input className="todo-item-checkbox" type="checkbox" id={todo.id} onChange={() => todoAction('mark-done-todo', cardId, null,todo.id)} />
                            <label className={todo.isDone ? 'todo-item-label-done' : 'todo-item-label'} htmlFor={todo.id}>{todo.task}</label>
                        </div>
                        <div className='todo-delete'>
                            <i onClick={() => todoAction('delete-todo', cardId,null, todo.id)}><DeleteIcon color={'grey'} /></i>
                        </div>
                    </div>
                ))
            }
        </>

    )
}

export default Todos;