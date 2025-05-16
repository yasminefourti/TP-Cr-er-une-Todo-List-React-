import React from 'react';
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";

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
        <Checkbox checked={tache.done} onCheckedChange={() => onToggle(tache.id)} />
        <span>{tache.title}</span>
      </div>
      <div style={{ display: 'flex', gap: '8px' }}>
        <Button variant="outline" onClick={() => alert("modifier tache")}>Modifier</Button>
        <Button variant="destructive" onClick={() => onDelete(tache.id)}>Supprimer</Button>
      </div>
    </li>
  );
}

export default TodoItem;
