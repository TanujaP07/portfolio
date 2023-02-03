import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaLinkedinIn, FaGithub } from 'react-icons/fa';
import MainImg from '../public/assets/profilePhoto.png';

const Main =() =>{
    return(
        <div id='home' className = 'flex items-center'>
            <Image className='rounded-lg object-scale-down h-48 lg:h-80 sm:w-10 md:w-32 lg:w-96 lg:pl-20 md:pl-5' src={MainImg} alt="/" width='500' height='50'/>
        <div className='w-full h-screen text-center'>
            <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
                <div className='flex flex-col'>
                    <p className='uppercase text-sm tracking-widest text-gray-600'>
                        I like building things for the web</p>
                        <h1 className= 'py-4 text-gray-700'>
                        Hi, I'm <span className= 'text-purple-800'>Tanuja</span></h1>
                        <h1 className='py-2 text-gray-700'>A Full-Stack Developer</h1>
                            <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
                            I design and build responsive front-end web applications integrating back-end technologies. 
                            I am passionate above about creating interactive applications and experience while learning back-end technologies</p>
                            <div className ='flex items-center justify-between my-4 max-w-[280px] m-auto sm:w-[80%]'>
                                <a
                                    href='https://www.linkedin.com/in/tanuja-pyneni-121373169/'
                                    target='_blank'
                                    rel='noreferrer'
                                >
                                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <FaLinkedinIn />
                                </div>
                                </a>
                                    <a
                                    href='https://github.com/TanujaP07'
                                    target='_blank'
                                    rel='noreferrer'
                                    >
                                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <FaGithub/>
                                </div>
                                </a>
                                <Link href='/#contact'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <AiOutlineMail/>
                                </div>
                                </Link>
                                <Link href='/resume'>
                                <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-105 ease-in duration-300'>
                                <BsFillPersonLinesFill/>
                                </div>
                                </Link>
                            </div>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Main;