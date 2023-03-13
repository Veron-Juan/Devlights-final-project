import React from 'react'
import { Icon } from '@iconify/react'

export default function SearchInput() {
  return (
    <div className='flex items-center justify-evenly rounded-lg  h-12 mx-auto bg-yellowButton sm: w-[320px] md:w-[600px]'>
        <input type="text" placeholder='  Ingresa etc' className='border rounded-md py-[3px] sm: w-[160px] md: w-80 ' />
        <select className='py-[3px] border rounded-md'>
        <option value="localidad"  selected>Localidad</option>
            <option value="resistencia">Resistencia</option>
            <option value="corrientes">Corrientes</option>
            
        </select>
        <div className='w-[30px] h-7 rounded-md bg-yellow flex items-center justify-center'>
        <Icon className='text-[27px] opacity-60' icon="ic:outline-search" />
        </div>
      {/* <div className=" flex justify-center items-center">
	<div className="container mx-auto max-w-[1200px] rounded-lg p-6">
		<form>
			
				<div className="sm:flex items-center bg-white rounded-lg  px-2  justify-between">
					<input className="text-base text-gray-400  outline-none " type="text" placeholder="Search your dom" />
					<div className="sm:flex items-center max-w-[160px]  px-2 rounded-lg space-x-4 ">
						<select id="Com" className="text-base text-gray-800 outline-none border-2 px-4 py-2 rounded-lg">
            <option value="com" selected>com</option>
            <option value="net">net</option>
            <option value="org">org</option>
            <option value="io">io</option>
          </select>
						<button className="bg-indigo-500 text-white text-base rounded-lg px-4 py-2 font-thin">1</button>
					</div>
				</div>
		</form>

        <form>
            <div className='sm:flex justify-between items-center bg-white rounded-lg '>
            <input className="text-base text-gray-400  outline-none " type="text" placeholder="Search your dom" />
            <div className='sm:flex max-w-sm'>
            <select id="Com" className="text-base text-gray-800 outline-none border-2  rounded-lg">
            <option value="com" selected>com</option>
            <option value="net">net</option>
            <option value="org">org</option>
            <option value="io">io</option>
          </select>
            </div>
            </div>
        </form>

	</div>
</div> */}


    </div>
  )
}
