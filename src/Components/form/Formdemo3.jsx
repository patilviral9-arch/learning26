import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const Formdemo3 = () => {

const {register,handleSubmit}=useForm()
const [userdata, setuserdata] = useState({})
const [issubmited, setissubmited] = useState(false)

const onsubmit =(data)=>{
    console.log(data)
    setuserdata(data)
    setissubmited(true)
}

  return (
    <div style={{textAlign:"center"}}>
    <h1>Formdemo3</h1>
    <form onSubmit={handleSubmit(onsubmit)}>
        <div>
          <label>Name : </label>
          <input type="text" {...register("name")} />
        </div>

        <div>
          <label>Age : </label>
          <input type="number" {...register("age")} />
        </div>

        <div>
          <label>Phone : </label>
          <input type="text" maxLength="10" placeholder="10 digit number" {...register("phone", {pattern: /^[0-9]{10}$/ })} />
        </div>

        <div>
          <label>Email : </label>
          <input type="email" {...register("email")} />
        </div>

        <div>
          <label>Password : </label>
          <input type="password" {...register("password")} />
        </div>

        <div>
          <h3>Skills :</h3>
          React <input type="checkbox" value="React" {...register("skills")} /><br />
          Node <input type="checkbox" value="Node" {...register("skills")} /><br />
          MongoDB <input type="checkbox" value="MongoDB" {...register("skills")} /><br />
          Java <input type="checkbox" value="Java" {...register("skills")} /><br />
        </div>

        <div>
          <label>Passport Photo : </label>
          <input type="file" accept="image/*" {...register("photo")} />
        </div>

          <br />
        <button type="submit">Submit</button>
    </form>

    {
        issubmited ==true && 
         <div>
          <h1>Output</h1>
          <h3>Name : {userdata.name}</h3>
          <h3>Age : {userdata.age}</h3>
          <h3>Phone : {userdata.phone}</h3>
          <h3>Email : {userdata.email}</h3>
          <h3> Skills : {userdata.skills?.map((skill) => {
              return <span> {skill}, </span>})} </h3>
          <h3> Photo : {userdata.photo && userdata.photo[0]?.name} </h3>
        </div>
      }

    </div>
  )
}
