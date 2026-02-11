import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div>
         <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="/" style={{color:"red"}}>
          NETFLIX
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            {/* <li class="nav-item active">
              <Link class="nav-link" to="/NetflixHome">
                Home
              </Link>
            </li> */}
            {/* <li class="nav-item">
              <Link class="nav-link" to="/NetflixMovies">
                Movies
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/NetflixShows">
                Shows
              </Link>
            </li>
             <li class="nav-item">
              <Link class="nav-link" to="/NetflixTv">
                Tv
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/NetflixSports">
                Sports
              </Link>
            </li>
             <li class="nav-item">
              <Link class="nav-link" to="/NetflixAccount">
                Account
              </Link>
              </li>
              <li class="nav-item">
              <Link class="nav-link" to="/Usestatedemo1">
                Usestatedemo1
              </Link>
              </li>
              <li class="nav-item">
              <Link class="nav-link" to="/Functiondemo1">
                Functiondemo1
              </Link>
              </li>
              <li class="nav-item">
              <Link class="nav-link" to="/Usestatedemo2">
                Usestatedemo2
              </Link>
              </li>
              <li class="nav-item">
              <Link class="nav-link" to="/Usestatedemo3">
                Usestatedemo3
              </Link>
              </li> */}
              <li class="nav-item">
              <Link class="nav-link" to="/Employees">
                Employees
              </Link>
              </li>
              <li class="nav-item">
              <Link class="nav-link" to="/Student">
                Students
              </Link>
              </li>
              <li class="nav-item">
              <Link className="nav-link" to="/Inputdemo1">
                inputdemo1
              </Link>
              </li>
               <li class="nav-item">
              <Link className="nav-link" to="/Inputdemo2">
               inputdemo2
              </Link>
              </li>
              <li class="nav-item">
              <Link className="nav-link" to="/Formdemo1">
               formdemo1
              </Link>
              </li>
              <li class="nav-item">
              <Link className="nav-link" to="/Formdemo2">
               formdemo2
              </Link>
              </li>
              <li class="nav-item">
              <Link className="nav-link" to="/Formdemo3">
               formdemo3
              </Link>
              </li>
          </ul>
        </div>
      </nav>
    </div>
  )
}
