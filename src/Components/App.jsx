import { useState } from 'react';
import '../Styles/App.css';
import Cards from './Cards';

function App() {
  const [cards, setCards] = useState([{
    id: 1711312689020,
    name: 'Untitled',
    todos: [{
      id: 1711312835953,
      task: 'Sample task',
      isDone: false
    }]
  }]);

  const cardActions = (action, id = null, name=null) => {
    if (action == 'add-card') {
      setCards([...cards, {
        id: (new Date).getTime(),
        name: 'Untitled',
        todos: []
      }])
    }
    else if (action == 'delete-card') {
      setCards([...(cards.filter((card) => (card.id != id)))]);
    }
    else{
      let newCards = cards.map((card)=>{
        if(card.id == id){
          card.name = name
        }
        return card
      })
      setCards(newCards)
    }
  }

  const todoAction = (action, cardId,todo=null, todoId = null) => {
    if (action == 'new-todo') {
      let newCards = [...cards]
      newCards.map((card) => {
        if (card.id == cardId) {
          card.todos = [todo, ...(card.todos)]
        }
      })
      setCards(newCards)
    }
    else if (action == 'mark-done-todo') {
      let newCards = [...cards]
      newCards.map((card)=>{
        if(card.id == cardId){
          card.todos.map((todo)=>{
            if(todo.id == todoId){
              todo.isDone = !todo.isDone
            }
          })
        }
      });
      setCards(newCards)
    }
    else if (action == 'delete-todo') {
      let newCards = [...cards]
      newCards.map((card)=>{
        if(card.id == cardId){
          card.todos = card.todos.filter((todo)=>(todo.id!=todoId))
        }
      })
      setCards(newCards)
    }
  }

  return (
    <Cards cards={cards} cardActions={cardActions} todoAction={todoAction}  />
  );
}

export default App;
