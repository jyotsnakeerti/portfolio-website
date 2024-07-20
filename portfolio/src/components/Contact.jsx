// import React from 'react'

// const Contact = () => {
//   return (
//     <div name='contact' className='w-full md:h-screen bg-[#171010] flex justify-center items-center p-4'>
//         <form method='POST' action="https://formkeep.com/f/33cea00ce576"
//    accept-charset="UTF-8" enctype="multipart/form-data" className='flex flex-col max-w-[600px] w-full'>
//             <div className='pb-5'>
//               <br /><br /><br />
//                 <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
//                 <p className='text-gray-300 py-3'> Submit the form below or shoot me an email - 
//                 <a href="mailto:jyotsnakeerti4@gmail.com" className='text-pink-600 hover:underline'> jyotsnakeerti4@gmail.com</a></p>
//             </div>
//             <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
//             <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
//             <textarea className='bg-[#ccd6f6] p-2' name="message" rows="6" placeholder='Message'></textarea>
//             <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Send</button>
//         </form>
//     </div>
//   )
// }

// export default Contact

import React, { useState } from 'react';

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: 'POST',
        body: data,
        headers: {
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        // Redirect after 5 seconds
        setTimeout(() => {
          window.location.href = 'https://jyotsnakeerti.github.io/portfolio-website/'; 
        }, 3000);
      } else {
        console.error('Form submission error');
        setIsSubmitting(false);
      }
    } catch (error) {
      console.error('Form submission error', error);
      setIsSubmitting(false);
    }
  };

  return (
    <div name='contact' className='w-full md:h-screen bg-[#171010] flex justify-center items-center p-4'>
      {isSubmitted ? (
        <div className='text-center text-gray-300'>
          <h1 className='text-4xl font-bold'>Thank You!</h1>
          <p>Your message has been sent successfully. You will be redirected back to the portfolio page shortly.</p>
        </div>
      ) : (
        <form 
          method='POST' 
          action="https://formkeep.com/f/33cea00ce576" 
          acceptCharset="UTF-8" 
          encType="multipart/form-data" 
          className='flex flex-col max-w-[600px] w-full'
          onSubmit={handleSubmit}
        >
          <div className='pb-5'>
            <br /><br /><br />
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
            <p className='text-gray-300 py-3'>
              Submit the form below or shoot me an email - 
              <a href="mailto:jyotsnakeerti4@gmail.com" className='text-pink-600 hover:underline'> jyotsnakeerti4@gmail.com</a>
            </p>
          </div>
          <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' required />
          <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' required />
          <textarea className='bg-[#ccd6f6] p-2' name="message" rows="6" placeholder='Message' required></textarea>
          <button 
            type='submit' 
            className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send'}
          </button>
        </form>
      )}
    </div>
  );
};

export default Contact;
