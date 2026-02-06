import React from 'react'
import { Link } from 'react-router-dom';

var Movies = [
  {movieId:1,moviename:"kill"},
  {movieId:2,moviename:"Dhurandar"},
  {movieId:3,moviename:"Raid-2"},
  {movieId:4,moviename:"Special-26"},
  {movieId:5,moviename:"Iron-man"},
  {movieId:6,moviename:"Iron-man-2"},
  {movieId:7,moviename:"Iron-man-3"},
];

export const NetflixMovies = () => {
  return (
    <div style={{textAlign:"center"}}>
    <h1>NetflixMovies</h1>
    {
      Movies.map((movie)=>{
        return <li>
            <Link to={`/Watch/${movie.moviename}`}>{movie.moviename}</Link>
        </li>
      })
    }
    </div>
  );
};

