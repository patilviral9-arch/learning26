import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Omdbsearch = () => {

    const [movies, setmovies] = useState([])
    const [query, setquery] = useState("")

    const searchmovies =async()=>{
        if (!query) return alert("Type something first")
        const response = await axios.get(`http://www.omdbapi.com/?apikey=9ff91758&s=${query}`)
        console.log(response)
        console.log(response.data)
        setmovies(response.data.Search || [])
    }
  return (
    <div style={{textAlign:"center"}}>
    <h1>Omdbsearch</h1>
    <input type="text" placeholder="Search movies..." value={query} onChange={(e) => setquery(e.target.value)}></input>
    <button onClick={()=>{searchmovies()}}>Search </button>
     <div className="container">
                <div className="row">
                    {
                        movies.map((movie) => {
                            return (
                                <div key={movie.imdbID} className="col-sm-12  col-md-6 col-lg-4 p-3">
                                    <Link to={`/movie/${movie.imdbID}`}>
                                        <div className="card" style={{ width: "18rem" }}>
                                            <img
                                                className="card-img-top"
                                                src={movie.Poster}
                                                alt="Card image cap"
                                            />
                                            <div className="card-body">
                                                <h5 className="card-title">{movie.Title}</h5>
                                                <p className="card-text">Year : {movie.Year}</p>
                                                <p className="card-text">Type : {movie.Type}</p>                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
    </div>
  )
}
