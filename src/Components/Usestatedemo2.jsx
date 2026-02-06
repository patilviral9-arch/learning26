import React, { useState } from 'react'

export const Usestatedemo2 = () => {

    const[loading,setloading]=useState(true)
    const stoploader = ()=>{
        setloading(false)
    }

  return (
    <div style={{textAlign:"center"}}>
        <h1>Usestatedemo2</h1>
        {
            loading == true && <h1>Loading....</h1>
        }
        <button onClick={stoploader}>stop</button>
    </div>
  )
}
