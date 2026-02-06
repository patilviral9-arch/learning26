import React from 'react'
import { useParams } from 'react-router-dom'

export const Teamdetails = () => {

const teamname = useParams().teamname

  return (
    <div style={{textAlign: 'centercmd'}}>
        <h1>playing....{teamname}</h1>
    </div>
  )
}
