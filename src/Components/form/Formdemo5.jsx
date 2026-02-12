import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export const Formdemo5 = () => {

const {register,handleSubmit,formState:{errors}}=useForm()
const [bloodtype, setbloodtype] = useState("")
const validtionschema={
    
    namevalidator:{
        required:{
            value:true,
            message:"name is required*"
        }
    },

    agevalidator:{
        required:{
            value:true,
            message:"age is required*"
        },
        min:{
            value:18,
            message:"your age should be above 18*"
        },
        max:{
            value:80,
            message:"your age should be below 80*"
        }
    },

    phonevalidator:{
        required:{
            value:true,
            message:"phone number is required*"
        },
        minLength:{
            value:10,
            message:"minimum 10 digits are required*"
        },
        maxLength:{
            value:10,
            message:"maximum 10 digits are required*"
        }
    },

    addressvalidator:{
        required:{
            value:true,
            message:"address is required*"
        },
        minLength:{
            value:6,
            message:"there should be minimum 6 characters"
        },
        maxLength:{
            value:30,
            message:"maximum 30 characters"
        }
    },

    bloodvalidator:{
        required:{
            value:true,
            message:"select your blood type*"
        },
    }

}

const submithanlder=(data)=>{
   alert("Form is Submited...")
   console.log(data)
}

  return (
    <div style={{textAlign:"center"}}>
    <h1>Formdemo5</h1>
    <h1>Blood donation form</h1>
    <form onSubmit={handleSubmit(submithanlder)}>

    <div>
        <label>name :</label>
        <input type="text" {...register("name",validtionschema.namevalidator)}></input>
        <span style={{color:"red"}}>{errors.name && errors.name.message}</span>
    </div>
     
    <div>
        <label>age :</label>
        <input type="number" {...register("age",validtionschema.agevalidator)}></input>
        <span style={{color:"red"}}>{errors.age && errors.age.message}</span>
    </div>

     <div>
        <label>phone number :</label>
        <input type="number" {...register("phonenumber",validtionschema.phonevalidator)}></input>
        <span style={{color:"red"}}>{errors.phonenumber && errors.phonenumber.message}</span>
     </div>

     <div>
        <label>Address :</label>
        <input type="text" {...register("address",validtionschema.addressvalidator)}></input>
        <span style={{color:"red"}}>{errors.address && errors.address.message}</span>
     </div>

     <div>
        <label>Blood Type :</label>
            <select {...register("blood",validtionschema.bloodvalidator)}>
                <option value=""></option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
            </select>
            <span style={{color:"red"}}>{errors.blood && errors.blood.message}</span>
     </div>
     
     <input type="submit"></input>
    </form>
    </div>
  )
}
