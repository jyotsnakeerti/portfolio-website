import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#171010] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Jyotsna Keerti, nice to meet you.</p>
            </div>
            <div>
              <p className='text-base'> I'm a Information Science Student at CMR Institute Of Technology with a strong passion for problem-solving and coding. My technical expertise spans React, MongoDB, Firebase, Java etc. I enjoy creating applications that address real-world issues, impacting users on a large scale. My goal is to bring innovative solutions to life and make a positive contribution to the tech community."</p>
            
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;