import ProjectsSection from '@/app/components/ProjectsSection'
import React from 'react'
import App from './swiper/App'



const Portfolio = () => {
  return (
    <div className='h-screen'>
      <div className="mt-20 flex-col items-center justify-center text-center">
        
        <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl lg:leading-normal font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r  text-white">
              Escuchá mis podcast!
            </span>
        </h1>
        <div className='mt-10'>
           <App/>

        </div>

      </div>
      
    </div>
  )
}

export default Portfolio
