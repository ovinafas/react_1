import React from 'react'

import { useState } from "react";

const Hook = () => {

    const[age , setAge]=useState(0);
    const[inputvalue , setInputvalue]=useState();

    const increasefunc=()=>{

          setAge(age+1)
    }

    const inputfunction = (event)=>{

      console.log(event.target.value);              //dr consol  chap mekonad
      setInputvalue(event.target.value);            // dr  ui   chap  mekonad


    }


  return (
    <div>
        <h2>{age}</h2>
        <button   onClick={increasefunc} className='btn'>increase</button>
        <button  onClick={
                                ()=>{
                                  setAge(age-1)
                                }
        }
        >decrease</button>

        <input    onChange={inputfunction}  type="text"   id='inp' />
        <span>{inputvalue}</span>
    </div>
  )
}

export default Hook
