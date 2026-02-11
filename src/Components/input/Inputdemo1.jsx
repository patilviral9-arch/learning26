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

  return (
    <div style={{textAlign:"center"}}>
    <h1>Inputdemo1</h1>
    <div> <h2>FirstName: <input type="text" onChange={(e) => setFname(e.target.value)} />{fname}</h2></div><br></br>
            <h2>LastName: <input type="text" onChange={(e) => setLname(e.target.value)} />{lname}</h2><br></br>
            <h2>MobileNo: <input type="number" onChange={(e) => setNo(e.target.value)} />{no}</h2><br></br>
            <h2>Email: <input type="text" onChange={(e) => setEmail(e.target.value)} />{email}</h2><br></br>
            <h2>Password: <input type="password" onChange={(e) => setPassword(e.target.value)} />{password}</h2><br></br>
            <h2>Village: <input type="text" onChange={(e) => setVillage(e.target.value)} />{village}</h2><br></br>
            <h2>District: <input type="text" onChange={(e) => setDist(e.target.value)} />{dist}</h2><br></br>
            <h2>State: <input type="text" onChange={(e) => setState(e.target.value)} />{state}</h2><br></br>
            <h2>Country: <input type="text" onChange={(e) => setCountry(e.target.value)} />{country}</h2><br></br>
            <h2>PIN: <input type="number" onChange={(e) => setPin(e.target.value)} />{pin}</h2><br></br>
    </div>
  )
}
