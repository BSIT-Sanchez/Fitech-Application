import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Exercise from './Screens/Exercise'
import AboutUs from './Screens/AboutUs'
import ContactUs from './Screens/ContactUs'
import SignUp from './Screens/SignUp'
import GetStarted from './Screens/GetStarted'

const App = () => {
  return(
    <Routes>
      <Route path='/' element={<GetStarted/>}/>
      <Route path='/exercise' element={<Exercise/>}/>
      <Route path='/about-us' element={<AboutUs/>}/>
      <Route path='/contact-us' element={<ContactUs/>}/>
      <Route path='/sign-up' element={<SignUp/>}/>

    </Routes>
  )
}
export default App