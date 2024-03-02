import React from 'react'
import { Routes, Route } from 'react-router-dom'
import HomeScreen from './Screens/HomeScreen'
import Exercise from './Screens/Exercise'
import AboutUs from './Screens/AboutUs'
import ContactUs from './Screens/ContactUs'
import SignUp from './Screens/SignUp'

const App = () => {
  return(
    <Routes>
      <Route path='/' element={<HomeScreen/>}/>
      <Route path='/exercise' element={<Exercise/>}/>
      <Route path='/about-us' element={<AboutUs/>}/>
      <Route path='/contact-us' element={<ContactUs/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>

    </Routes>
  )
}
export default App