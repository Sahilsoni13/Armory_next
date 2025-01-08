import React from 'react'
import Dummy2 from "@/../public/images/dummy2.png"
import Border from "@/../public/images/border.png"
import Bgeffect7 from "@/../public/images/bgeffect7.png"
import Globalborder from "@/../public/images/globalborder.png"
import Image from 'next/image'
import Button from '../ui/Button'

const Global = () => {
    return (
        <>
            <section id='globalsection' className='pb-10 sm:pb-20  lg:pb-[137.95px] relative z-20'>
                <Image className='absolute top-0 right-0 animate-flicker' src={Bgeffect7} alt="elipse" />
                <Image className='absolute top-0 right-0' src={Globalborder} alt="globalborder" />
                <div className='max-w-[1200px] w-full mx-auto px-5'>
                    <div>
                        <h2 style={{ textShadow: "0px 0px 20px #2972D7" }} className=' text-nowrap sm:text-[26px] text-[25px] sm:text-4xl md:text-[50px] text-white text-center font-gothic leading-[52px]  drop-shadow-custom '>    // GLOBAL WAR ROOMS</h2>
                        <div className='mt-5 md:mt-[60px] '>
                            <Image className='max-w-[1033px] w-full relative' src={Dummy2} alt="dummyImage" />
                            <div className='flex flex-col items-end justify-end md:mt-[-35px] relative'>

                                <div className='px-5 sm:px-[34px] pt-8 pb-[45.5px] max-w-[937px] w-full relative ' >
                                    <Image src={Border} className='absolute top-0 bottom-0 left-0 right-0 max-[1024px]:h-[243px]' alt="border" />
                                    <h3 className='text-white font-gothicMdbt leading-6 text-base sm:text-[28px] text-start max-w-full sm:truncate relative z-10'>Your Protection, Our Priority </h3>
                                    <p className='text-body_text mt-1 sm:mt-6 text-start text-xs min-[500px]:text-sm md:text-[21px] md:leading-[30px] sm:line-clamp-4 relative z-10 font-inter'>At the heart of Armory's operations are three global war-rooms located in Israel, Mexico, and London. Using a 'follow the sun' model to ensure around-the-clock protection, elite hackers pilot Armory's systems, relentlessly testing and challenging defenses to stay ahead of evolving cyber threats.</p>

                                    <div className='mt-5 md:mt-0 md:absolute bottom-[-16px] right-[45px] '>
                                        <Button varient='solid' buttonClass='py-[11px] md:px-4 px-3 text-base leading-4'  >Discover our war rooms</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>)
}

export default Global

