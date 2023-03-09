import React from 'react'
import { HomeBody } from '../../components/home/HomeBody'
import { HomeHero } from '../../components/Home/HomeHero'


export default function Home() {
  return (
    <div>
      <div className='min-h-full max-w-full lg:px-14 mx-auto flex text-black '>
        <HomeBody />
        <HomeHero/>
      </div>

    </div>
  )
}
