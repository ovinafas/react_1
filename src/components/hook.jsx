import React from 'react'

import { useState } from "react";

const Hook = () => {

    const[age , setAge]=useState(0);

    const increasefunc=()=>{

          setAge(age+1)
    }
  return (
    <div>
        <h2>{age}</h2>
        <button   onClick={increasefunc} className='btn'>increase</button>
        <button  onClick={
                                ()=>{
                                  setAge(age-1)
                                }
        }>decrease</button>
      
    </div>
  )
}

export default Hook
