import React from 'react';
import c_logo from '../assets/Footer/c-logo.svg';
import socialMedia_logo from '../assets/Footer/SocialMedia_logo.svg';
import arrow from '../assets/Footer/Arrow.svg';
import CopyRight_img from '../assets/Footer/copyright.svg';

const Footer = () => {
  return (
    <div className='mt-[57px] lg:ml-[120px] lg:mr-[120px] ml-[21px] mr-[21px]'>
      <div>
        <h2 className='text-[#FFF] font-clash text-[40px] lg:text-[70px] font-[500] text-start'>Have an idea?</h2>
        <h3 className='text-[#FFF] font-satoshi font-[300] text-[38px] lg:text-[64px] text-start leading-2'>Let’s talk ✌️</h3>
      </div>
      <div className='text-[#FFF] flex mt-[62px] lg;mt-[80px] border border-b-[#FFF] border-t-0 border-l-0 border-r-0 pb-[50px] flex-wrap'>
        <div>
          <img src={c_logo} alt="Logo Image" />
          <p className='text-start text-[#F0F0F0] font-satoshi font-[400] text-[16px] leading-[20px]'>Crafting Imagination into Design Excellence. <br /> Welcome to CraftLabs, where creativity knows no <br /> bounds and design is our passion.</p>
          <img className='mt-[20px]' src={socialMedia_logo} alt="Brand Logo" />
        </div>
        <div className=' flex ml-[21px] lg:ml-[123px] w-[800px] justify-between flex-wrap mt-[42px] lg:mt-[0px]'>
          <div className='text-start'>
            <h2 className='text-[#FFF] font-satoshi font-[700] text-[21px]'>Company</h2>
            <h3 className='text-[#FFF] font-satoshi font-[400] text-[18px]'>Home</h3>
            <h3 className='text-[#FFF] font-satoshi font-[400] text-[18px]'>Sevices</h3>
            <h3 className='text-[#FFF] font-satoshi font-[400] text-[18px]'>Projects</h3>
            <h3 className='text-[#FFF] font-satoshi font-[400] text-[18px]'>Blog</h3>
            <h3 className='text-[#FFF] font-satoshi font-[400] text-[18px]'>Contact Us</h3>
          </div>
          <div className='text-start'>
            <div className='text-start'>
              <h2 className='text-[#FFF] font-satoshi font-[700] text-[21px]'>Sevices</h2>
              <h3 className='text-[#FFF] font-satoshi font-[400] text-[18px]'>Branding</h3>
              <h3 className='text-[#FFF] font-satoshi font-[400] text-[18px]'>Experience design</h3> 
              <h3 className='text-[#FFF] font-satoshi font-[400] text-[18px]'>Development</h3>
              <h3 className='text-[#FFF] font-satoshi font-[400] text-[18px]'>Digital Design</h3>
            </div>
          </div>
          <div>
            <h3 className='text-[#FFF] font-satoshi font-[700] text-[21px] text-start mt-[52px] lg:mt-0'>Subscribe Now</h3>
            <p className='text-[#FFF] font-satoshi font-[400] text-[18px] text-start'>Stay update with our <br />newsletter</p>
            <input className='h-[54px] min-w-[250px] max-w-[320px] lg:w-[319px] mt-[10px] pl-[20px] ml-[-7px] text-[#000]' placeholder="Email Address"/><button className='bg-[#002BF3] h-[54px] pt-[5px] w-[50px]'> <img className='pl-[14px]' src={arrow} alt="Icon Image" /></button>
          </div>
        </div>
      </div>
      <div className='flex py-[40px]'>
        <img src={CopyRight_img} alt="Icon Image" />
        <p className='text-[#F0F0F0] font-satoshi font-[400] text-[16px]'>Craftlabs 2023 . All Rights Reserved     </p>
      </div>
    </div>
  )
}

export default Footer