import './App.css';
import  {useState} from 'react';
import TodoList from './components/TodoList';


function App() {
  const tabTaches=[
     {title:"faire les exercices" ,id:"0" ,done:true},
     {title:"faire le tp" ,id:"1" ,done:true},
     {title:"reviser le cour" ,id:"2" ,done:false}

  ];
  const [taches, setTaches]=useState(tabTaches);


   // 🟢 Toggle "done" d'une tâche
  const toggleDone = (id) => {
    const updated = taches.map((t) =>
      t.id === id ? { ...t, done: !t.done } : t
    );
    setTaches(updated);
  };


  // 🔴 Supprimer une tâche
  const deleteTache = (id) => {
    const updated = taches.filter((t) => t.id !== id);
    setTaches(updated);
  };


  return (
    <div className="App">
      <h1>Liste des tâches</h1>
      <TodoList taches={taches}  onToggle={toggleDone} onDelete={deleteTache} />
      
    </div>
  );
}

export default App;
