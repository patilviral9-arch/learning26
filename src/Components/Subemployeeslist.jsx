import React from 'react'
import { Tablecompo } from './Tablecompo'

export const Subemployeeslist = (props) => {

 console.log("sub employees props",props)

  return (
    <div style={{textAlign:"center"}}>
    <h1>Sub employees list</h1>
    <h1>{props.title}</h1>
    <Tablecompo employees={props.employees}></Tablecompo>
    </div>
  )
}
