import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full md:h-screen bg-[#171010] flex justify-center items-center p-4'>
        <form method='POST' action="https://formkeep.com/f/33cea00ce576"
   accept-charset="UTF-8" enctype="multipart/form-data" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-5'>
              <br /><br /><br />
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-3'> Submit the form below or shoot me an email - jyotsnakeerti4@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="6" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact