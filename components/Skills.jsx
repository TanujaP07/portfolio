import Image from 'next/image';
const Skills = () => {
    return(
        <div id='skills' className='w-full lg:h-screen p-2'>
            <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
                <p className='text-xl tracking-widest uppercase text-purple-800'>Skills</p>
                <h2 className='py-4'>What I Can Do</h2>
                <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src ='/../public/assets/skills/html.png' alt='/' width='64' height='64'  />
                                </div> 
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>HTML</h3>
                                </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src ='/../public/assets/skills/css.png' alt='/' width='64' height='64'  />
                                </div> 
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>CSS</h3>
                                </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src ='/../public/assets/skills/angular.png' alt='/' width='64' height='64'  />
                                </div> 
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>Angular</h3>
                                </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src ='/../public/assets/skills/aws.png' alt='/' width='64' height='64'  />
                                </div> 
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>AWS</h3>
                                </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src ='/../public/assets/skills/tailwind.png' alt='/' width='64' height='64'  />
                                </div> 
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>Tailwind</h3>
                                </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src ='/../public/assets/skills/github1.png' alt='/' width='64' height='64'  />
                                </div> 
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>Github</h3>
                                </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src ='/../public/assets/skills/node.png' alt='/' width='64' height='64'  />
                                </div> 
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>Node js</h3>
                                </div>
                        </div>
                    </div>
                    <div className='p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300'>
                        <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                            <div className='m-auto'>
                                <Image src ='/../public/assets/skills/nextjs.png' alt='/' width='64' height='64'  />
                                </div> 
                                <div className='flex flex-col items-center justify-center'>
                                    <h3>Next js</h3>
                                </div>
                        </div>
                    </div>
            </div>
            </div>
        </div>
    )
}
export default Skills; 