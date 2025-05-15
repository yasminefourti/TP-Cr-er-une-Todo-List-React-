import React from 'react'
import TodoItem from './TodoItem';

function TodoList({taches}) {
  return (
    
    <ul>
        {taches.map((tache) => (
            <TodoItem key={tache.id} tache={tache} />
        ))}
    </ul>
   
  );
}

export default TodoList;