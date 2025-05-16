// src/App1.jsx

import './App.css';
import { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodoForm from './components/AddTodoForm';
import FilterTabs from './components/FilterTab';// ← Ajouté

function App1() {
  const tabTaches = [
    { title: "faire les exercices", id: "0", done: true },
    { title: "faire le tp", id: "1", done: true },
    { title: "reviser le cour", id: "2", done: false }
  ];

  const [taches, setTaches] = useState(tabTaches);
  const [filter, setFilter] = useState("all"); // ← Nouveau state

  const toggleDone = (id) => {
    const updated = taches.map((t) =>
      t.id === id ? { ...t, done: !t.done } : t
    );
    setTaches(updated);
  };

  const deleteTache = (id) => {
    const updated = taches.filter((t) => t.id !== id);
    setTaches(updated);
  };

  const addTache = (tache) => {
    setTaches(prev => [tache, ...prev]);
  };

  return (
    <div className="App1">
      <h1>Liste des tâches</h1>
      <AddTodoForm onAdd={addTache} />
      <FilterTabs filter={filter} setFilter={setFilter} /> {/* ← Ajouté */}
      <TodoList
        taches={taches}
        onToggle={toggleDone}
        onDelete={deleteTache}
        filter={filter} // ← Ajouté
      />
    </div>
  );
}

export default App1;
