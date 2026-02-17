import axios from 'axios'
import React, { useState } from 'react'

export const Apidemo3 = () => {

    const [comm, setcomm] = useState([])
    const comments = async ()=>{
        const response = await axios.get("https://dummyjson.com/comments")
        console.log(response)
        console.log(response.data.comments)
        setcomm(response.data.comments)
    }
  return (
    <div style={{textAlign:"center"}}>
    <h1>Apidemo3</h1>
    <button onClick={()=>{comments()}}>get</button>
    <table className='table table-secondary'>
        <thead>
          <tr>
            <th>Id</th>
            <th>User Id</th>
            <th>Username</th>
            <th>Full name</th>
            <th>Body</th>
            <th>Post id</th>
            <th>likes</th>
          </tr>
        </thead>
        <tbody>
          {
            comm.map((comment) => {
              return <tr key={comment.id}>
                <td>{comment.id}</td>
                <td>{comment.user.id}</td>
                <td>{comment.user.username}</td>
                <td>{comment.user.fullName}</td>
                <td>{comment.body}</td>
                <td>{comment.postId}</td>
                <td>{comment.likes}</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </div>
  )
}
