import React from 'react'
import { Link } from 'react-router-dom'

export const NetflixShows = () => {
  return (
    <div style={{textAlign:"center"}}>
    <h1>NetflixShows</h1>
    <ul>
      <li>
        <Link to="/watch/Money-heist">Money Heist</Link>
      </li>
      <li>
        <Link to="/watch/Breaking-Bad">Breaking Bad</Link>
      </li>
      <li>
        <Link to="/watch/Strenger-Things">Stranger Things</Link>
      </li>
    </ul>
    </div>
  )
}
