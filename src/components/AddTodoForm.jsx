import React, { useState } from 'react';
import { Input } from "./ui/input";
import { Button } from "./ui/button";

function AddTodoForm({ onAdd }) {
  const [newTitle, setNewTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTitle.trim() === '') return;

    const newTache = {
      id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
      title: newTitle.trim(),
      done: false
    };

    onAdd(newTache);
    setNewTitle('');
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
      <Input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        placeholder="Nouvelle tâche"
      />
      <Button type="submit">Ajouter</Button>
    </form>
  );
}

export default AddTodoForm;
