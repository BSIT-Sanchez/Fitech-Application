import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  const hoverStyle = 'hoverStyle';

  const subMainStyle = 'subMainStyle';

  const Hover = ({isActive}) => (isActive ? subMainStyle : hoverStyle)
  return(
    <div className='header-container'>
      <div className='logo-brand'>
        <Link to="/">
          <img src="images/logo.png" alt="logo" className='logo'/>
        </Link>
      </div>

      <div className='menu'>
        <NavLink to="/exercise" className={Hover}>Exercise</NavLink>
        <NavLink to="/contact-us" className={Hover}>ContactUs</NavLink>
        <NavLink to="/about-us" className={Hover}>AboutUs</NavLink>
        <NavLink to="/sign-up" className="button">Sign Up</NavLink>
      </div>

    </div>
  )
}
export default Header