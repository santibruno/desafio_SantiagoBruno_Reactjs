import React from 'react';
import './App.css';
import NavBar from './components/NavBar'; 
//import InputGroup from './components/InputGroup'; 
//import List from './components/ItemList';
import ItemListContainer from './components/ItemListContainer';
import { useEffect, useState } from 'react';
/*<InputGroup
        texto="Add from functional Component"
        btnId="button-add"
        onAddTask={onAddTask}
      />      
      
      <List items={TASKS} /> */

const App=()=> {

  return (    
    
    <div className="App">
      <NavBar/>
      <ItemListContainer />
      
    </div>
  );
}

export default App;
