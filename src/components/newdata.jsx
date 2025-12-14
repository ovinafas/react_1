import React from 'react'

const Newdata = (props) => {
    console.log(props);
  return (
    <div>
        <ul  className='props-name'>
           <li>name : {props.items.name} ,  age : {props.items.age}</li>
        </ul>   
      
    </div>
  )
}

export default Newdata
