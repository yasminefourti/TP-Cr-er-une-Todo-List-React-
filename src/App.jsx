import './App.css';
import  {useState} from 'react';
import TodoList from './components/TodoList';


function App() {
  const tabTaches=[
     {title:"faire les exercices" ,id:"0" ,done:true},
     {title:"faire le tp" ,id:"1" ,done:true},
     {title:"reviser le cour" ,id:"2" ,done:false}

  ];
  const [taches]=useState(tabTaches);
  return (
    <div className="App">
      <h1>Liste des tâches</h1>
      <TodoList taches={taches} />
      
    </div>
  );
}

export default App;
