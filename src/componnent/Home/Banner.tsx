import React from 'react'
import bannertext from "@/../public/images/bannertext.gif"
import Button from '../ui/Button'
import Image from 'next/image'

const Banner = () => {

    return (
        <>
            <section id='banner' className=" relative xl:before:absolute xl:before:right-0 before:bg-right xl:before:bg-[url('@/../public/images/bgeffect5.png')]  xl:before:bottom-[-1257px] xl:before:z-10 xl:before:max-w-[555px] xl:before:w-full xl:before:h-[1570px] xl:before:bg-no-repeat before:animate-flicker " >
                <div className="bg-[url('@/../public/images/newbgbanner.png')] bg-no-repeat bg-center bg-cover w-full h-full pb-[50px] xl:pb-[110px] " >
                    <div className="container relative after:absolute after:right-[40px] before:left-5 md:before:left-[40px] after:h-[54px] after:w-[23px] before:absolute before:bg-[url('@/../public/icons/leftarrow.svg')] after:bottom-0 after:bg-[url('@/../public/icons/rightarrow.svg')] before:h-[52px] before:w-[23px]  pb-8 pt-[47px]">
                        <div className='relative flex justify-center items-center h-full pt-[37px] '>
                            <div className="  max-w-[998px] w-full before:bg-[url('@/../public/images/bannerStar.png')] before:animate-spin-sclaeUp before:bg-no-repeat before:absolute before:top-[-105px] max-[1111px]:before:left-[50px] before:left-0 before:h-[45px] after:bg-contain before:w-[45px]  mt-[75px] mb-[69px] relative  after:bottom-[-100px] after:absolute max-[1111px]:after:right-[50px] after:right-0  after:bg-[url('@/../public/images/bannerStar.png')] after:animate-spin-sclaeUp after:bg-no-repeat after:w-[45px] after:h-[45px]" >
                                <div className="text-center relative before:absolute  before:right-0 before:bg-[url('@/../public/icons/righticon.svg')] before:h-[22px] before:w-[22px] after:bg-[url('@/../public/icons/lefticon.svg')] after:w-[22px] after:h-[22px] after:absolute after:left-0  after:bottom-[-15px]  md:after:bottom-[-55px] lg:after:bottom-0 max-w-[791px] mx-auto" >
                                    <Image className='xl:object-none object-contain max-w-[791px] w-full mx-auto xl:h-[179px] ' 
                                    src={bannertext} alt="bannertext" />
                                    <h2 className='font-inter text-body_text py-8 text-[21px] leading-[29.37px]' >Fortifying Your Defenses Against Cyber Threats</h2>
                                    <Button varient='solid' buttonClass='py-[13px] text-[18px] leading-[18px] px-[32px] mb-[20px] lg:mb-[58px]'>Book A live demo</Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}

export default Banner
