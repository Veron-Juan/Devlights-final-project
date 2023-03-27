import React from 'react'
import { Icon } from '@iconify/react'

export default function SearchInput() {
  return (
    <div className='flex items-center justify-evenly rounded-lg shadow-lg  h-16 mx-auto mt-[95px] bg-yellowButton w-full max-w-[650px]  '>
        
        <div className='flex items-center relative  '>
        <input type="text" placeholder='  Ingresa etc' className='border rounded-md  py-[8px] min-w-[100px] sm:w-[320px] ' />
        <div className='cursor-pointer   rounded-md bg-yellow flex items-center justify-center absolute right-[3px] w-8 h-9'>
        <Icon className='text-[27px] opacity-60' icon="ic:outline-search" />
        </div>
        </div>
            
        
        <select className='py-[3px] border rounded-md'>
        <option value="localidad"  selected>Localidad</option>
            <option value="resistencia">Resistencia</option>
            <option value="corrientes">Corrientes</option>
            
        </select>
        
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
