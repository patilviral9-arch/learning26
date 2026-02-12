import React from 'react'
import { useForm } from 'react-hook-form'

export const Formdemo4 = () => {

const  {register,handleSubmit,formState:{errors}}= useForm()

console.log("errors...",errors)

const validationschema ={
   
    namevalidator:{
        required:{
          value:true,
          message:"please enter the name*"
        }
    },

    agevalidator:{
      required:{
        value:true,
        message:"age is required*"
      },
      min:{
        value:18,
        message:"minimum age is 18*"
      },
      max:{
        value:60,
        message:"maximum age is 60"
      }
    },

    emailvalidator:{
        required:{
            value:true,
            message:"please enter the email*"
        }
    },

    passwordvalidtor:{
      required:{
           value:true,
           message:"please enter the password*"
      },
      minLength:{
        value:5,
        message:"please enter more then 5 characters*"
      },
      maxLength:{
        value:30,
        message:"max length is 30 characters*"
      }
    },

    phonevalidator:{
      required:{
        value:true,
        message:"phone number is required*"
      },
      minLength:{
        value:10,
        message:"minimun length of phone number is a 10 digits*"
      },
      maxLength:{
        value:10,
        message:"maximum length of phone number is a 10 digits*"
      }
    }
}

const submitHandler = (data)=>{
        alert("form subbmited...")
        console.log(data)
    }

  return (
    <div style={{textAlign:"center"}}>
    <h1>Formdemo4</h1>
    <form onSubmit={handleSubmit(submitHandler)}>
      <div>
        <label>Name :</label>
        <input type="text" {...register("name",validationschema.namevalidator)}></input>
        <span style={{color:"red"}}>{errors.name?.message}</span>
      </div>

      <div>
        <label>age : </label>
        <input type="number" {...register("age",validationschema.agevalidator)}></input>
        <span style={{color:"red"}}>{errors.age && errors.age.message}</span>
      </div>

       <div>
          <label>Email : </label>
          <input type="text" {...register("email",validationschema.emailvalidator)}></input>
          <span style={{color:"red"}}> {errors.email?.message}</span>
       </div>

       <div>
          <label>Password :</label>
          <input type="password" {...register("password",validationschema.passwordvalidtor)}></input>
          <span style={{color:"red"}}>{errors.password?.message}</span>
       </div>

       <div>
        <label>Phono number: </label>
        <input type="number" {...register("phonenumber",validationschema.phonevalidator)}></input>
        <span style={{color:"red"}}>{errors.phonenumber && errors.phonenumber.message}</span>
       </div>
       <input type="submit"></input>
       </form>
    </div>
  )
}
