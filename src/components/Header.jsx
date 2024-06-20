import React from 'react'
import bg_img from '../assets/Section 1 _ Hero Section.png';
import btn_arrow from '../assets/btn-arrow.svg';

const Header = () => {
  return (
    <div className='relative'>
      <img className='w-full lg:mt-[0px] mt-[280px]' src={bg_img} alt="Background Pic" />
      <div className='absolute top-1/2 left-1/2 mt-[-35px] transform -translate-x-1/2 -translate-y-1/2 w-full h-[420px] text-left px-[24px] lg:text-center lg:mt-[-50px] '>
        <h2 className='text-[#FFF] text-[37px] font-clash font-[500] leading-[41px]  md:text-[69px] lg:text-[100px] lg:leading-[111px]'>Building digital <br />designs that matter</h2>
        <p className='text-[#FFF] font-satoshi font-[400] text-[18px] leading-[24px] mt-[10px]'>Welcome to CraftLabs, where creativity knows no bounds and design is our passion.</p>
        <button className='bg-white mt-[30px] w-full relative h-[60px] font-satoshi text-[20px] font-[600] text-[#000] text-start px-[24px] lg:w-[206px]'>
          Start a project
          <img className='absolute top-1/2 right-0 transform -translate-y-1/2 pr-[20px] pt-0.5 ' src={btn_arrow} alt="Arrow" />
        </button>
      </div>
    </div>

  )
}

export default Header