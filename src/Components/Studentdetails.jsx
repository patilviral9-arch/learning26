import React from 'react'

export const Studentdetails = (props) => {
  return (
    <div style={{textAlign:"center"}}>
      <h1>Studentdetails</h1>
       <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>ROLL NO</th>
                        <th>CLASS</th>
                        <th>MARKS</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.students.map((st) => {
                            return <tr>
                                <td>{st.id}</td>
                                <td>{st.name}</td>
                                <td>{st.rollNo}</td>
                                <td>{st.class}</td>
                                <td>{st.marks}</td>
                            </tr>
                        })
                    }
                </tbody>
            </table>
    </div>
  )
}
