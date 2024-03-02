import React from 'react'

const GetStarted = () => {
  return(
    <div className='login-container'>
      <div className='flex-container'>
          <div className='image-div'>
            <img src="images/image1.png" alt='image1' className='image1'/>
          </div>

          <form>
            <h3>Login</h3>
            <label>Email</label>
            <input type="email" placeholder="admin@gmail.com"/>
            <label>Password</label>
            <input type="password" placeholder='1234'/>
            <button type='submit' value='Login'/>
          </form>  
      </div>   
    </div>
  )
  
}
export default GetStarted