import { useState } from "react";
import Hook from "./components/hook";

import './App.css';
import Newdata from "./components/newdata";
import Books from "./components/books";
// import { useEffect } from "react/cjs/react.production";
import { useEffect } from "react";
import axios from "axios";





function App() {
  const[fetchApi , setFetchApi]=useState("")
 
  const[inputvalue,setInputvalue]=useState("");
  const[listitem,setListitem]=useState(["ovi"]);
  const name="ovinafas";
  const[text, setText]=useState("true")

  // const arr = [
  //               {name:'ovi' , family:'aghaei' ,age:20},
  //               {name:'ali' , family:'agh' , age:30}
  // ]

  // if(arr){
  //   <div>Loading...</div>
  // }


  // const handlebtn = ()=>{
  //    console.log("ok useEffect");
  // }

  const handlechange=(event)=>{
    // console.log(event.target.value);
    setInputvalue(event.target.value);


  }

  const newListitem = ()=>{
    //  console.log("ok");
    setListitem([...listitem,inputvalue])
    console.log(listitem);
  }

  // useEffect(()=>{
  //   // console.log("good");
  //   // handlebtn();
  //   return ()=>{
  //     console.log("unmount is done");

  //   }})

  const fetchapi=()=>{
    //  console.log("fetch");
    axios.get("https://catfact.ninja/fact").then(function(res){
      // console.log(res.data.fact);
      setFetchApi(res.data.fact);
    })
    .catch(function(err){
      console.log(err);
    })
    
  }

  useEffect(()=>{
    fetchapi();

  },[fetchApi])

  return (
    <div className="App">

      <button  onClick={fetchapi}  style={{display:"block" , margin:"auto"}}>fetch api</button>
      <span>{fetchApi}</span>

      <input onChange={handlechange}  type="text"  placeholder="welcome ovinafas aghaei"  style={{display:"block",padding:"3px", margin:"auto"}}/>
      <button  onClick={newListitem}>اضافه کردن به  لیست </button>

      {/* {listitem.map((item,index)=>{
          return(
            <ul>
            <li key={index}>
              {item}
            </li>
            </ul>
          )})
      } */}
{/* 
     {!setText ? "welcome"  :  "goodbye"} */}
      {/* <div>
            {
              arr.map( (items , index)=>{
                return(
                      <Newdata  key={index}  items={items} />
                )
              }
              )
            }
          
      </div> */}
     
     {/* <h2   className='test'>{name}</h2> */}
     {/* <Hook /> */}
     {/* <Books  namebooks="Learning React"  writer="ostad"  year="2024">{text}</Books> */}
     {/* <button  onClick={handlebtn}>  Effect  دکمه </button> */}
    </div>
  );
}

export default App;
