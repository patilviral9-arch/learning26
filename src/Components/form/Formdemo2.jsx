import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const Formdemo2 = () => {

  const { register, handleSubmit,formState:{errors}} = useForm()
  const [userdata,setuserdata] = useState({})
  const [issubmited,setissubmited] = useState(false)

  const onSubmit = (data) => {
    console.log(data)
    setuserdata(data)
    setissubmited(true)
  }
  console.log("errors...",errors)

  const validationschema ={

    worktimevalidator:{
      required:{
        value:true,
        message:"please enter the work time* "
               }
        },
   
   positionvalidator:{
    required:{
      value:true,
      message:"please choose one position* "
    }
   },

   Departmentvalidator:{
    required:{
      value:true,
      message:"select your department"
    }
   }

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
            {...register("company",{required:{value:true,message:"please enter the name of the company*"}})} 
          />
          {errors.company && (
          <span style={{color:"red"}}>
            {errors.company.message} 
          </span>
          )}
        </div>

        <div>
          <label>Working hours : </label>
          <input 
            type="time" 
            {...register("workingHours",validationschema.worktimevalidator)} 
          />
          {errors.workingHours && (
            <span style={{color:"red"}}>{errors.workingHours.message}
               </span>)}
        </div>

        <div>
          <h3>Position :</h3><span style={{color:"red"}}>{errors.position && errors.position.message} </span><br></br>
          Intern <input type="radio" value="Intern" {...register("position",validationschema.positionvalidator)} /><br />
          Junior Developer <input type="radio" value="Junior Developer" {...register("position",validationschema.positionvalidator)} /><br />
          Senior Developer <input type="radio" value="Senior Developer" {...register("position",validationschema.positionvalidator)} /><br />
        </div>

      
        <div>
          <label>Department : </label>
          <select {...register("department",validationschema.Departmentvalidator)}>
            <option value="">Select</option>
            <option value="IT">IT</option>
            <option value="HR">HR</option>
            <option value="Finance">Finance</option>
            <option value="Marketing">Marketing</option>
          </select>
          <span style={{color:"red"}}>{errors.department && errors.department.message}</span>
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