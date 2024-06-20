import React from 'react';
import logo from '../assets/craftlab_blue_icon.svg';
import logo_craftlab from '../assets/craftlab_logo.svg';
import menu from '../assets/Navbar/Menu.svg';

const Navbar = () => {
  return (
    <div className='flex justify-between mx-[22px] sm:mx-[42px] bg-black '>
      <div className='flex  mt-5 '>
        <a className='flex ' href='#'>
          <img src={logo} alt="logo" className='mr-1'/>
          <img src={logo_craftlab} alt="logo"/>
        </a>
      </div>
      <div className='mt-5 hidden lg:block'>
        <a className='font-satoshi text-[#FFFFFF] text-[20px] font-medium mr-[30px]'>Services</a>
        <a className='font-satoshi text-[#FFFFFF] text-[20px] font-medium mr-[30px]'>Projects</a>
        <a className='font-satoshi text-[#FFFFFF] text-[20px] font-medium mr-[30px]'>About</a>
        <button className='font-satoshi text-[#FFFFFF] bg-[#001AFF] p-2 px-6 text-[20px] font-medium'>Contact Us</button>
      </div>
      <div className='text-[#FFF] lg:hidden flex'>
        <p className=' font-satoshi text-[15px] font-500px mt-8'>Menu</p>
        <img className='mt-6 ml-1 cursor-pointer' src={menu} alt="Image Icon" />
      </div>
    </div>
  )
}

export default Navbar