import React from 'react';
import './App.css';
import NavBar from './components/NavBar'; 
import InputGroup from './components/InputGroup'; 
import List from './components/ItemList';
import ItemListContainer from './components/ItemListContainer';


const App=()=> {
  const TASKS = ['Tarea 1', 'Tarea 2', 'Tarea 3', 'Tarea 4', 'Tarea 5'];
  const onAddTask = (str) => {
    alert(str);
  };  
  return (    
    
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={"Hola profe"} />
      <InputGroup
        texto="Add from functional Component"
        btnId="button-add"
        onAddTask={onAddTask}
      />      
      
      <List items={TASKS} />
    </div>
  );
}

export default App;
