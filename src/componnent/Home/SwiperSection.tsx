import React from 'react'
import Bgeffect8 from "@/../public/images/swiperelipse.png"
import Image from 'next/image'
const SwiperSection = () => {
    return (
        <>
            {/* custom commas */}
            <section id='swipersection' className='relative'>
                <Image className='absolute right-0 bottom-[0px] xl:block hidden animate-flicker' src={Bgeffect8} alt="elipse" />
                <div className='max-w-[1051px] w-full mx-auto md:pt-[10px] md:pb-[120px] pb-[80px] px-[20px]' >
                    <div className=" relative after:absolute after:left-0 after:h-[54px] after:w-[23px] before:top-[-11px]  before:right-0 before:absolute before:bg-[url('@/../public/icons/leftarrow.svg')] after:bottom-[-19px] after:bg-[url('@/../public/icons/rightarrow.svg')] before:h-[52px] before:w-[23px]  pb-8 pt-[47px] ">
                        <h2 className=" uppercase max-w-[870px] font-[300] w-full mx-auto text-wrap  text-center text-lg sm:text-[26px] sm:leading-[31.2px] font-gothiclight  relative 
                            after:content-['“']
                            after:custom-glow
                            after:text-[80px] 
                            after:leading-[52.34px]
                            after:font-gothicMdbt
                            after:left-0
                            sm:after:top-[-49px]
                            after:top-[-69px]
                            after:absolute
                            lg:after:left-[-58px] 
                            md:after:left-[-11px] 
                             after:w-[47px]
                       after:h-[87px]
                           before:content-['”']
                            before:text-[80px] 
                            before:custom-glow
                            before:leading-[52.34px]
                            before:font-gothicMdbt
                          before:text-white
                        text-white
                          before:absolute before:right-0  lg:before:right-[-42px] before:bottom-[-70px] lg:before:bottom-[-50px]
                           before:w-[47px]
                            before:h-[87px]"
                        >
                            Armory is all about < span className='text-[#2972D7] ' > no bullshit</span > cybersecurity threat detection and prioritization. We will < span className=' text-[#2972D7]'> constantly challenge</span >  your vulnerabilities by mimicking Black Hat Attacks so your < span className=' text-[#FF2F00]'> critical threats</span >  won't get lost in the clutter.
                        </h2>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SwiperSection

