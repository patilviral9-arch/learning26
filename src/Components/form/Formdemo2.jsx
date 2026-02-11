import React from 'react'
import { useForm } from 'react-hook-form'

export const Formdemo2 = () => {

const {register,handleSubmit}=useForm()

  return (
    <div style={{textAlign:"center"}}>
    <h1>Formdemo2</h1>
      <div>
        <label>company :  </label>
        <input type="text" placeholder='name of company' {...register("company")}></input>
      </div>
      <div>
        <label>Working hours : </label>
        <input type="time" {...register("Working Hours")}></input>
      </div>
      <div>
      <h3><label>postion :</label></h3><br></br>
        intern <input type="radio" value="Intern" {...register("Postion")}></input><br></br>
        junier devloper <input type="radio" value="junier devloper " {...register("Postion")}></input><br></br>
        senior devloper <input type="radio" value="senior devloper" {...register("Postion")}></input><br></br>
      </div>
    </div>
  )
}

