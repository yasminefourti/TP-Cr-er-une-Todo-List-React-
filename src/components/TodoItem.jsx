import React from 'react';

function TodoItem({tache ,onToggle, onDelete}) {

    const itemStyle = {
        textDecoration: tache.done ? 'line-through' : 'none',
        color: tache.done ? 'gray' : 'black',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        marginBottom: '8px'
    };

  return (
    
    
    <li>
        <input type="checkbox" checked={tache.done}  onChange={() => onToggle(tache.id)} />
        <span>{tache.title}</span>   
        <button onClick={() => alert("modifier tache")}  >Modifier</button>
        <button onClick={() => onDelete(tache.id)}>Supprimer</button>
    </li>
    
  );
}

export default TodoItem;