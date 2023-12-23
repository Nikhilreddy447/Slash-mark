import React from 'react'
import { UilSearchAlt,UilLocationPinAlt,UilCelsius,UilFahrenheit} from '@iconscout/react-unicons'

function Inputs() {
  return (
    <div className='flex flex-row justify-center my-6'>
        <div className="flex flex-row w-3/4 items-center justify-center space-x-4">
            <input type="text" placeholder='Search for city....' className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase" />
            <UilSearchAlt 
            size={25} className="cursor-pointer text-white transition ease-out hover:scale-125"
            />
            <UilLocationPinAlt 
            size={25} className="cursor-pointer text-white transition ease-out hover:scale-125"
            />
        </div>

        <div className="flex flex-row w-1/4 items-center justify-center">
          <button name='metric' className='text-xl font-light'><UilCelsius size={20} className="cursor-pointer text-white transition ease-out hover:scale-125"/></button>
          <p className='text-white text-lg mx-1 '>|</p>
          <button name='imperial' className='text-xl font-light'><UilFahrenheit size={20} className="cursor-pointer text-white transition ease-out hover:scale-125"/></button>
        </div>
    </div>
  )
}

export default Inputs
