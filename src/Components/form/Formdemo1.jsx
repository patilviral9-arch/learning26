import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const Formdemo1 = () => {

const {register,handleSubmit} = useForm()
const [userdata,setuserdata] = useState({})
const [issubmited,setissubmited] = useState(false)

const submithandler = (data)=>{
    console.log(data)
    setuserdata(data)
    setissubmited(true)
}

  return (
    <div style={{textAlign:"center"}}>
    <h1>Formdemo1</h1>
    <form onSubmit={handleSubmit(submithandler)}>
      <div>
        <label>Name</label>
        <input type="text" {...register("name")}></input>
      </div>

      <div>
        <label>age</label>
        <input type="text" {...register("age")}></input>
      </div>

      <div>
       <h1> <label>Gender</label></h1><br></br>
        Male<input type="radio" value="male" {...register("Gender")}></input>
        <br></br>
        Female<input type="radio" value="female" {...register("Gender")}></input>
        <br></br>
      </div>
      <div>
       <h1><label>Hobbies</label></h1><br></br>
        Gaming<input type="checkbox" value="gaming" {...register("Hobbies")}></input>
        Cricket<input type="checkbox" value="Cricket" {...register("Hobbies")}></input>
        Anime<input type="checkbox" value="Anime" {...register("Hobbies")}></input>
      </div>
      <div>
        <input type="submit"></input>
      </div>
</form>
     {
        issubmited == true && 
        <div>
        <h1>Output</h1>
        <h3>name : {userdata.name}</h3>
        <h3>age : {userdata.age}</h3>
        <h3>Gender : {userdata.Gender}</h3>
        <h3>Hobbies : {userdata.Hobbies.map((hobbs)=>{
             return <span>{hobbs} ,</span>}
        )}</h3>
        </div>
     }

    </div>
  )
}
