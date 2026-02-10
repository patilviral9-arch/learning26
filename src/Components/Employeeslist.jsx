import React from 'react'
import { Subemployeeslist } from './Subemployeeslist'

export const Employeeslist = (props) => {

console.log("Emplist",props)

  return (
    <div style={{textAlign:"center"}}>
       <h1>Employeeslist</h1>
       <h1>{props.title}</h1>
       <h1>{props.company.name}</h1>
       <h1>{props.company.year}</h1>
       <table className='table'>
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>AGE</th>
            </tr>
          </thead>
          <tbody>
            {
              props.employees.map((emp)=>{
                return <tr>
                  <td>{emp.id}</td>
                  <td>{emp.name}</td>
                  <td>{emp.age}</td>
                </tr>
              })
            }
          </tbody>
        </table>
        <Subemployeeslist title={props.title} employees={props.employees}></Subemployeeslist>
    </div>
  )
}
