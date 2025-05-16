import React from 'react';
import { Button } from "./ui/button";
import { Checkbox } from "./ui/checkbox";

// Composant pour afficher la priorité
function PriorityBadge({ priority }) {
  const style = {
    padding: "2px 6px",
    borderRadius: "5px",
    color: "white",
    fontSize: "0.8rem",
  };

  if (priority === "haute") return <span style={{ ...style, background: "red" }}>Haute</span>;
  if (priority === "moyenne") return <span style={{ ...style, background: "orange" }}>Moyenne</span>;
  if (priority === "basse") return <span style={{ ...style, background: "green" }}>Basse</span>;
  return null;
}

function TodoItem({ tache, onToggle, onDelete }) {
  const isLate = tache.dueDate && new Date(tache.dueDate) < new Date();

  const itemStyle = {
    textDecoration: tache.done ? 'line-through' : 'none',
    color: tache.done ? 'gray' : 'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '10px',
    marginBottom: '8px',
    padding: '10px',
    border: '1px solid #ddd',
    borderRadius: '6px',
    backgroundColor: isLate ? '#ffe6e6' : 'white' // fond rouge clair si en retard
  };

  return (
    <li style={itemStyle}>
      <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <Checkbox checked={tache.done} onCheckedChange={() => onToggle(tache.id)} />
          <span>{tache.title}</span>
          <PriorityBadge priority={tache.priority} />
        </div>
        {tache.dueDate && (
          <div style={{ marginLeft: "30px", fontSize: "0.8rem", color: isLate ? "red" : "gray" }}>
            Échéance : {new Date(tache.dueDate).toLocaleDateString()}
            {isLate && <span style={{ marginLeft: '10px', color: 'red' }}>En retard</span>}
          </div>
        )}
      </div>

      <div style={{ display: 'flex', gap: '8px' }}>
        <Button variant="outline" onClick={() => alert("modifier tache")}>Modifier</Button>
        <Button variant="destructive" onClick={() => onDelete(tache.id)}>Supprimer</Button>
      </div>
    </li>
  );
}

export default TodoItem;
