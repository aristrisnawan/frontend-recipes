import React from 'react'
import Card from './components/Card'

const Home = () => {
  return (
    <div className='p-4 pt-16 sm:grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2  place-items-center md:mx-2'>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  )
}

export default Home
