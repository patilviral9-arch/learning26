import React from 'react'
import virat from '../assets/virat.jpg'
import "../assets/css/container.css"


export default function Contentcomponent() {

var student = {
name : "virat kholi",
job : 'Cricketer',
born : "5 November 1988",
Height : "5 ft 9 in (175 cm)",
Batting : "Right-handed",
Bowling : "Right arm medium",
isavilable : true,
}; 

  return (
    <div className='container'>
         <div className='image'>
               <img className="img" src={virat} alt="Virat" width="200" />  
               <div className='details'>Virat Kohli is an Indian international cricketer and the former all-format captain of the Indian national cricket team. He is a right-handed batter and occasional right-arm medium pace bowler. Considered one of the greatest all-format batsmen in the history of cricket, he has been nicknamed the King, the Chase Master, and the Run Machine for his skills, records and ability to lead his team to victory. Kohli has the most centuries in ODIs and the second-most centuries in international cricket with 85 tons across all formats. He is also the leading run-scorer in the Indian Premier League. Kohli is the most successful Test captain of India with most wins and 3 consecutive Test mace retainments. He is the only batter to earn 900+ rating points across all 3 formats.</div>
        </div>
          <div className='info'>
                <h1 className='info-title'>Details</h1>
                <h3>Name : {student.name}</h3>
                <h3>Job : {student.job}</h3>
                <h3>Dob : {student.born}</h3>
                <h3>Height : {student.Height}</h3>
                <h3>Batting : {student.Batting}</h3>
                <h3>Bowling : {student.Bowling}</h3>
                <h3>is available : {student.isavilable == true ? "true" : "false"}</h3>
          </div>
    </div>
  )
}
