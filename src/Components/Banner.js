import React from 'react'

const Banner = () => {
  return(
    <div className='banner-container'>
      <div className='banner-grid'>
        <div className='banner-details'>
          <h1>Transform your fitness journey with personalized mentoring</h1>
          <p>Our fitness gym application provides you with a dedicated mentor who will guide you through your fitness journey, ensuring you achieve your goals.</p>
          <div className='banner-button'>
            <button>Get Started</button>
            <button>Learn Now</button>
          </div>
        </div>
        <div>
          <img src="images/banner.jpg" alt="banner" className='banner-img'/>
        </div>
      </div>
    </div>
  )
}
export default Banner