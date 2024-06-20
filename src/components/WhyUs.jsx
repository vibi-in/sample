import { useState } from 'react';
import start_icon from '../assets/Why_img/star_img.svg';
import img1 from '../assets/Why_img/pic_1.svg';
import img2 from '../assets/Why_img/pic_2.svg';

const WhyUs = () => {
  const [activeTab, setActiveTab] = useState(null);

  const tabs = [
    { title: 'Design Expertise ✌️', description: 'Our skilled team delivers captivating UI/UX design, branding, and more, ensuring your brand stands out.' },
    { title: 'Tailored Solutions 👍', description: 'Tailored to your needs, our designs resonate with your audience, fostering a strong connection and driving results.' },
    { title: 'Full-Scale Services 👌', description: 'From branding to web development, motion graphics to video editing, we offer comprehensive design solutions.' },
    { title: 'Client-Centric Approach 🤝', description: 'Open communication, deadlines met, and exceptional results – partner with us for impactful designs and attentive service.' },
  ];

  const toggleTab = (index) => {
    setActiveTab(activeTab === index ? null : index);
  };

  return (
    <div className='bg-[#FFF] mt-[100px] pt-[80px] px-[24px] lg:px-[120px] lg:py-[120px] flex flex-col lg:flex-row pb-[50px]'>
      <div className="lg:w-1/2">
        <div>
          <button className='bg-[#002BF3] rounded-[71px] py-[13px] px-[18px] text-[#FFFFFF] font-satoshi text-[16px] lg:text-[20px] font-[400] mb-8 lg:mb-0 flex'>Why Us</button>
          <p className='font-clash text-[#000] text-[30px] lg:text-[50px] font-[500] leading-[35px] lg:leading-[58px] mt-[-10px] lg:mt-0 text-start lg:text-left mb-[30px]'>Discover Why We  <br /> Stand Out</p>
          <div className="max-w-md mx-auto lg:mx-0">
            <div className="space">
              {tabs.map((tab, index) => (
                <div key={index} >
                  <div
                    onClick={() => toggleTab(index)}
                    className="flex justify-between items-center cursor-pointer px-4 py-2 border-solid border-2 border-[#000] border-l-0 border-r-0 border-b-0 "
                  >
                    <span className="text-[#000] font-satoshi font-[700] text-[18px] lg:text-[24px] flex"><img className='mr-2' src={start_icon} alt="Bullet Image" />{tab.title}</span>
                    <svg
                      className={`w-4 h-[70px] transition-transform transform ${
                        activeTab === index ? 'rotate-0' : '-rotate-90'
                      }`}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </div>
                  {activeTab === index && (
                    <div className="p-4 bg-white">
                      <p className='text-start mt-[-20px] mb-[10px] text-[#4D4D4D] font-satoshi font-[400] text-18px'>{tab.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center lg:w-1/2'>
        <img className='mt-[100px]  max-w-full hidden xl:block' src={img1} alt="Image" />
        <img className='mb-[200px] max-w-full hidden xl:block' src={img2} alt="Image" />
      </div>
    </div>
  )
}

export default WhyUs;
