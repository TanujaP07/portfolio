import React from 'react'
import Link from 'next/link';
import ContactImg from '/../public/assets/contact.png'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { HiOutlineChevronDoubleUp } from 'react-icons/hi'

const Contact = () => {
  return (
    <div id='contact' className='w-full lg:h-screen'>
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full '>
        <p className='text-xl tracking-widest uppercase text-purple-800'>Contact</p>
        <h2 className='py-4'>Contact Me</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
            {/* left-side */}
            <div className='col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
                <div className='lg:p-4 h-full '>
                    <div>
                        {/*<img className ='rounded-xl hover:scale-105 ease-in duration-300' src="https://img.freepik.com/free-vector/contact-us-concept-illustration_114360-2299.jpg?w=740&t=st=1674967737~exp=1674968337~hmac=046d9a0269703277644a1206e9c9d37fd0e4c1bf5be6d937075ff6d00b9ea669" alt='Contact on'/>*/}
                        <Image className = 'rounded-xl hover:scale-105 ease-in duration-300' src={ContactImg} alt="/" width='400' height='55'/>
                    </div>
                    <div>
                    <h2 className='py-2'>Tanuja Pyneni</h2>
                    <p>Full-Stack Developer</p>
                    <p className='py-4'>
                    I am available for freelance or full-time positions. Contact me.
                    </p>
                    </div>
                    <div>
                <p className='uppercase pt-8'>Connect With Me</p>
                <div className='flex items-center justify-between py-4'>
                <a
                    href='https://www.linkedin.com/in/tanuja-pyneni-121373169/'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaLinkedinIn/>
                    </div>
                    </a>
                    <a
                    href='https://github.com/TanujaP07'
                    target='_blank'
                    rel='noreferrer'
                  >
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <FaGithub />
                    </div>
                    </a>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <AiOutlineMail/>
                    </div>
                    <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                    <BsFillPersonLinesFill/>
                    </div>
                </div>
            </div>
        </div> 
        </div>
        {/* right-side*/} 
        <div className='col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
        <div className='p-4'>
            <form
                action='https://getform.io/f/328f984c-0601-4562-9e10-eb209ee508f3'
                method='POST'
                encType='multipart/form-data'>

                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                <div className='flex flex-col'>
                <label className='uppercase text-sm py-2'>Name</label>
                <input
                      className='border-2 rounded-lg p-3 flex border-gray-300' type='text'name='name'/>
                    </div> 
                    <div className='flex flex-col'>
                <label className='uppercase text-sm py-2'>Phone Number</label>
                <input className='border-2 rounded-lg p-3 flex border-gray-300' type='tel'name='phone'/>
                    </div>
                    </div>
                    <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300' type='email' name='email'/>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input
                    className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name='subject'/>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea
                    className='border-2 rounded-lg p-3 border-gray-300' rows='10' name='message'>
                    </textarea>
                </div>
                <button className='w-full p-4 text-gray-100 mt-4'>
                  Send Message
                </button>
            </form>
        </div>
        </div>
    </div>
    <div className='flex justify-center py-12'>
          <Link href='/'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleUp className='text-[#5651e5]'size={30}/>
                </div>
                </Link>
    </div>
</div>
</div>
  )
}
export default Contact