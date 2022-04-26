import React from 'react'

function Test1(props) {
  return (
    <div>
        {
            props.list.map(i=>(
                <h3>{i}</h3>
            ))
        }
   
    </div>
  )
}

export default Test1
