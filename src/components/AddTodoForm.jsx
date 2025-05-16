import React, { useState } from 'react';
import { Input } from "./ui/input";
import { Button } from "./ui/button";

function AddTodoForm({ onAdd }) {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('moyenne'); // default
  const [dueDate, setDueDate] = useState(''); // nouveau champ

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    const newTask = {
      id: Date.now().toString(),
      title: title.trim(),
      done: false,
      priority,
      dueDate, // ajout de la date
    };

    onAdd(newTask);
    setTitle('');
    setPriority('moyenne');
    setDueDate('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
      <Input
        type="text"
        placeholder="Nouvelle tâche"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="haute">Haute priorité</option>
        <option value="moyenne">Priorité moyenne</option>
        <option value="basse">Basse priorité</option>
      </select>

      <Input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <Button type="submit">Ajouter</Button>
    </form>
  );
}

export default AddTodoForm;
