import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import { Headercomponent } from './Components/Headercomponent'
import { Footercomponent } from './Components/Footercomponent'
import Contentcomponent from './Components/Contentcomponent'
import { MapDemo1 } from './Components/MapDemo1'
import { MapDemo2 } from './Components/MapDemo2'
import { MapDemo3 } from './Components/MapDemo3'
import { MapDemo4 } from './Components/MapDemo4'
import { MapDemo5 } from './Components/MapDemo5'
import { Navbar } from './Components/Navbar'
import { Homecomponent } from './Components/Homecomponent'
import { NetfilxHome } from './Components/NetfilxHome'
import { NetflixMovies } from './Components/NetflixMovies'
import { NetflixShows } from './Components/NetflixShows'
import { Route, Routes } from 'react-router-dom'
import { Netflixtv } from './Components/Netflixtv'
import { NetflixAccount } from './Components/NetflixAccount'
import { NetflixSports } from './Components/NetflixSports'
import { ErrorNotFound } from './Components/ErrorNotFound'
import { Watch } from './Components/Watch'
import { Teamdetails } from './Components/teamdetails'
import { Usestatedemo1 } from './Components/Usestatedemo1'
import { Usestatedemo2 } from './Components/Usestatedemo2'
import { Usestatedemo3 } from './Components/Usestatedemo3'
import { Functiondemo1 } from './Components/Functiondemo1'
import { Employees } from './Components/Employees'
import { Student } from './Components/Student'
import { Inputdemo1 } from './Components/input/Inputdemo1'
import { Inputdemo2 } from './Components/input/Inputdemo2'
import { Formdemo1 } from './Components/form/Formdemo1'
import { Formdemo2 } from './Components/form/Formdemo2'
import { Formdemo3 } from './Components/form/Formdemo3'
import { Formdemo4 } from './Components/form/Formdemo4'
import { Formdemo5 } from './Components/form/Formdemo5'
import { Formdemo6 } from './Components/form/Formdemo6'
import { Formdemo7 } from './Components/form/Formdemo7'
import { Formdemo8 } from './Components/form/Formdemo8'
import { Formdemo9 } from './Components/form/Formdemo9'
import { Apidemo1 } from './Components/api/Apidemo1'
import { Apidemo2 } from './Components/api/Apidemo2'
import { Apidemo3 } from './Components/api/Apidemo3'


function App() {
  const [count, setCount] = useState(0)

  return (
  <div>
    <Navbar></Navbar>
    {/* <Headercomponent></Headercomponent> */}
    {/* <Contentcomponent></Contentcomponent> */}
    {/* <MapDemo1></MapDemo1> */}
    {/* <MapDemo2></MapDemo2> */}
    {/* <MapDemo3></MapDemo3> */}
    {/* <MapDemo4></MapDemo4> */}
    {/* <MapDemo5></MapDemo5> */}
    <Routes>
      <Route path="/" element={<Homecomponent/>}></Route>
      <Route path="/NetflixHome" element={<NetfilxHome/>}></Route>
      <Route path="/NetflixMovies" element={<NetflixMovies/>}></Route>
      <Route path="/NetflixShows" element={<NetflixShows/>}></Route>
      <Route path="/Netflixtv" element={<Netflixtv/>}></Route>
      <Route path="/NetflixAccount" element={<NetflixAccount/>}></Route>
      <Route path='/NetflixSports' element={<NetflixSports/>}></Route>
      <Route path='/watch/:name' element={<Watch/>}></Route>
      <Route path='/teamdetails/:teamname' element={<Teamdetails/>}></Route>
      <Route path='/Usestatedemo1' element={<Usestatedemo1/>}></Route>
      <Route path='/Functiondemo1' element={<Functiondemo1/>}></Route>
      <Route path='/Usestatedemo2' element={<Usestatedemo2/>}></Route>
      <Route path='/Usestatedemo3' element={<Usestatedemo3/>}></Route>
      <Route path='/Employees' element={<Employees/>}></Route>
      <Route path='/Student' element={<Student/>}></Route>
      <Route path='/inputdemo1' element={<Inputdemo1/>}></Route>
      <Route path='/inputdemo2' element={<Inputdemo2/>}></Route>
      <Route path='/Formdemo1' element={<Formdemo1/>}></Route>
      <Route path='/Formdemo2' element={<Formdemo2/>}></Route>
      <Route path='/Formdemo3' element={<Formdemo3/>}></Route>
      <Route path='/Formdemo4' element={<Formdemo4/>}></Route>
      <Route path='/Formdemo5' element={<Formdemo5/>}></Route>
      <Route path='/Formdemo6' element={<Formdemo6/>}></Route>
      <Route path='/Formdemo7' element={<Formdemo7/>}></Route>
      <Route path='/Formdemo8' element={<Formdemo8/>}></Route>
      <Route path='/Formdemo9' element={<Formdemo9/>}></Route>
      <Route path='/Apidemo1' element={<Apidemo1/>}></Route>
      <Route path='/Apidemo2' element={<Apidemo2/>}></Route>
      <Route path='/Apidemo3' element={<Apidemo3/>}></Route>
      <Route path='/*'element={<ErrorNotFound/>}></Route>
    </Routes>
    <Footercomponent></Footercomponent>
  </div>
  )
}

export default App
