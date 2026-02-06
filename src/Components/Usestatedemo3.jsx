import React, { useState } from 'react'

export const Usestatedemo3 = () => {

const [users,setusers]=useState(["viral","patil"])
const  adduser = ()=>{
    setusers([...users,"abcd"])
}
  return (
    <div style={{textAlign:"center"}}>
        <h1>Usestatedemo3</h1>
        {
            users.map((U)=>{
            return<li>{U}</li>
            })
        }
        <button onClick={adduser}>Add</button>
    </div>
  )
}
