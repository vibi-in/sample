import { useState } from 'react';
import branding_img from '../assets/Service_img/branding_img.png';
import arrow_img from '../assets/Service_img/arrow_img.svg';
import lap_img from '../assets/Service_img/lap_img.png';
import mobile_img from '../assets/Service_img/mobile_img.png';
import dev_img from '../assets/Service_img/dev_img.svg';
import digi_lap_img from '../assets/Service_img/lap_img.svg';

const Sevices = () => {
  const [isHovered1, setIsHovered1] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);
  const [isHovered3, setIsHovered3] = useState(false);
  const [isHovered4, setIsHovered4] = useState(false);
  return (
    <div className='bg-[#FFF] flex flex-col pb-[50px] mt-[-50px] pl-[24px] pr-[24px] lg:pl-[120px] lg:pr-[120px]'>
      <div className='mt-[117px] '>
        <button className='bg-[#002BF3] rounded-[71px] py-[13px] px-[18px] text-[#FFFFFF] font-satoshi text-[20px] font-[400] flex'>Our Sevices</button>
        <p className=' font-clash text-[#000] text-[30px] lg:text-[50px] font-[500] leading-[35px] lg:leading-[58px] mt-[20px] h-[116px] flex'>Elevate Your Brand <br /> Ignite Your Success</p>
      </div>
      <div className='flex mt-[20px] lg:mt-[80px] flex-wrap lg:flex-nowrap xl:flex-nowrap'>
      <div className={`relative w-full lg:w-[303px] h-[370px] mb-[24px] lg:mb-0 lg:mr-[20px] ${isHovered1 ? 'lg:w-[400px]' : ''} hover:duration-300 bg-[#FEEFDB]`} onMouseEnter={() => setIsHovered1(true)} onMouseLeave={() => setIsHovered1(false)}>
          <p className='font-satoshi text-[30px] lg:text-[35px] text-[#000] font-[700] flex mt-6 ml-5'>Branding</p>
          <div className="absolute inset-0 flex justify-center items-center ">
                    <p className='font-satoshi text-[#000] text-[16px] font-[400] text-start ml-5 pr-[20px] mt-[-150px] lg:hidden xl:hidden '>
                      Elevate your identity with our comprehensive branding: logos, colors, typography, and visual storytelling.
                    </p>
              {isHovered1 ? (
                  <p className='font-satoshi text-[#000] text-[16px] font-[400] text-start ml-5 pr-[20px] mt-[-120px] '>
                      Elevate your identity with our comprehensive branding: logos, colors, typography, and visual storytelling.
                  </p>
              ) : null}
          </div>
          <img className="absolute bottom-0 right-0 w-full h-full object-cover " src={branding_img} alt="Image" />
      </div>
      <div className={`relative w-full lg:w-[303px] h-[370px] mb-[24px] lg:mb-0 lg:mr-[20px] ${isHovered2 ? 'lg:w-[400px]' : ''} hover:duration-300 bg-[#ECF0F3]`} onMouseEnter={() => setIsHovered2(true)} onMouseLeave={() => setIsHovered2(false)}>
          <p className='font-satoshi text-[30px] lg:text-[35px] text-[#000] font-[700] flex mt-6 ml-5 text-start leading-[40px]'>Experience Design</p>
          <div className="absolute inset-0 flex justify-center items-center ">
                    <p className='font-satoshi text-[#000] text-[16px] font-[400] text-start ml-5 pr-[20px] mt-[-150px] lg:hidden xl:hidden '>
                        Enhancing digital experiences with intuitive UI and seamless UX design solutions that captivate and engage.
                    </p>
              {isHovered2 ? (
                  <p className='font-satoshi text-[#000] text-[16px] font-[400] text-start ml-5 pr-[20px] mt-[-140px] '>
                      Enhancing digital experiences with intuitive UI and seamless UX design solutions that captivate and engage.
                  </p>
              ) : null}
          </div>
          <img className="absolute bottom-0 right-0 w-full object-cover " src={lap_img} alt="Image" />
          <img className="absolute bottom-0 object-cover " src={mobile_img} alt="Image" />
      </div>
      <div className={`relative w-full lg:w-[303px] h-[370px] mb-[24px] lg:mb-0 lg:mr-[20px] ${isHovered3 ? 'lg:w-[400px]' : ''} hover:duration-300 bg-[#F1F8E9]`} onMouseEnter={() => setIsHovered3(true)} onMouseLeave={() => setIsHovered3(false)}>
          <p className='font-satoshi text-[30px] lg:text-[35px] text-[#000] font-[700] flex mt-6 ml-5'>Development</p>
          <div className="absolute inset-0 flex justify-center items-center ">
                    <p className='font-satoshi text-[#000] text-[16px] font-[400] text-start ml-5 pr-[20px] mt-[-150px] lg:hidden xl:hidden '>
                        We bring visions to life through expert web development, uniting design and functionality seamlessly.
                    </p>
              {isHovered3 ? (
                  <p className='font-satoshi text-[#000] text-[16px] font-[400] text-start ml-5 pr-[20px] mt-[-120px] '>
                      We bring visions to life through expert web development, uniting design and functionality seamlessly.
                  </p>
              ) : null}
          </div>
          <img className="absolute bottom-0 right-0 object-cover mx-[-28px] " src={dev_img} alt="Image" />
      </div>

      <div className={`relative w-full lg:w-[303px] h-[370px] lg:mr-[20px] ${isHovered4 ? 'lg:w-[400px]' : ''} hover:duration-300 bg-[#E2E7FF]`} onMouseEnter={() => setIsHovered4(true)} onMouseLeave={() => setIsHovered4(false)}>
          <p className='font-satoshi text-[30px] lg:text-[35px] text-[#000] font-[700] flex mt-6 ml-5'>Digital Design</p>
          <div className="absolute inset-0 flex justify-center items-center ">
                    <p className='font-satoshi text-[#000] text-[16px] font-[400] text-start ml-5 pr-[20px] mt-[-150px] lg:hidden xl:hidden'>
                        Empower your brand with captivating digital content. From graphics to videos and motion, we fuel social media .
                    </p>
              {isHovered4 ? (
                  <p className='font-satoshi text-[#000] text-[16px] font-[400] text-start ml-5 pr-[20px] mt-[-120px] '>
                      Empower your brand with captivating digital content. From graphics to videos and motion, we fuel social media .
                  </p>
              ) : null}
          </div>
          <img className="absolute bottom-0 right-0 w-full object-cover " src={digi_lap_img} alt="Image" />
      </div>
      </div>
      <div>
      <button className='bg-[#FFF] mt-[30px] w-full relative h-[60px] font-satoshi text-[20px] font-[600] text-[#000] text-start px-[24px] lg:w-[206px] border-2 border-[#000]'>
          View all works
          <img className='absolute top-1/2 right-0 transform -translate-y-1/2 pr-[20px] pt-0.5 ' src={arrow_img} alt="Arrow" />
        </button>
      </div>
    </div>
  )
}

export default Sevices