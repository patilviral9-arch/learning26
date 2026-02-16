import React from 'react'
import { useForm } from 'react-hook-form'

export const Formdemo6 = () => {

const {register,handleSubmit,formState:{errors}}= useForm()   

const validationschema ={
    namevalidator:{
        required:{
            value:true,
            message:"name is required*"
        }
    },

     contactValidator:{
            required:{
                value:true,
                message:"contact is required*"
            },
            pattern:{
                value:/[6-9]{1}[0-9]{9}$/, 
                message:"invalid contact."
            }
        },

        promoCodeValidator:{
            required:{
                value:true,
                message:"promocode is required*"
            },
            validate:(params)=>{
                return params == "2026" || "invalid promocode*"
            }
        },

        hobbiesValidator:{
            required:{
                value:true,
                message:"hobbies are required*"
            },
            validate:(params)=>{
                return params?.length>=2 || "min 2 hobbies are required*"
                 }
            }
}


const submithandler = (data) =>{
     console.log(data)
}

  return (
    <div style={{textAlign:"center"}}>
    <h1>Formdemo6</h1>
    
    <form onSubmit={handleSubmit(submithandler)}>
           <div>
            <label>name :</label>
            <input type='text' {...register("name",validationschema.namevalidator)}></input>
            <span style={{color:"red"}}>{errors.name?.message}</span>
           </div>

            <div>
                <label>Contact:</label>
                <input type='text' {...register("contact",validationschema.contactValidator)}></input>
              <span style={{color:"red"}}>{errors.contact?.message}</span>
            </div>

            <div>
                <label>Promo Code :</label>
                <input type='text' {...register("promocode",validationschema.promoCodeValidator)}></input>
                <span style={{color:"red"}}>{errors.promocode?.message}</span>
            </div>

            <div>
                    <label>HOBBIES :</label> <br></br>
                    Cricket:<input type='checkbox' {...register("hobbies",validationschema.hobbiesValidator)} value="cricket"></input>
                    Travel:<input type='checkbox' {...register("hobbies",validationschema.hobbiesValidator)} value="travel"></input>
                    Scrolling:<input type='checkbox' {...register("hobbies",validationschema.hobbiesValidator)} value="scrolling"></input>
                    <span style={{color:"red"}}>{errors.hobbies?.message}</span>
            </div>
        
        <input type="submit"></input>
    </form>
    </div>
  )
}
