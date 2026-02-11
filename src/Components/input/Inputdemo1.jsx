import React, { useState } from 'react'

export const Inputdemo1 = () => {

    const [fname, setFname] = useState()
    const [lname, setLname] = useState()
    const [no, setNo] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [village, setVillage] = useState()
    const [dist, setDist] = useState()
    const [state, setState] = useState()
    const [country, setCountry] = useState()
    const [pin, setPin] = useState()
    const [isSubmitted, setIsSubmitted] = useState(false)
    const handleSubmit = () => {setIsSubmitted(true)}

  return (
    <div style={{textAlign:"center"}}>
    <h1>Inputdemo1</h1>
    <div> <h2>FirstName: <input type="text" onChange={(e) => setFname(e.target.value)} /></h2></div><br></br>
            <h2>LastName: <input type="text" onChange={(e) => setLname(e.target.value)} /></h2><br></br>
            <h2>MobileNo: <input type="number" onChange={(e) => setNo(e.target.value)} /></h2><br></br>
            <h2>Email: <input type="text" onChange={(e) => setEmail(e.target.value)} /></h2><br></br>
            <h2>Password: <input type="password" onChange={(e) => setPassword(e.target.value)} /></h2><br></br>
            <h2>Village: <input type="text" onChange={(e) => setVillage(e.target.value)} /></h2><br></br>
            <h2>District: <input type="text" onChange={(e) => setDist(e.target.value)} /></h2><br></br>
            <h2>State: <input type="text" onChange={(e) => setState(e.target.value)} /></h2><br></br>
            <h2>Country: <input type="text" onChange={(e) => setCountry(e.target.value)} /></h2><br></br>
            <h2>PIN: <input type="number" onChange={(e) => setPin(e.target.value)} /></h2><br></br>
            <button onClick={handleSubmit}>submit</button>

            {
        isSubmitted &&
        <div>
          <h1>Output</h1>
          <h3>First Name: {fname}</h3>
          <h3>Last Name: {lname}</h3>
          <h3>Mobile: {no}</h3>
          <h3>Email: {email}</h3>
          <h3>Password: {password}</h3>
          <h3>Village: {village}</h3>
          <h3>District: {dist}</h3>
          <h3>State: {state}</h3>
          <h3>Country: {country}</h3>
          <h3>PIN: {pin}</h3>
        </div>
          }
    </div>
  )
}
