import React from 'react'
import { useForm } from 'react-hook-form'

export const Formdemo8 = () => {

    const {register,handleSubmit,formState:{errors},watch}= useForm()

    const password = watch("password","")

    const submithandler =(data)=>{
        console.log(data)
    }

    const validationschema ={
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
                message:"minimum age is 18*"
            },
            max:{
                value:60,
                message:"maximum age is 60*"
            }
        },

        addressvalidator:{
            required:{
                value:true,
                message:"address is reqired*"
            },
            minLength:{
                value:5,
                message:"minium 5 characters required*"
            },
            maxLength:{
                value:30,
                message:"maxium 30 characters required*"
            }
        },

        contactvalidator:{
            required:{
                value:true,
                message:"contact is required*"
            },
            pattern:{
                value:/[6-9]{1}[0-9]{9}$/,
                message:"invalid contact number*"
            }
        },

        passwordvalidator:{
            required:{
                value:true,
                message:"password is required*"
            },
        },

        conformpasswordvalidator:{
            required:{
                value:true,
                message:"password is required*"
            },
            validate:value=>value === watch("password") || "password do not match*"
        }
    }

  return (
    <div style={{textAlign:"center"}}>
    <h1>Formdemo8</h1>
    <form onSubmit={handleSubmit(submithandler)}>
        <div>
            <label>Name : </label>
            <input type="text" {...register("name",validationschema.namevalidator)}></input>
            <span style={{color:"red"}}>{errors.name?.message}</span>
        </div>

        <div>
            <label>age : </label>
            <input type="number" {...register("age",validationschema.agevalidator)}></input>
            <span style={{color:"red"}}>{errors.age?.message}</span>
        </div>

        <div>
            <label>Address : </label>
            <input type="text" {...register("address",validationschema.addressvalidator)}></input>
            <span style={{color:"red"}}>{errors.address?.message}</span>
        </div>

        <div>
            <label>contact : </label>
            <input type="number" {...register("contact",validationschema.contactvalidator)}></input>
            <span style={{color:"red"}}>{errors.contact?.message}</span>
        </div>

        <div>
            <label>password : </label>
            <input type="password" {...register("password",validationschema.passwordvalidator)}></input>
            <span style={{color:"red"}}>{errors.password?.message}</span>
        </div>

        <div>
            <label>conform password : </label>
            <input type="password" {...register("conformpassword",validationschema.conformpasswordvalidator)}></input>
            <span style={{color:"red"}}>{errors.conformpassword?.message}</span>
        </div>

        <input type="submit"></input>
    </form>
    </div>
  )
}
