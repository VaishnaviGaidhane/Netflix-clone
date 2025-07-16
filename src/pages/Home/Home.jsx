import React from 'react'
import './Home.css'

import Navbar from "../../components/Navbar/Navbar"
import hero_banner from "../../assets/hero_banner.jpg"
//import hero_title from "../../assets/hero_title.webp"
import play_icon from "../../assets/play.png"
import info_icon from "../../assets/info.png"
import Titlecards from '../../components/Titlecards/Titlecards'
import Footer from "../../components/Footer/Footer"


const Home = () => {
  return (
    <div className='home'>
      <Navbar/>
      <div className='hero'>
        <img src={hero_banner} alt="" className='banner-img'/>
        <div className='hero_caption'>
        <img src="" alt=""/>
        <p>Stranger Things is a sci-fi thriller series that follows a group of kids in a small town 
          uncovering government secrets and supernatural forces. As they search for their missing friend,
           they encounter a mysterious girl with telekinetic powers.</p>
        <div className="hero-btns">
          <button className='btn'><img src={play_icon} alt=''/>play</button>
          <button className='btn dark-btn'><img src={info_icon} alt=''/>More Info</button>
          </div>   
          <Titlecards/>
        </div>

      </div>
      <div className='more-cards'>
        <Titlecards title={"Top Recommendations"} category={"top_rated"}/>
        <Titlecards title={"Upcoming"} category={"popular"}/>
        <Titlecards title={"Blockbuster Movies"} category={"now_playing"}/>
        <Titlecards title={"Only on Netflix"} category={"upcoming"}/>

      </div>

      <Footer/>
    </div>
  )
}

export default Home
