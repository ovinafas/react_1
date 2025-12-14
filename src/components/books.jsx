import React from 'react'

function Books(props) {
  return (
    <div>
        <ul>
            <li>{props.namebooks}</li>  
            <li>{props.writer}</li>      
            <li>{props.year}</li>
            <li>{props.children}</li>


        </ul>
      
    </div>
  )
}

export default Books
