import React, { useRef, useEffect } from 'react';

const ScrollBig = () => {
  const textContainerRef1 = useRef(null);
  const textContainerRef2 = useRef(null);

  useEffect(() => {
    const textContainer1 = textContainerRef1.current;
    const textContainer2 = textContainerRef2.current;

    const scrollWidth1 = textContainer1.scrollWidth;
    const scrollWidth2 = textContainer2.scrollWidth;
    const containerWidth = textContainer1.clientWidth;

    const scrollText1 = () => {
      const animation = textContainer1.animate(
        [
          { transform: 'translateX(0)' },
          { transform: `translateX(-${scrollWidth1}px)` }
        ],
        {
          duration: 15000, // Adjust this value to control the speed of scrolling
          iterations: Infinity
        }
      );

      return animation;
    };

    const scrollText2 = () => {
      const animation = textContainer2.animate(
        [
          { transform: `translateX(-${scrollWidth2}px)` },
          { transform: 'translateX(100)' }
        ],
        {
          duration: 15000, // Adjust this value to control the speed of scrolling
          iterations: Infinity
        }
      );

      return animation;
    };

    const animation1 = scrollText1();
    const animation2 = scrollText2();

    return () => {
      animation1.cancel();
      animation2.cancel();
    };
  }, []);

  return (
    <div className='h-[330px] overflow-hidden hidden lg:block xl:block'>
      <div className='mt-[150px]' ref={textContainerRef1}>
        <pre className='text-[#FFFFFF] font-satoshi text-[56px] font-[300] leading-[67px]'>Web Design    No-code Development    Motion Design    Motion Design    Graphic Design    Web Development    UI/UX Design    Web Design    No-code Development    Motion Design    Motion Design    Graphic Design    Web Development    UI/UX Design</pre>
      </div>
      <div className='mt-4' ref={textContainerRef2}>
        <pre className='text-[#FFFFFF] font-satoshi text-[56px] font-[300] leading-[67px]'>Motion Design    Motion Design    Web Design    No-code Development    UI/UX Design    Web Development     Graphic Design</pre>
      </div>
    </div>
  );
};

export default ScrollBig;
