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
      <Route path='/*'element={<ErrorNotFound/>}></Route>
    </Routes>
    <Footercomponent></Footercomponent>
  </div>
  )
}

export default App
