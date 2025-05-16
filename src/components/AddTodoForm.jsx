// src/components/AddTodoForm.jsx
import React, { useState } from "react";

function AddTodoForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("moyenne");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    onAdd({
      id: Date.now().toString(),
      title,
      done: false,
      priority, // Ajout de la priorité
    });

    setTitle("");
    setPriority("moyenne");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nouvelle tâche"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="haute">Haute</option>
        <option value="moyenne">Moyenne</option>
        <option value="basse">Basse</option>
      </select>
      <button type="submit">Ajouter</button>
    </form>
  );
}

export default AddTodoForm;
