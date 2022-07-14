import React from 'react';
import './App.css';
import NavBar from './components/navBar/NavBar'; 
import ItemListCatalogo from './components/ItemListCatalogo';
const App=()=> {

  return (    
    
    <div className="App">
      <NavBar/>
      <ItemListCatalogo />
      
    </div>
  );
}

export default App;
