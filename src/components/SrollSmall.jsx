import React, { useState, useEffect, useRef } from 'react';
import icon from '../assets/ScrollSmall_img/icon.svg';

const SrollSmall = () => {
  const scrollContainerRef = useRef(null);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(true);
    };

    const scrollContainer = scrollContainerRef.current;
    scrollContainer.addEventListener('scroll', handleScroll);

    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;

    if (isScrolling) {
      const scrollInterval = setInterval(() => {
        scrollContainer.scrollLeft += 1;
      }, 20);

      return () => {
        clearInterval(scrollInterval);
      };
    }
  }, [isScrolling]);

  return (
    <div
      className="bg-[#002BF3] flex py-[16px] overflow-x-scroll whitespace-nowrap scroll-smooth no-scrollbar"
      ref={scrollContainerRef}
    >
      <div className="flex animate-marquee">
        <p className="text-[#FFF] text-[18px] font-satoshi font-[700] mr-[53px]">Web Design</p>
        <img className="mr-[53px]" src={icon} alt="Image" />
        <p className="text-[#FFF] text-[18px] font-satoshi font-[700] mr-[53px]">Branding</p>
        <img className="mr-[53px]" src={icon} alt="Image" />
        <p className="text-[#FFF] text-[18px] font-satoshi font-[700] mr-[53px]">Web Development</p>
        <img className="mr-[53px]" src={icon} alt="Image" />
        <p className="text-[#FFF] text-[18px] font-satoshi font-[700] mr-[53px]">Graphic Design</p>
        <img className="mr-[53px]" src={icon} alt="Image" />
        <p className="text-[#FFF] text-[18px] font-satoshi font-[700] mr-[53px]">No-code Development</p>
        <img className="mr-[53px]" src={icon} alt="Image" />
        <p className="text-[#FFF] text-[18px] font-satoshi font-[700] mr-[53px]">Motion Graphics</p>
      </div>
      <div className="flex animate-marquee">
        <img className="mr-[53px]" src={icon} alt="Image" />
        <p className="text-[#FFF] text-[18px] font-satoshi font-[700] mr-[53px]">Branding</p>
        <img className="mr-[53px]" src={icon} alt="Image" />
        <p className="text-[#FFF] text-[18px] font-satoshi font-[700] mr-[53px]">Web Development</p>
        <img className="mr-[53px]" src={icon} alt="Image" />
        <p className="text-[#FFF] text-[18px] font-satoshi font-[700] mr-[53px]">Graphic Design</p>
        <img className="mr-[53px]" src={icon} alt="Image" />
        <p className="text-[#FFF] text-[18px] font-satoshi font-[700] mr-[53px]">No-code Development</p>
        <img className="mr-[53px]" src={icon} alt="Image" />
        <p className="text-[#FFF] text-[18px] font-satoshi font-[700] mr-[53px]">Motion Graphics</p>
      </div>
    </div>
  );
};

export default SrollSmall;