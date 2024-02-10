import React from 'react'
import { Route , Routes } from 'react-router-dom' ;
import Home from './Components/Home' ; 
import Movies from './Components/Movies' ; 
import Tv from './Components/Tv' ; 
import MovieLibrary from './Components/MovieLibrary' ; 
import TvLibrary from './Components/TvLibrary' ; 
import Message from './Components/Message' ; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function App() {
  return (
    <div className='main-box' >
      <FontAwesomeIcon className='profile-icon' icon="fa-solid fa-user" />
      <Routes>
        <Route path='/' element={ <Home></Home>}> </Route>
        <Route path='movies' element={ <Movies></Movies>}> </Route>
        <Route path='tv' element={ <Tv></Tv> }> </Route>
        <Route path='musiclibrary' element={ <MovieLibrary></MovieLibrary> }> </Route>
        <Route path='tvlibrary' element={ <TvLibrary></TvLibrary> }> </Route>
        <Route path='message' element={ <Message></Message> }> </Route>
      </Routes>
    </div>
  )
}
