import React from 'react'
import Hero from './pages/Hero'
import Navbar from './components/Navbar'
import Work from './pages/Work'

const App = () => {
  return (
    <div className='font-poppins'>
   <Navbar />
   <Hero />
   <Work />
    </div>
  )
}

export default App