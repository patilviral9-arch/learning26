import React from 'react'
import { Studentdetails } from './Studentdetails'

export const Student = (props) => {
     var students = [
    {id: 1, name: "viral Patil", rollNo: "14", class: "BE", marks: 78},
    {id: 2, name: "Urvesh joshi", rollNo: "22", class: "BE", marks: 55},
    {id: 3, name: "Rahul trivedi", rollNo: "19", class: "BE", marks: 68},
    {id: 4, name: "rohit Parmar", rollNo: "5", class: "BE", marks: 60},
    {id: 5, name: "Parv patel", rollNo: "9", class: "BE", marks: 83}
  ]
  return (
    <div style={{textAlign:"center"}}>
    <h1>Student</h1>
    <Studentdetails students={students}></Studentdetails>
    </div>
  )
}
