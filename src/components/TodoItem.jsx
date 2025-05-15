import React from 'react';

function TodoItem({tache}) {
  return (
    
    <li>
        {tache.title}  {tache.done ? "✔️" : "❌"}
            
        <button>Modifier</button>
        <button>Supprimer</button>
    </li>
    
  );
}

export default TodoItem;