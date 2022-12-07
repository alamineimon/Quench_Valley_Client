import React from 'react'
import { SlArrowRight ,SlArrowLeft} from 'react-icons/sl';

const Arrows = ({prevSlider, nextSlider}) => {
  return (
    <div className='arrows'>
        <span className='prev' onClick={prevSlider}><SlArrowLeft></SlArrowLeft></span>
        <span className='next' onClick={nextSlider}><SlArrowRight></SlArrowRight></span>
    </div>
  )
}

export default Arrows