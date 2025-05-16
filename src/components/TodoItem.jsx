import React from 'react';

function TodoItem({ tache, onToggle, onDelete }) {
  const itemStyle = {
    textDecoration: tache.done ? 'line-through' : 'none',
    color: tache.done ? 'gray' : 'black',
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    marginBottom: '8px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '6px',
    justifyContent: 'space-between'
  };

  return (
    <li style={itemStyle}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <input
          type="checkbox"
          checked={tache.done}
          onChange={() => onToggle(tache.id)}
        />
        <span>{tache.title}</span>
      </div>
      <div style={{ display: 'flex', gap: '8px' }}>
        <button onClick={() => alert("modifier tache")}>Modifier</button>
        <button onClick={() => onDelete(tache.id)}>Supprimer</button>
      </div>
    </li>
  );
}

export default TodoItem;
