import React from 'react'
import dummy1 from "@/../public/images/dummy1.png"
import Image from 'next/image'
import Button from '../ui/Button'

const TheMission = () => {

    return (
        <>

            <section id='missionsection' className='relative max-w-[1440px] w-full mx-auto z-30 px-5 ' >
                <div className="bg-[url('@/../public/images/themissionimg.png')] bg-no-repeat bg-top bg-contain">
                    <div className="  pt-[40px] md:pt-[80px] xl:pt-[130px]  pb-[60px] xl:pb-[120px] xl:mt-[-35px] mt-6 " >
                        <div className='flex relative z-30 min-[1126px]:flex-row items-center justify-between flex-col max-w-[1160px] mx-auto  w-full' >
                            <Image className='min-[1126px]:max-w-[664px] w-full object-contain' src={dummy1} alt="dummy1" />
                            <div className='py-[29px] min-[1126px]:pl-5 pt-5 '>
                                <div className='flex flex-col gap-5 md:gap-[42px]  min-[1126px]:max-w-[380px] w-full items-start' >
                                    <h2 style={{ textShadow: "0px 0px 20px #2972D7" }}
                                        className="relative max-w-[280px] sm:max-w-[380px]  w-full font-gothicMdbt   text-[50px] leading-[35px] text-white drop-shadow-custom after:absolute after:top-[30px]  min-[1126px]:after:top-7  after:right-[30px] sm:after:right-[130px] after:bg-[url('@/../public/icons/dots.svg')] after:bg-no-repeat after:max-w-[115px] after:bg-contain after:w-full after:h-1 font-normal" ><span className='text-[45px] '>THE</span> <br />
                                        MISSION</h2>
                                    <p className='text-[#C9C9C9] text-[21px] font-inter leading-[29px] font-normal'>At Armory, our mission is to keep organizations ahead of evolving cyber threats by combining elite human expertise with advanced AI and automated processes.</p>
                                    <Button varient='solid' buttonClass='px-[30px] text-base leading-4'>Know more</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}

export default TheMission