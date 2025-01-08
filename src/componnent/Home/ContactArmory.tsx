'use client'

import React, { FC } from 'react';
import Button from '../ui/Button';

interface ContactArmoryProps { }

const ContactArmory: FC<ContactArmoryProps> = () => {

    const handleContactClick = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const recipientEmail = "office@armorydefense.com";
        const subject = "Request for Live Demo";
        const body = `I would like to obtain more information about Armory`;
        window.location.href = `mailto:${recipientEmail}?subject=${encodeURIComponent(
            subject
        )}&body=${encodeURIComponent(body)}`;
    };

    return (
        <div className='flex flex-col gap-3 lg:gap-6 px-[30px] relative z-10 mt-[60px] mb-5'>
            <h3 className='text-[22px] sm:text-[28px] leading-none sm:leading-[23.8px] font-gothicMdbt text-white'>
                Get your exclusive live demo and see Armory in action!
            </h3>
            <p className='text-lg leading-[29px] sm:text-[21px] sm:leading-[29px] font-inter text-[#C9C9C9] max-w-[380px] w-full'>
                Discover how Armory safeguards your organization with cutting-edge technology.
            </p>

            <div className='mt-3 '  >
                <Button onClick={(e: any) => handleContactClick(e)}
                    type="submit"
                    varient='solid'
                   buttonClass='py-[11px] px-[18px] leading-[17px] text-[20px] font-normal'
                >
                    Contact Armory
                </Button>
            </div>
        </div>
    );
};

export default ContactArmory;
