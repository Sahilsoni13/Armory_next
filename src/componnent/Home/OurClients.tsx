import React from 'react'
import poollogo from "@/../public/images/poollogo.png"
import vaultlogo from "@/../public/images/vaultlogo.png"
import tupoonlogo from "@/../public/images/typoonlogo.png"
import Image from 'next/image'

const Ourclients = () => {
    return (
        <>
            <section id='clientsection' className="relative z-40 after:hidden after:lg:block after:absolute after:max-w-[267px] after:w-full after:h-[350px] after:top-0 after:right-0 after:m after:bg-[url('@/../public/images/angleright.png')] pb-10 sm:pb-20 lg:pb-[120px] " >
                <div className='container' >
                    <div className="">
                        <h2 style={{ textShadow: "0px 0px 20px #2972D7" }} className=' text-nowrap text-[24px] sm:text-4xl md:text-[50px] text-white text-center font-gothic md:leading-[52px]  drop-shadow-custom '>
                         // AMONG OUR CLIENTS
                        </h2>
                        <div className='flex flex-wrap  gap-5 lg:gap-[120px] items-center pt-10  sm:pt-[60px] justify-center ' >
                            <Image className='max-w-[100px] sm:max-w-[162px] w-auto' src={tupoonlogo} alt="img1" />
                            <Image className='max-w-[100px] sm:max-w-[164px] w-auto' src={vaultlogo} alt="img2" />
                            <Image className='max-w-[100px] sm:max-w-[125px] w-auto' src={poollogo} alt="img3" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Ourclients


