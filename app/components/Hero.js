import React from 'react'

const Hero = () => {
  return (
    <div>
       <div
        className="relative bg-cover bg-center bg-no-repeat h-[90vh] flex items-center w-full "
        style={{
          backgroundImage: `url("/background.png")`, 
        }}
      >
       <div className='px-20'>
       <h4 className='font-Agency relative v flex items-center pl-20 text-base font-bold text-primary'>C O N S T R U C T I O N B U S I N E S S</h4>
        <h2 className='text-6xl leading-[72px] font-Agency -translate-x-[2px] font-bold text-white'>Crafting Excellence, One <br/>Project at a Time. Your <br/>Trusted Construction Partner.</h2>
       
       </div>

      </div>
    </div>
  )
}

export default Hero
