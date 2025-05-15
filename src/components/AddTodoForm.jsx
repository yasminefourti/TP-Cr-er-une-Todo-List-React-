import React, { useState } from 'react';

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

    onAdd(newTache); // Appelle la fonction transmise par App
    setNewTitle(''); // Réinitialise le champ
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px', display: 'flex', gap: '10px' }}>
      <input
        type="text"
        value={newTitle}
        onChange={(e) => setNewTitle(e.target.value)}
        placeholder="Nouvelle tâche"
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default AddTodoForm;
