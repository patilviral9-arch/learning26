import React from 'react'
import { Employeeslist } from './Employeeslist'

export const Employees = () => {

  var title ="Employees app";

  var company = {
    name :"tcs",
    year : 2002,
  };

  var employess =[
    {id : 101, name :"viral",age : 23},
    {id : 102, name :"sandip",age : 22},
    {id : 103, name :"Rajan",age : 20},
    {id : 104, name :"Urvesh",age : 21},
    {id : 105, name :"Kirtan",age : 22},
  ];

  return (
    <div style={{textAlign:"center"}}> 
        <h1>Employees</h1>
        <Employeeslist title={title} company={company} employees={employess}></Employeeslist>
    </div>
  )
}
