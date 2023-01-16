import React from 'react'
import { Link } from 'react-router-dom'
import './About.css'

const About = () => {
  return (
    <div className='h-[700px] bg-slate-800 text-white flex items-center justify-center '>
        <div className='w-1/2 text-center justify-center items-center'>
          <p className='uppercase'>About Us</p>
          <p className='uppercase text-2xl mb-3'>Quench_Valley</p>
          <hr  className='w-[180px] mx-auto '/>
          <hr  className='w-[180px] mx-auto  mb-[80px]'/>
          <p className='w-2/4 mb-8 mx-auto'>Lorem ipsum dolor, sit amet elit. Commodi, natus impedit repellendus eum dicta repudiandae excepturi non at quo! Neque.</p>
          <Link to='/shop' className="uppercase text-center hover:bg-blue-400 border-2 border-blue-400 hover:text-white font-semibold  py-2 px-4 leading-tight text-blue-500 hover:border-blue-400 mt-5">
            Explore menu
          </Link>
        </div>
        <div className='bgAbout w-1/2'></div>
    </div>
  )
}

export default About