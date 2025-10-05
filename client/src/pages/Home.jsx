import React from 'react'
import Header from '../components/Header'
import Steps from '../components/Steps'
import Description from '../components/Description'
import Testimonials from '../components/Testimonials'
import GenerateBtn from '../components/GenerateBtn'


const Home = () => {
  return (
    <div className="min-h-screen bg-blue-900">
      <Header/>
      <Steps/>
      <Description/>
      <Testimonials/>
      <GenerateBtn/>
    </div>
  )
}

export default Home