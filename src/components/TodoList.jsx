// src/components/TodoList.jsx
import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ taches, onToggle, onDelete, filter }) {
  const filteredTaches = taches.filter(todo => {
    if (filter === "all") return true;
    if (filter === "done") return todo.done;
    if (filter === "todo") return !todo.done;
  });

  return (
    <ul>
      {filteredTaches.map((tache) => (
        <TodoItem
          key={tache.id}
          tache={tache}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default TodoList;
