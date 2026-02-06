import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixSports = () => {

var teams =[
  {teamid:1,name:'CSK'},
  {teamid:2,name:'MI'},
  {teamid:3,name:'GT'},
  {teamid:4,name:'RCB'},
  {teamid:5,name:'KKR'},
  {teamid:6,name:'RR'},
  {teamid:7,name:'SRH'},
  {teamid:8,name:'DC'},
  {teamid:9,name:'PBKS'},
  {teamid:10,name:'LSG'},
]

  return (
    <div style={{textAlign:"center"}}>
        <h1>Netflix Sports</h1>
     
     <table className='table'>
      <thead>
        <tr>
          <th>No.</th>
          <th>Name</th>
        </tr>
      </thead>
        
      <tbody>
      {
        teams.map((team)=>{
          return <tr>
            <td>{team.teamid}</td>
            <td><Link to={`/teamdetails/${team.name}`}>
            {team.name}
            </Link></td>
          </tr>
        })
      }
      </tbody>  

     </table>
    </div>
  )
}
