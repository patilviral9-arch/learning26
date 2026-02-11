import React, { useState } from 'react'

export const Inputdemo2 = () => {

   const [name,setname] = useState("")
   const [gender, setgender] = useState("")
   const [country, setcountry] = useState("")
   const [state, setState] = useState("")
   const [isSubmitted, setIsSubmitted] = useState(false)

   const namehandler =(event)=>{
    setname(event.target.value)
   }

   const genderhandler =(event)=>{
    setgender(event.target.value)
   }

   const statesData = {
    india: ["Gujarat", "Maharashtra", "Rajasthan", "Punjab"],
    usa: ["California", "Texas", "Florida", "New York"],
    china: ["Beijing", "Shanghai", "Guangdong"]
  }

  const handleSubmit = () => {
    setIsSubmitted(true)
  }

  return (
    <div style={{textAlign:"center"}}>
    <h1>Inputdemo2</h1>
    <div>
            <label>NAME:</label>
            <input type='text' onChange={(event)=>{namehandler(event)}}></input>
        </div>
        <div>
            <label>GENDER</label><br></br>
            MALE : <input type='radio' value="male" name='gender' onChange={(event)=>{genderhandler(event)}}></input>
            <br></br>
            FEMALE : <input type='radio' value="female" name='gender' onChange={(event)=>{genderhandler(event)}}></input>
        </div>
        <div>
            <label>COUNTRY</label>
            <select onChange={(event)=>{setcountry(event.target.value)
                setState("")
            }}>
               <option value="">Select Country</option>
                <option value="india">INDIA</option>
                <option value="usa">USA</option>
                <option value="china">CHINA</option>
            </select>
        </div>

     {
        country && (
          <div>
            <label>State</label>
            <select onChange={(e) => setState(e.target.value)}>
              <option value="">Select State</option>
              {
                statesData[country].map((st) => {
                  return <option key={st} value={st}>{st}</option>
                })
              }
            </select>
          </div>
        )
      }  
       <br />
      <button onClick={handleSubmit}>Submit</button>

       {
        isSubmitted &&
        <div>
          <h1>Output</h1>
          <h3>Name: {name}</h3>
          <h3>Gender: {gender}</h3>
          <h3>Country: {country}</h3>
          <h3>State: {state}</h3>
        </div>
      }
    </div>
  )
}
