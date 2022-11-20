import React from 'react'
import Navbar from '../components/Navbar'
import Announce from '../components/Announce'
import Slider from '../components/Slider'
import Categories from '../components/Categories'

const Home = () => {
  return (
    <div>
      <Announce/>
      <Navbar/> 
      <Slider/>
      <Categories/> 
    </div>  
  )
}

export default Home