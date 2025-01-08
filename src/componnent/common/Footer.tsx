'use client'
import React from 'react'
import FooterLogo from "@/../public/icons/Armorylogofooter.svg"
import Insta from "@/../public/icons/insta.svg"
import Youtube from "@/../public/icons/youtube.svg"
import Twitter from "@/../public/icons/twitter.svg"
import Linkedin from "@/../public/icons/linkdin.svg"
import Stars from "@/../public/icons/footerdots.svg"
import footerCorner from "@/../public/images/footercorner.png"
import Image from 'next/image'
import Button from '../ui/Button'
import Link from 'next/link'

const Footer = () => {

    const handleContactClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        const recipientEmail = "office@armorydefense.com";
        const subject = "Request for Live Demo";
        const body = `I would like to obtain more information about Armory`;
        window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;
    };

    return (
        <>
            <footer className=" pt-10 pb-[30px] relative z-10 bg-[#00000080] ">
                <Image src={footerCorner} alt="corner" className='lg:block hidden absolute right-0 top-[-60%]' />
                <div className="max-w-[1200px] w-full mx-auto px-5">
                    <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center">
                        <div>
                            <a href="#banner">
                                <Image src={FooterLogo} alt="footerlogo" />
                            </a>
                            <div className="flex max-w-[168px] w-full justify-between items-center mt-6">
                                <a target='_blank' href="https://www.youtube.com/@Armory_Defense">
                                    <Image
                                        className="
                                        cursor-pointer max-w-[21.71px] w-full footerIconsAnimation  custom-glow-icons drop-shadow-custom-glow"
                                        src={Youtube}
                                        alt="youtube"
                                    />
                                </a>
                                <a target='_blank' href="https://x.com/Armory_Defense">
                                    <Image
                                        className="cursor-pointer max-w-[21.71px] w-full footerIconsAnimation custom-glow-icons drop-shadow-custom-glow"
                                        src={Twitter}
                                        alt="twitter"
                                    />
                                </a>
                                <a target='_blank' href="https://www.instagram.com/armory_defense/">
                                    <Image
                                        className="cursor-pointer max-w-[21.71px] w-full footerIconsAnimation custom-glow-icons drop-shadow-custom-glow"
                                        src={Insta}
                                        alt="instagram"
                                    />
                                </a>
                                <a target='_blank' href="https://www.linkedin.com/company/armorydefense">
                                    <Image
                                        className="cursor-pointer max-w-[21.71px] w-full footerIconsAnimation custom-glow-icons drop-shadow-custom-glow"
                                        src={Linkedin}
                                        alt="linkedin"
                                    />
                                </a>
                            </div>
                        </div>
                        <div className='flex flex-col items-start lg:items-end mt-6 lg:mt-0'>
                            <h2 className='text-white text-2xl sm:text-3xl md:text-[50px] font-gothic sm:leading-[52px] text-wrap '>&gt; CAN YOU BE <span className='text-[#2972D7] '>HACKED</span>?</h2>
                            <Button varient='liquid' buttonClass='mt-6 px-[19px] py-3 text-base font-bold leading-4' >book a demo</Button>
                        </div>
                    </div>
                    <div className='flex flex-col sm:flex-row justify-between items-start md:items-end mt-20 md:mt-[128px]'>
                        <div className='animate-pulse'>
                            <Image className='max-w-20 w-full' src={Stars} alt="stars" /></div>
                        <div className='max-w-[433px] w-full flex justify-between items-center mt-6 md:mt-0 font-inter'>
                            <div className="h-6  overflow-hidden group inline-block"><p onClick={handleContactClick} className="flex flex-col transition-all duration-500 group-hover:-translate-y-[24px] cursor-pointer"
                            >
                                <span
                                    className="text-white text-[14px]  text-subparagraph leading-[1.4] capitalize border-b-[1px] border-white">
                                    Contact us
                                </span>
                                <span
                                    className=" capitalize transition-all duration-500 text-white text-[14px]  text-subparagraph leading-[1.4]  group-hover:border-b-[1px] group-hover:border-white">
                                    Contact us
                                </span>
                            </p>
                            </div>
                            <Link href={'/'} className="h-6  overflow-hidden group inline-block"><p className="flex flex-col transition-all duration-500 group-hover:-translate-y-[24px] cursor-pointer"
                            >
                                <span
                                    className="text-white text-[14px] text-subparagraph leading-[1.4]  capitalize border-b-[1px] border-white">
                                    Privacy
                                </span>
                                <span
                                    className="capitalize transition-all duration-500 text-white text-[14px] text-subparagraph leading-[1.4]  group-hover:border-b-[1px] border-white   group-hover:border-white">
                                    Privacy
                                </span>
                            </p>
                            </Link>
                            <Link href={"/"} className="h-6  overflow-hidden group inline-block"><p className="flex flex-col transition-all duration-500 group-hover:-translate-y-[24px] cursor-pointer"
                            >
                                <span
                                    className="text-white text-[14px]  text-subparagraph leading-[1.4]  capitalize border-b-[1px] border-white">
                                    Terms of Service
                                </span>
                                <span
                                    className="capitalize transition-all duration-500 text-white text-[14px] text-subparagraph leading-[1.4]  group-hover:border-b-[1px] border-white   group-hover:border-white">
                                    Terms of Service
                                </span>
                            </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
