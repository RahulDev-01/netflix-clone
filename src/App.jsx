import { useEffect, useState } from 'react'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import { onAuthStateChanged } from 'firebase/auth'
import './App.css'
import { Route, Routes, useNavigate } from 'react-router-dom'
import { auth } from './firebase'
import { ToastContainer, toast } from 'react-toastify';

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

      
    </Routes>
    
    </>
  )
}

export default App
