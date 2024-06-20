import React from 'react';
import img1 from '../assets/Work_img/Project_img1.png';
import img2 from '../assets/Work_img/Project_img2.png';
import img3 from '../assets/Work_img/Project_img3.png';
import arrow from '../assets/Work_img/Arrow_img (2).svg';

const Works = () => {
  return (
    <div className=' flex flex-col lg:ml-[130px] lg:mr-[130px] ml-[24px] mr-[24px] '>
      <div className=' mt-[145px]'>
        <button className='bg-[#002BF3] rounded-[71px] py-[13px] px-[18px] text-[#FFFFFF] font-satoshi text-[16px] lg:text-[20px] font-[400] flex'>Case Studies</button>
        <p className=' font-clash text-[#FFF] text-[30px] lg:text-[50px] font-[500] leading-[58px] mt-[20px] h-[116px] flex'>Our Works</p>
      </div>
      <div className='flex flex-wrap justify-between'>
        <div class="relative overflow-hidden group">
          <img src={img1} alt="Image" class="transition-transform duration-300 transform-gpu group-hover:scale-110" />
          <p class='font-satoshi text-[#FFFFFF] text-start mt-[20px] text-[20px] lg:text-[26px] font-[500]'>Project Name</p>
          <p class='text-[#B3B3B3] text-start font-satoshi text-[16px] lg:text-[18px] font-[300] mb-[50px] lg:mb-[0px]'>Welcome to CraftLabs, where creativity knows <br />no bounds and design is our passion.</p>
        </div>

        <div class="relative overflow-hidden group">
          <img src={img2} alt="Image" class="transition-transform duration-300 transform-gpu group-hover:scale-110" />
          <p className=' font-satoshi text-[#FFFFFF] text-start mt-[20px] text-[20px] lg:text-[26px] font-[500]'>Project Name</p>
          <p className='text-[#B3B3B3] text-start font-satoshi text-[16px] lg:text-[18px] font-[300] mb-[50px] lg:mb-[0px]'>Welcome to CraftLabs, where creativity knows <br />no bounds and design is our passion.</p>
        </div>

        <div class="relative overflow-hidden group">
          <img src={img3} alt="Image" class="transition-transform duration-300 transform-gpu group-hover:scale-110" />
          <p className=' font-satoshi text-[#FFFFFF] text-start mt-[20px] text-[20px] lg:text-[26px] font-[500]'>Project Name</p>
          <p className='text-[#B3B3B3] text-start font-satoshi text-[16px] lg:text-[18px] font-[300] mb-[50px] lg:mb-[0px]'>Welcome to CraftLabs, where creativity knows <br />no bounds and design is our passion.</p>
        </div>

      </div>
      <div>
        <button className='bg-[#000] mt-[30px] w-full relative h-[60px] font-satoshi text-[20px] font-[600] text-[#FFF] text-start px-[24px] lg:w-[206px] border-2 border-[#FFF]'>
          View all works
          <img className='absolute top-1/2 right-0 transform -translate-y-1/2 pr-[20px] pt-0.5 ' src={arrow} alt="Arrow" />
        </button>
      </div>
    </div>
  )
}

export default Works