import React, { useState } from 'react'

export const Usestatedemo1 = () => {

const [count,setCount]=useState(0)

const incresecount = ()=>{

 setCount(count+1)
 console.log(`count after increse`,count)    
}

  return (
    <div style={{textAlign:"center"}}>
        <h1>Usestatedemo1</h1>
        <h1>count : {count}</h1>
        <button onClick={incresecount}>click</button>
    </div>
  )
}
