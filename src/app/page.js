import React from 'react'
import Card from './components/Card'
import { getAllRecipes } from '@/libs/app-libs'

const Home = async () => {
  const recipes = await getAllRecipes("api/recipes");
  return (
    <div className='p-4 pt-16 sm:grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2  place-items-center md:mx-2'>
      <Card api={recipes}/>
    </div>
  )
}

export default Home
