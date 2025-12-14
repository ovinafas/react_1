import { useState } from "react";
import Hook from "./components/hook";

import './App.css';
import Newdata from "./components/newdata";
import Books from "./components/books";
// import { useEffect } from "react/cjs/react.production";
import { useEffect } from "react";





function App() {

  const name="ovinafas";
  const[text, setText]=useState("object is ...")

  const arr = [
                {name:'ovi' , family:'aghaei' ,age:20},
                {name:'ali' , family:'agh' , age:30}
  ]

  if(arr){
    <div>Loading...</div>
  }


  const handlebtn = ()=>{
     console.log("ok useEffect");
  }

  useEffect(()=>{
    // console.log("good");
    // handlebtn();

  },[text])

  return (
    <div className="App">

     {!setText ? "welcome"  :  "goodbye"}

      <div>
            {
              arr.map( (items , index)=>{
                return(
                      <Newdata  key={index}  items={items} />
                )
              }

              )
            }
          
      </div>
     
     <h2   className='test'>{name}</h2>
     <Hook />
     <Books  namebooks="Learning React"  writer="ostad"  year="2024">{text}</Books>
     <button  onClick={handlebtn}>  Effect  دکمه </button>
    </div>
  );
}

export default App;
