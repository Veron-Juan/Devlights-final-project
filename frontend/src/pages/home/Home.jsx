import React from 'react'
import { HomeBody } from '../../components/home/HomeBody'
import { HomeHero } from '../../components/Home/HomeHero'


export default function Home() {
  return (
    <div>
      <div className='min-h-full w-screen flex'>
        <HomeBody />
        <HomeHero/>
      </div>

    </div>
  )
}
