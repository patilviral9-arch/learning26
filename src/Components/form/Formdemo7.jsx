import React from 'react'
import { useForm } from 'react-hook-form'

export const Formdemo7 = () => {

   const {register,handleSubmit,formState:{errors},watch} = useForm({mode:"onChange"})

    const password = watch("password") 
    console.log("watching...",password)

   const validationschema ={
    password:{
        required:{
            value:true,
            message:"password is required*"
        }
    },

    conformpassword:{
        required:{
            value:true,
            message:"conform password is required*"
        },
        validate:(params)=>{
            return params == password || "conform password does not match*"
        }
    }
   }

   const submithandler = (data)=>{
    console.log(data)
   }
  return (
    <div style={{textAlign:"center"}}>
    <h1>Formdemo7</h1>

    <form onSubmit={handleSubmit(submithandler)}>
        <div>
            <label>password : </label>
            <input type="password" {...register("password",validationschema.password)}></input>
            <span style={{color:"red"}}>{errors.password?.message}</span>
        </div>

        <div>
            <label>conform passsword : </label>
            <input type="password" {...register("conformpassword",validationschema.conformpassword)}></input>
            <span style={{color:"red"}}>{errors.conformpassword?.message}</span>
        </div>

        <input type="submit"></input>
    </form>
    </div>
  )
}
