import React from 'react'
import Navbar from '../components/Navbar'
import Announce from '../components/Announce'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Products from '../components/Products'
import Suggestion from '../components/Suggestion'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Announce/>
      <Navbar/> 
      <Slider/>
      <Categories/> 
      <Products/>
      <Suggestion/>
      <Footer/>
    </div>  
  )
}

export default Home