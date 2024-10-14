import React from 'react'
import App from './swiper/App'



const Portfolio = () => {
  return (
    <div className='mb-16'>
      <div className="mt-20 flex-col items-center justify-center text-center">
        
        <h1 className=" mb-0 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className=" text-secondary-500">
              Escuchá mis podcasts!
            </span>
        </h1>

        <div className='mt-5'>
          
          
           <App/>

        </div>

      </div>
      
    </div>
  )
}

export default Portfolio
