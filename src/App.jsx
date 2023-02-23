import React from 'react'
import Brand from './components/Brand'
import Categories from './components/Categories'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Products from './components/Products'
import Why_choose_us from './components/Why_choose_us'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Brand />
      <Categories />
      <Why_choose_us />
      <Products />
      <Footer />
    </div>
  )
}

export default App