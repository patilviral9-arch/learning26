import React from 'react'
import { useParams } from 'react-router-dom'

export const Watch = () => {

    const moviename = useParams().name

  return (
    <div style={{textAlign:"center"}}>
        <h1>Watching.....{moviename}</h1>
    </div>
  );
};
