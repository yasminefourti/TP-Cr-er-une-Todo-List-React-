import React from 'react'
import TodoItem from './TodoItem';

function TodoList({taches,  onToggle, onDelete}) {
  return (
    
    <ul>
        {taches.map((tache) => (
            <TodoItem key={tache.id} tache={tache} onToggle={onToggle} onDelete={onDelete}/>
        ))}
    </ul>
   
  );
}

export default TodoList;