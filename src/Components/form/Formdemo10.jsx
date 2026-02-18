import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'
import Swal from 'sweetalert2'

export const Formdemo10 = () => {

  const { register, handleSubmit, formState: { errors } } = useForm()

  const submitHandler = async (data) => {
    try {
      console.log("Sending to API:", data)

      const res = await axios.post("https://node5.onrender.com/user/user/", data)

      console.log(res.data)
      Swal.fire({
         icon: 'success',
         title: 'Success',
         text: 'Form submitted successfully!',
      })
    } catch (err) {
      console.error(err)
      alert("API error")
    }
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Formdemo10</h2>

      <form onSubmit={handleSubmit(submitHandler)}style={{ width: '600px', margin: 'auto' }}>

        <div className="form-group">
          <input placeholder="Name" {...register("name", { required: true })}/>
          {errors.name && <span>Name is required</span>}
        </div>

        <div className="form-group">
          <input placeholder="Email" {...register("email", { required: true })} />
        </div>

        <div className="form-group">
          <input type="number" placeholder="Age" {...register("age")}  />
        </div>

        <div className="form-group">
          <label>
            Active:
            <input type="checkbox"{...register("isActive")}/>
          </label>
        </div>

        <div className="form-group">
          <input type="password" placeholder="Password" {...register("password", { required: true })} />
        </div>

        <button type="submit" className="btn btn-primary d-block mx-auto" style={{ margin: 'auto' }}>Submit</button>

      </form>
       <div className='text-danger text-center'>
            <div>{errors.name?.message}</div>
            <div>{errors.email?.message}</div>
            <div>{errors.password?.message}</div>
            <div>{errors.age?.message}</div>
            <div>{errors.isActive?.message}</div>
         </div>
    </div>
  )
}
