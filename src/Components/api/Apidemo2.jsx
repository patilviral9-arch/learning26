import axios from 'axios'
import React, { useState } from 'react'

export const Apidemo2 = () => {

 const [products, setproducts] = useState([])
 const getproducts =async()=>{
    const response = await axios.get("https://dummyjson.com/products")
    console.log(response)
    console.log(response.data.products)
    setproducts(response.data.products)
 }

  return (
    <div style={{textAlign:"center"}}>
    <h1>Apidemo2</h1>
    <button onClick={()=>{getproducts()}}>get</button>
    <table className='table table-secondary'>
        <thead>
          <tr>
            <th>Id</th>
            <th>title</th>
            <th>description</th>
            <th>category</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map((pro) => {
              return <tr key={pro.id}>
                <td>{pro.id}</td>
                <td>{pro.title}</td>
                <td>{pro.description}</td>
                <td>{pro.category}</td>
                <td>${pro.price}</td>
              </tr>
            })
          }
        </tbody>
      </table>

    </div>
  )
}
