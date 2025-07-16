import React from 'react'
import './Footer.css'
import instagram_icon from '../../assets/instagram.png'
import twitter_icon from '../../assets/twitter.png'
import youtube_icon from '../../assets/youtube.png'
import facebook_icon from '../../assets/facebook.png'

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-icons'>
        <img src={instagram_icon} alt=''/>
        <img src={twitter_icon} alt=''/>
        <img src={youtube_icon} alt=''/>
        <img src={facebook_icon} alt=''/>
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className='copyright-text'>© 2025 Netflix. All rights reserved.
</p>
      
    </div>
  )
}

export default Footer
