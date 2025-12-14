import { useState } from "react";
import Hook from "./components/hook";

import './App.css';



function App() {

  const name="ovinafas"
  return (
    <div className="App">
     
     <h2   className='test'>{name}</h2>
     <Hook />
    </div>
  );
}

export default App;
