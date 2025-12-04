import { useEffect, useState } from 'react'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import { onAuthStateChanged } from 'firebase/auth'
import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { auth } from './firebase'
import { ToastContainer, toast } from 'react-toastify';
import Player from './pages/Player/Player'
import NewPlayer from './pages/Player/NewPlayer'


function App() {

   const navigate = useNavigate()

  useEffect(()=>{
    onAuthStateChanged(auth, async (user)=>{
      if(user){
        console.log("Logged In");
        navigate('/')
      }
      else{
        console.log("Logged Out");
        navigate('/login')
        
      }
    })
  },[])


  return (
    <>
    <ToastContainer theme='dark'/>
    <Routes>
      <Route  path='/' element= {<Home />} />
      <Route  path='/login' element= {<Login />} />
      <Route path='/player/:id'  element ={<Player />} />
      <Route path='/user/:id'  element ={<NewPlayer />} />
      {/* <Route path='/local' element={<LocalLibrary />} /> */}
      {/* <Route path='/local/play' element={<LocalPlayer />} /> */}

      
    </Routes>
    
    </>
  )
}

export default App

