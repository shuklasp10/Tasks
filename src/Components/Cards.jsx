import React, { useState } from 'react';
import '../Styles/Cards.css';
import Todos from './Todos';
import DeleteIcon from './DeleteIcon';

const Cards = ({ cards, cardActions, todoAction }) => {
    const [edit,setEdit] = useState(false)

    const handleRename = (e,id) =>{
        cardActions('rename-card',id,e.target.value)
        console.log(cards)
    }

    return (
        <div className='card-container'>
            {
                cards.map((card) => (
                    <div className="card" key={card.id}>
                        <div className="card-header">
                            <h2 className="card-title" contentEditable={edit} onChange={(e)=>handleRename(e,card.id)} onDoubleClick={()=>setEdit(true)} onBlur={()=>setEdit(false)}>{card.name}</h2>  
                            <i onClick={()=>cardActions('delete-card',card.id)}><DeleteIcon color={'red'}/></i>
                        </div>
                        <div className="card-body">
                            <Todos todos={card.todos} cardId = {card.id} todoAction={todoAction} />
                        </div>
                    </div>
                ))
            }
            <div className="card card-new">
                <button onClick={()=>cardActions('add-card')}>Add</button>
            </div>
        </div>
    )
}

export default Cards
