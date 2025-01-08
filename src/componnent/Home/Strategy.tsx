import React from 'react';
import side from "@/../public/images/sideeffect.png";
import WhiteCard2 from "@/../public/images/hackedouter.png";
import hackedAnimation from "@/../public/images/hackedAnimation.gif";
import Hackedelipse from "@/../public/images/hackedelipse.png";
import Hackedborder from "@/../public/images/hackedborder.png";
import bg7 from "@/../public/images/bgeffect8.png";

import Image from 'next/image';
import CustomersFeddback from './CustomerFeedback';
import RotatingCirclesWithIcons from './CircleAnimation';
import ContactArmory from './ContactArmory';

const Strategy = () => {
    return (
        <>
            <section id='strategysection' className='mb-[80px] md:mb-[120px] relative'>
                <Image src={Hackedelipse} className='absolute left-0 bottom-0 animate-flicker' alt="elipse" />
                <Image src={Hackedborder} className=' xl:block hidden absolute left-0 top-28' alt="hackedborder" />
                <div className='relative' >
                    <div className='container' >
                        <div>
                            <div className="relative text-nowrap after:absolute after:bg-[url('@/../public/images/strategylight.png')] after:top-0 after:left-0 after:right-0 after:bottom-0 z-30 after:bg-contain after:bg-top after:bg-no-repeat h-full ">
                                <h2 style={{ textShadow: "0px 0px 20px #2972D7" }} className=' text-white font-gothic text-[26px] sm:text-4xl md:text-[50px] text-center 
                         drop-shadow-custom pt-10 md:pt-20  relative z-20 '>// DEFENSE STRATEGY</h2>
                                <div className='xl:relative -top-20'>

                                    <RotatingCirclesWithIcons />
                                </div>
                            </div>
                        </div>
                    </div>
                    <Image className='hidden lg:block absolute max-[640px]:top-0  sm:top-[27%] max-[640px]:max-w-40' src={side} alt="side" />
                    <Image className='hidden lg:block absolute top-[22%] right-0' src={bg7} alt="bg7" />
                </div>
                <CustomersFeddback />
                <div id='contactsection' className='container'>
                    <div className='flex flex-col gap-5 md:gap-[60px] '>
                        <h3 className='drop-shadow-custom_red text-white text-[24px] sm:text-4xl md:text-[50px] md:leading-[52.34px] font-gothic text-center ' style={{ textShadow: "0px 0px 20px #FF0000" }} >// CAN YOU BE HACKED?</h3>
                        <div className=' grid place-items-center md:grid-cols-2 gap-10 items-center w-full' >
                            <div className='relative max-w-[465px] w-full flex flex-col items-center'>
                                <Image className='absolute top-0 bottom-10 left-0 right-0 w-full h-full ' src={WhiteCard2} alt="whiterborder" />
                                <ContactArmory />
                            </div>
                            <Image className='max-w-[603px] w-full' src={hackedAnimation} alt="hacked" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Strategy