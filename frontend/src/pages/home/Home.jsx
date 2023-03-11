
import { HomeBody } from '../../components/home/HomeBody'
import { HomeHero } from '../../components/Home/HomeHero'
import { useSelector } from 'react-redux'


export default function Home() {

  const {name} = useSelector((state)=> state.user)
  return (
    <div>
      <p className='text-5xl text-center'>Bienvenido {name} </p>
      <div className=' mx-auto max-w-7xl flex justify-center   text-black '>
        
        <HomeBody />
        <HomeHero/>
      </div>

    </div>
  )
}

