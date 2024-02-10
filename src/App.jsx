import React from 'react'
import { Route , Routes } from 'react-router-dom' ;
import Home from './Components/Home' ; 
import Movies from './Components/Movies' ; 
import Tv from './Components/Tv' ; 
import Bookmarks from './Components/Bookmarks';
import Message from './Components/Message' ; 
import NavBar from './Components/NavBar';
import SideBar from './Components/SideBar'

export default function App() {
  return (
    <div className='main-box' >
      <SideBar></SideBar>
      <div>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={ <Home></Home>}> </Route>
          <Route path='movies' element={ <Movies></Movies>}> </Route>
          <Route path='tv' element={ <Tv></Tv> }> </Route>
          <Route path='bookmark' element={  <Bookmarks></Bookmarks>} ></Route>
          <Route path='message' element={ <Message></Message> }> </Route>
        </Routes>
      </div>
    </div>
  )
}
