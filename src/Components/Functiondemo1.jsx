import React from 'react'
import { Cardcomponent } from './Cardcomponent'

export const Functiondemo1 = () => {

const test =()=>{
    alert("test function called....")
}

const test2 =(x)=>{
    alert("value of x "+x)
}

  return (
    <div style={{textAlign:'center'}}>
        <h1>Functiondemo1</h1>
        <button onClick={test}>click</button>
        <button onClick={()=>{test2(100)}}>click2</button>
        <Cardcomponent title="FUN DEMO 1" description="fun demo 1"></Cardcomponent>
    </div>
  )
}
