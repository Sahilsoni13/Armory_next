import React from "react";
import round from "@/../public/images/roundcircle.png"
import trianglesame from "@/../public/images/newTraingle.png"
import square from "@/../public/icons/animationcirclebox.svg"
import squareouter from "@/../public/images/squareoute1.png"
import innercircleImage2 from "@/../public/images/innercircleimg2.png"
import Image from "next/image";



const RotatingCirclesWithIcons = () => {
    return (
        <>
            <div className="relative flex items-center justify-center py-24 min-[425px]:py-36  sm:py-60    max-w-[890px]  mx-auto overflow-hidden">
                {/* Outer Circle */}
                <div className="absolute w-[90%] max-w-[890px] aspect-square z-10">
                    <div className="border-[0.5px] border-gray-700 w-full h-full rounded-full flex items-center justify-center mx-auto relative animate-spin-clockwise">
                        <div className="absolute w-1 md:w-2 h-1 md:h-2 bg-gray-700 rounded-full left-[-2.5px] md:left-[-5px]"></div>
                        <div className="absolute w-1 md:w-2 h-1 md:h-2 bg-gray-700 rounded-full right-[-2.5px] md:right-[-5px]"></div>
                    </div>
                </div>

                {/* Middle Circle */}
                <div className="absolute w-[75%] max-w-[696px] aspect-square ">
                    <div className="border-[0.5px] border-gray-700 w-full h-full rounded-full flex items-center justify-center relative animate-spin-anticlockwise">
                        <div className="absolute w-1 md:w-2 h-1 md:h-2 bg-gray-700 rounded-full top-[-2.5px] md:top-[-5px]"></div>
                        <div className="absolute w-1 md:w-2 h-1 md:h-2 bg-gray-700 rounded-full bottom-[-2.5px]  md:bottom-[-5px]"></div>
                    </div>
                </div>

                {/* Inner Circle */}

                {/* <div className="absolute w-[60%] max-w-[580px] aspect-square  flex items-center justify-center animate-clockwise">
                   
                    <Image className="rounded-full drop-shadow-custom"
                        src={innercircleImage2} alt="innercircleImage" />
                    <div className="w-[40%] md:w-[100%] max-w-[200px] flex justify-center items-center text-center animate-counterClockwise absolute top-[-12%] m:top-[-10%] py-5 ">
                        <h2 className="text-[7px] sm:text-lg md:text-2xl text-[#E2EEFF]" style={{ textShadow: "0px 0px 20px #000" }}>Offensive <br /> Reconnaissance</h2>
                    </div>
                    <div className="w-[40%] md:w-[100%] max-w-[200px]  flex justify-center items-center text-center animate-counterClockwise absolute bottom-[11%] sm:bottom-[11%] left-[-15%] py-5">
                        <h2 className="text-[7px] sm:text-lg md:text-2xl text-[#E2EEFF]" style={{ textShadow: "0px 0px 20px #000" }}>Offensive <br /> Validation</h2>
                    </div>
                    <div className="w-[40%] md:w-[100%] max-w-[200px]  flex justify-center items-center text-center animate-counterClockwise absolute right-[-10%] sm:right-[-12%] bottom-[10%] sm:bottom-[12%]  py-5">
                        <h2 className="text-[7px] sm:text-lg md:text-2xl text-[#E2EEFF]" style={{ textShadow: "0px 0px 20px #000" }}>Data <br /> Exposure</h2>
                    </div>
                </div> */}


                <div className="absolute w-[60%] max-w-[580px] aspect-square  flex items-center justify-center animate-clockwise">

                    <Image className="rounded-full "
                        src={innercircleImage2} alt="innercircleImage" />
                    <div className="w-[40%] md:w-[100%] max-w-[200px] flex justify-center items-center text-center animate-counterClockwise absolute top-[-12%] m:top-[-10%] py-5 ">
                        <h2 className="text-[8px] min-[500px]:text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl text-[#E2EEFF]" style={{ textShadow: "0px 0px 20px #000" }}>
                            Offensive <br /> Reconnaissance
                        </h2>
                    </div>
                    <div className="w-[40%] md:w-[100%] max-w-[200px] flex justify-center items-center text-center animate-counterClockwise absolute bottom-[11%] sm:bottom-[11%] left-[-15%] py-5">
                        <h2 className="text-[8px] min-[500px]:text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl text-[#E2EEFF]" style={{ textShadow: "0px 0px 20px #000" }}>
                            Offensive <br /> Validation
                        </h2>
                    </div>
                    <div className="w-[40%] md:w-[100%] max-w-[200px] flex justify-center items-center text-center animate-counterClockwise absolute right-[-10%] sm:right-[-12%] bottom-[10%] sm:bottom-[12%] py-5">
                        <h2 className="text-[8px] min-[500px]:text-xs sm:text-sm md:text-lg lg:text-xl xl:text-2xl text-[#E2EEFF]" style={{ textShadow: "0px 0px 20px #000" }}>
                            Data <br /> Exposure
                        </h2>
                    </div>
                </div>

                {/* Smallest Circle */}
                <div className="absolute w-[50%] max-w-[460px] aspect-square">
                    <div className="border-[0.5px] border-gray-700 w-full h-full rounded-full flex items-center justify-center animate-spin-clockwise relative">
                        <div className="absolute w-1 md:w-2 h-1 md:h-2 bg-gray-700 rounded-full left-[-2.5px] md:left-[-5px]"></div>
                        <div className="absolute w-1 md:w-2 h-1 md:h-2 bg-gray-700 rounded-full right-[2.5px]  md:right-[-5px]"></div>
                    </div>
                </div>

                {/* Rotating Image */}
                <Image className="relative z-[20] animate-counterClockwise w-[40%] max-w-[380px] " src={round} alt="round" />

                {/* Inner Triangle */}
                <div className="absolute w-[40%] max-w-[380px] ">
                    <div className="relative">
                        <Image src={trianglesame} alt="trianglesame" />
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                            <div className="w-6 sm:w-10 h-6 sm:h-10 flex items-center justify-center ">
                                <Image className="absolute w-full animate-spin-sclaeUp" src={squareouter} alt="squareouter" />
                                <Image className="absolute w-full animate-spin-scaleDown" src={square} alt="square" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};


export default RotatingCirclesWithIcons;
