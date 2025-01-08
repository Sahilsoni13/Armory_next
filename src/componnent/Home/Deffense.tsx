import React from 'react'
import DeffenseLogo from "@/../public/images/defensetext.gif"
import DeffenseBg from "@/../public/images/deffenseimg.png"
import WhiteCard1 from "@/../public/images/defensebox1bg.png"
import WhiteCard2 from "@/../public/images/defensebox2bg.png"
import WhiteCard3 from "@/../public/images/defensebox3bg.png"
import Corner from "@/../public/images/corners.png"
import Bgeffect6 from "@/../public/images/bgeffect6.png"
import Button from '../ui/Button'
import Image from 'next/image'

const Deffense = () => {
    return (
        <>
            <section id='defensesection' className='bg-black pb-20  min-[991px]:pb-[133px]  relative'>
                <Image className=' md:block hidden absolute left-0 top-[30%] animate-flicker' src={Bgeffect6} alt="bgeffect6" />
                <div className='max-w-[1440px] mx-auto  relative  z-20'>
                    <Image className='absolute top-[-200px] left-[-50px] max-w-[640px] z-[-40] w-full max-h-[740px] object-contain ' src={Corner} alt="cornerbg" />
                    <div className='max-w-[1230px] w-full mx-auto px-5 relative z-10'>
                        <Image className='max-w-[1190px] w-full mx-auto' src={DeffenseLogo} alt="defense heading" />
                        <div className='mt-[60px] relative'>
                            <Image className='max-w-[937px] w-full mx-auto ' src={DeffenseBg} alt="defensebg" />
                            <div className='mt-5 lg:mt-0 lg:absolute bottom-[-20px] right-[170px]  z-20'>
                                <Button varient='solid' buttonClass='p-[11px] text-base leading-4'  >explore features</Button>
                            </div>
                        </div>
                        <div className='mt-10 lg:mt-0 relative z-10 flex flex-wrap items-start gap-5  lg:grid sm:grid-cols-2 lg:grid-cols-3 justify-center '>
                            <div className='relative  max-w-[380px] w-full   flex flex-col items-center lg:mt-[-78px] ' >
                                <Image className='absolute w-full h-full' src={WhiteCard1} alt="whiterborder" />
                                <div className='flex items-center gap-x-2 px-4 pt-7'>
                                    <h2 style={{ textShadow: "0px 0px 20px #2972D7" }} className='font-gothicMdbt font-normal text-[100px] leading-[80px] md:leading-[104px] text-white relative z-10 drop-shadow-custom'>1</h2>
                                    <p className='font-gothicMdbt font-normal text-xl sm:text-[28px] sm:leading-6 text-white relative z-10'>Unmatched Attack Surface Coverage</p>
                                </div>
                                <p className=' font-inter font-normal text-base sm:text-[21px] sm:leading-[29.4px] text-start text-body_text z-10 relative  px-4 line-clamp-6 mb-9 md:mt-2'>Go beyond EASM basics with deep insights into sensitive data, exposed assets, vulnerabilities, and real-world attack simulations to fortify your defenses comprehensively.</p>
                            </div>
                            <div className='relative max-w-[380px] w-full  sm:pt-0  flex flex-col items-center lg:mt-[70px] ' >
                                <Image className='absolute  w-full h-full' src={WhiteCard2} alt="whiterborder" />
                                <div className='flex items-center gap-x-2 px-4 pt-7'>
                                    <h2 style={{ textShadow: "0px 0px 20px #2972D7" }} className='font-gothicMdbt font-normal text-[100px]  leading-[80px] md:leading-[104px] text-white relative z-10 drop-shadow-custom'>2</h2>
                                    <p className='font-gothicMdbt font-normal text-xl sm:text-[28px] sm:leading-6 text-white relative z-10'>Beyond Alerts: AI-Driven Actions</p>
                                </div>
                                <p className='font-normal font-inter text-base sm:text-[21px] sm:leading-[29.4px] text-start md:mt-2 text-body_text z-10 relative px-4 line-clamp-5 pb-[34px]'>Eliminate the noise with AI-powered prioritization, delivering actionable insights that guide your next move and ensure impact.</p>
                            </div>
                            <div className='relative max-w-[380px] w-full   flex flex-col items-center lg:mt-[211px] ' >

                                <Image className='absolute  w-full h-full' src={WhiteCard3} alt="whiterborder" />
                                <div className='flex items-center gap-x-2 px-4 pt-7'>
                                    <h2 style={{ textShadow: "0px 0px 20px #2972D7" }} className='font-gothicMdbt font-normal text-[100px] leading-[80px] md:leading-[104px] text-white relative z-10 drop-shadow-custom'>3</h2>
                                    <p className='font-gothicMdbt font-normal text-xl sm:text-[28px] sm:leading-6 text-white relative z-10'>Designed by Hackers, Built for You</p>
                                </div>
                                <p className='font-normal font-inter text-base sm:text-[21px] sm:leading-[29.4px] text-start md:mt-2 pb-9 text-body_text z-10 relative  px-4 line-clamp-4 '>A platform inspired by hacker tools but tailored for your team's efficiency and ease of use.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Deffense