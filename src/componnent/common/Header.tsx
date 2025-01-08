'use client'
import React, { useEffect, useState } from 'react';
import Button from '../ui/Button';
import logo from '@/../public/icons/Armorylogo.svg';
import Image from 'next/image';
// import Button from '../ui/Button';

const Header = () => {
    const [sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => {
        setSidebar(!sidebar);
    };
    const [isScrolled, setIsScrolled] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0); // Set scrolled state
        };
        // Add event listeners
        window.addEventListener("scroll", handleScroll);
        // Cleanup listeners
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
    return (
        <>
            <header className={` fixed z-[100] top-0 left-0 right-0 w-full transition-all duration-200   ${isScrolled && 'bg-black/70 '} `}>
                <div className={`before:absolute before:top-0  before:left-0 before:bg-[url('@/../public/images/bgeffect1.png')] before:animate-flicker before:bg-no-repeat before:max-w-[500px] before:w-full md:before:h-[500px] before:h-[400px] ${isScrolled && 'before:hidden'}`}>
                    <div className="container flex justify-between relative z-20  xl:gap-[50px] items-center pt-[31px] lg:pt-[32px] pb-[16px]">
                        <a href="#banner">
                            <Image width={135} height={34} className="max-w-[135px]" src={logo} alt="logo" />
                        </a>
                        <div
                            onClick={toggleSidebar}
                            className="text-white lg:hidden cursor-pointer"
                        >
                            <span className="block w-8 h-[2px] bg-white mb-1"></span>
                            <span className="block w-8 h-[2px] bg-white mb-1"></span>
                            <span className="block w-8 h-[2px] bg-white"></span>
                        </div>
                        <div
                            className={`fixed top-0 ${sidebar ? 'right-0' : '-right-full'
                                } h-full md:w-[50%] w-[75%] bg-black text-white transition-all duration-500 lg:hidden z-50 `}
                        >
                            <div className="p-6">
                                <button
                                    onClick={toggleSidebar}
                                    className="text-white absolute top-4 right-4 text-2xl"
                                >
                                    &times;
                                </button>
                                <nav>
                                    <ul className="flex flex-col gap-6 mt-10">
                                        <li className="font-gothicMdbt text-white cursor-pointer hover:text-gray-300">
                                            <a href="#missionsection">
                                                Mission
                                            </a>
                                        </li>
                                        <li className="font-gothicMdbt text-white cursor-pointer hover:text-gray-300">
                                            <a href="#defensesection">
                                                Features
                                            </a>
                                        </li>
                                        <li className="font-gothicMdbt text-white cursor-pointer hover:text-gray-300">
                                            <a href="#customerfeedback">
                                                Customers
                                            </a>
                                        </li>

                                        <li className="font-gothicMdbt text-white cursor-pointer hover:text-gray-300">
                                            <a href="#globalsection">
                                                War Rooms
                                            </a>
                                        </li>
                                        <li className="font-gothicMdbt text-white cursor-pointer hover:text-gray-300">
                                            <a href="#strategysection">
                                                Strategy
                                            </a>
                                        </li>
                                        <li className="font-gothicMdbt text-white cursor-pointer hover:text-gray-300">
                                            <a href="#customerfeedback">
                                                About Us
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                                <div className="flex flex-col gap-4 mt-10">
                                    <a href="#contactsection">

                                        <Button varient="solid" buttonClass="px-5 w-full">
                                            <span className="whitespace-nowrap !leading-[16px]">Book a demo</span>
                                        </Button>
                                    </a>
                                    <Button varient="liquid" buttonClass=" px-[19px] w-full">
                                        <span className="whitespace-nowrap !leading-[16px]">Log in</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="hidden lg:flex items-center justify-between gap-4 xl:gap-[50px]">
                            <nav>
                                <ul className="flex justify-between gap-3 xl:gap-[30px]">
                                    <li>
                                        <a className='  text-[14px] xl:text-base whitespace-nowrap font-gothicMdbt leading-[16.75px] text-white cursor-pointer duration-[0.5s]  hover:drop-shadow-custom backdrop-blur-[2px] hover:text_shadow HeaderNavAnimation' href="#missionsection">
                                            Mission
                                        </a>
                                    </li>
                                    <li>
                                        <a className='  text-[14px] xl:text-base whitespace-nowrap font-gothicMdbt leading-[16.75px] text-white cursor-pointer duration-[0.5s]  hover:drop-shadow-custom backdrop-blur-[2px] hover:text_shadow HeaderNavAnimation' href="#defensesection">
                                            Features
                                        </a>
                                    </li>
                                    <li>
                                        <a className='  text-[14px] xl:text-base whitespace-nowrap font-gothicMdbt leading-[16.75px] text-white cursor-pointer duration-[0.5s]  hover:drop-shadow-custom backdrop-blur-[2px] hover:text_shadow HeaderNavAnimation' href="#clientsection">
                                            Customers
                                        </a>
                                    </li>
                                    <li>
                                        <a className='  text-[14px] xl:text-base whitespace-nowrap font-gothicMdbt leading-[16.75px] text-white cursor-pointer duration-[0.5s]  hover:drop-shadow-custom backdrop-blur-[2px] hover:text_shadow HeaderNavAnimation' href="#globalsection">
                                            War Rooms
                                        </a>
                                    </li>
                                    <li>
                                        <a className='  text-[14px] xl:text-base whitespace-nowrap font-gothicMdbt leading-[16.75px] text-white cursor-pointer duration-[0.5s]  hover:drop-shadow-custom backdrop-blur-[2px] hover:text_shadow HeaderNavAnimation' href="#strategysection">
                                            Strategy
                                        </a>
                                    </li>
                                    <li>
                                        <a className='  text-[14px] xl:text-base whitespace-nowrap font-gothicMdbt leading-[16.75px] text-white cursor-pointer duration-[0.5s]  hover:drop-shadow-custom backdrop-blur-[2px] hover:text_shadow HeaderNavAnimation' href="#customerfeedback">
                                            About Us
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                            <div className="flex gap-4 items-center">
                                <a href="#contactsection">
                                    <Button varient="solid" buttonClass="px-[22px] py-[11px] text-base font-bold text-nowrap leading-4">
                                        Book a demo
                                    </Button>
                                </a>
                                <Button varient="liquid" buttonClass=" px-[30px] py-[11px] text-base font-bold text-nowrap leading-4">
                                    Log in
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;