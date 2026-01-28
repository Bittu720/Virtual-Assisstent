import React, { useContext } from 'react'
import SignUp from "./pages/signup";
import SignIn from "./pages/signin";
import Customize from "./pages/customize";
import Customize2 from "./pages/customize2";
import Home from "./pages/home";

import { Routes, Route, Navigate } from 'react-router-dom';
import { userDataContext } from './context/UserContext';


const App = () => {
  const {userData, setUserData} = useContext(userDataContext)
  return (
    <Routes>
      <Route path='/' element={(userData?.assistantImage && userData?.assistantName)? <Home/> : <Navigate to={"/customize"}/>} />
      <Route path='/signup' element={!userData ? <SignUp/> : <Navigate to={"/"}/>} />
      <Route path='/signin' element={!userData ? <SignIn/> : <Navigate to={"/"}/>} />
      <Route path='/customize' element={userData ? <Customize/> : <Navigate to={"/signup"}/>} />
      <Route path='/customize2' element={userData ? <Customize2/> : <Navigate to={"/signup"}/>} />
    </Routes>
  )
}
 
export default App
