// src/components/FilterTabs.jsx
import React from 'react';

function FilterTabs({ filter, setFilter }) {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <button
        onClick={() => setFilter('all')}
        style={{ fontWeight: filter === 'all' ? 'bold' : 'normal', marginRight: 8 }}
      >
        Toutes
      </button>
      <button
        onClick={() => setFilter('todo')}
        style={{ fontWeight: filter === 'todo' ? 'bold' : 'normal', marginRight: 8 }}
      >
        À faire
      </button>
      <button
        onClick={() => setFilter('done')}
        style={{ fontWeight: filter === 'done' ? 'bold' : 'normal' }}
      >
        Terminées
      </button>
    </div>
  );
}

export default FilterTabs;
