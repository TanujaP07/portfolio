import React from 'react'
import Image from 'next/image'

const About =() => {
    return(
        <div id= 'about' className = 'w-full md:h-screen p-2 flex items-center py-16'>
            <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
                <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-purple-800'>
                About </p> 
                <h2 className='py-4'>Who I Am</h2>

          <p className='py-2 text-gray-600 text-justify'>
            I have a Bachelors and Masters in Computer Science. I worked for 1 year during my 4th year of undergrad. 
            I also worked as a Graduate teaching assistant at UNT for the department of Computer Science where I was responsible for managing 
            over 600 students and taking classes over a period of 1.5 years. I worked with professors for courses like Fundamentals of Databases, Human Computer Interfaces and Secure E-commerce,
            I specialize in building web and mobile responsive front-end UI applications that connect with API’s and other backend technologies. 
            I am a quick learner and am passionate about learning new technologies, can pick up new tech developments as needed. 
            I also understand there is always more than one way to accomplish a task. 
            Though I have always been more focused on front-end technologies and frameworks like NextJs, Angular, React, 
            I would like to start working on the back-end too.
            I believe that being a great developer is not just being able to use one specific language, 
            but being able to choose the best tool for the job.
          </p>
          <p className='py-2 text-gray-600 text-justify'>
            I started web developement in 2013 managing multiple e-commerce
            websites on CMS platforms such as WordPress, BigCommerce, and
            Shopify. I have experience working directly with clients and taking
            mock wireframes all the way to deployed applications. In my spare
            time I work on Leetcode, freelance and also have a art page on Instagram where I post my sketches.
          </p>
          <p className='py-2 text-gray-600 underline cursor-pointer hover:text-purple-800'>
              You can checkout some of my projects here.
            </p>
                </div>
                <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                    {/*<img className='rounded-xl'alt='/' src ="https://www.springboard.com/blog/wp-content/uploads/2019/07/sb-blog-programming.png"/>*/}
                    <Image className='rounded-xl'src="/../public/assets/about.png" alt="/" width='500' height='50'/>
                </div>
            </div>
        </div>

    )
}

export default About
