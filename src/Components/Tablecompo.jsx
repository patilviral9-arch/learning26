import React from 'react'

export const Tablecompo = (props) => {
  return (
    <div>
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
    </div>
  )
}
