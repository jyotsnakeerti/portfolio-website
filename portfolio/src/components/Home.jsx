import React from 'react';
// import { HiArrowNarrowRight } from 'react-icons/hi';
// import photo from '../assests/photo.jpeg'

const Home = () => {
  return (

    <div name='home' className='w-full h-screen bg-[#171010] font-serif'>
  <div className='max-w-[1000px] mx-auto px-8 flex flex-col lg:flex-row justify-center h-full'>
    <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start">
      <p className='text-pink-600'>Hello, my name is</p>
      <h1 className='text-4xl sm:text-5xl lg:text-5xl font-bold text-[#ccd6f6] p-1'>
        JYOTSNA KEERTI
      </h1>
      <h2 className='text-4xl sm:text-5xl lg:text-5xl font-bold text-[#8892b0] p-1'>
        I'm a Front-end Developer.
      </h2>
      <p className='text-[#8892b0] py-4 max-w-[700px]'>
        I'm a front-end developer with expertise in crafting engaging and user-friendly digital interfaces. My primary focus revolves around creating captivating and responsive web applications using React. I'm dedicated to turning design concepts into interactive, high-performance, and visually appealing user experiences.
      </p>
      <div>
        {/* <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
          Download Resume
        </button> */}
         <a
    className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'
    href='https://drive.google.com/file/d/1qrWx558yohv_QiCABKZycSq5XD6YmGAW/view?usp=drive_link'
    download="YourResume.pdf"
  >
    Download Resume
  </a>
      </div>
    </div>
    {/* <div className="w-full lg:w-1/2 order:1 flex  justify-center items-center ">
      <div className="w-64 h-64 bg-[#ccd6f6] rounded-full overflow-hidden transform hover:scale-105 transition-transform animate-bounce  ">
        <img
          src={photo}
          alt="Your Profile Image"
          className="object-cover w-full h-full"
        />
      </div>
    </div> */}

  </div>
</div>


  );
};

export default Home;