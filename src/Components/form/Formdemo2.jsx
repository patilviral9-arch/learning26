import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const Formdemo2 = () => {

  const { register, handleSubmit } = useForm()
  const [userdata,setuserdata] = useState({})
  const [issubmited,setissubmited] = useState(false)

  const onSubmit = (data) => {
    console.log(data)
    setuserdata(data)
    setissubmited(true)
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Formdemo2</h1>

      <form onSubmit={handleSubmit(onSubmit)}>

        <div>
          <label>Company : </label>
          <input 
            type="text" 
            placeholder='Name of company' 
            {...register("company")} 
          />
        </div>

        <div>
          <label>Working hours : </label>
          <input 
            type="time" 
            {...register("workingHours")} 
          />
        </div>

        <div>
          <h3>Position :</h3>
          Intern <input type="radio" value="Intern" {...register("position")} /><br />
          Junior Developer <input type="radio" value="Junior Developer" {...register("position")} /><br />
          Senior Developer <input type="radio" value="Senior Developer" {...register("position")} /><br />
        </div>

      
        <div>
          <label>Department : </label>
          <select {...register("department")}>
            <option value="">Select</option>
            <option value="IT">IT</option>
            <option value="HR">HR</option>
            <option value="Finance">Finance</option>
            <option value="Marketing">Marketing</option>
          </select>
        </div>

        <div>
          <label>Salary : </label>
          <input 
            type="number" 
            placeholder="Expected salary" 
            {...register("salary")} 
          />
        </div>


        <br />
        <button type="submit">Submit</button>

      </form>
     
     {
          issubmited === true &&
          <div>
            <h1>Output</h1>
            <h3>Company : {userdata.company}</h3>
            <h3>Working Hours : {userdata.workingHours}</h3>
            <h3>Position : {userdata.position}</h3>
            <h3>Department : {userdata.department}</h3>
            <h3>Salary : {userdata.salary}</h3>
          </div>
            }

    </div>
  )
}