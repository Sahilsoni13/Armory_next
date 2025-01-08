import React, { ReactNode } from 'react'

interface SolidButtonProps {
  children: ReactNode,
  varient?: string,
  type?: any
  buttonClass?: string,
  onClick?: (e: any) => void
}

const Button: React.FC<SolidButtonProps> = ({ children, varient,  type = "", buttonClass, onClick }) => {
  const buttonVariant = varient || 'solid';
  switch (buttonVariant) {
    case 'solid':
      return (
        <>
          <button type={type} onClick={onClick}
            className={`relative text-white font-normal py-[11px] px-6 uppercase text-sm  border border-blue-500 bg-blue-500 transition-all duration-300  overflow-hidden
   hover:bg-black hover:text-white after:absolute after:top-[-5px] after:right-[6px] after:bg-blue-500 after:w-[1px] after:h-8 after:-rotate-45 after:translate-x-[-4px] after:translate-y-[-7.5px]  leading-4 font-gothicMdbt before:absolute before:top-0 before:left-0  before:bottom-0  before:bg-black before:w-0 hover:before:w-full hover:before:right-0 before:transition-all before:duration-200 ${buttonClass}`}
            style={{
              clipPath:
                "polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 0 100%)", // Edge cut
            }}
          >
            <span className='relative z-10'>

              {children}
            </span>
          </button>
        </>

      );
    case 'liquid':
      return (

        <button type={type} onClick={onClick}
          className={`relative text-white font-normal py-[11px] px-6 uppercase text-sm  border border-blue-500 bg-black transition-all duration-300 overflow-hidden
    hover:text-white after:absolute after:top-[-5px] hover:bg-blue-500 after:right-[6px] after:bg-blue-500 after:w-[1px] after:h-8 after:-rotate-45 after:translate-x-[-4px] after:translate-y-[-7.5px] leading-4 font-gothicMdbt before:absolute before:top-0 before:left-0  before:bottom-0  before:bg-blue-500 before:w-0 hover:before:w-full hover:before:right-0 before:transition-all before:duration-200 ${buttonClass}`}
          style={{
            clipPath:
              "polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 0 100%)", // Edge cut
          }}
        >
          <span className='relative z-10'>
            {children}
          </span>
        </button>

      );
    default:
      return (
        <button type={type} onClick={onClick}
        className={`relative text-white font-normal py-[11px] px-6 uppercase text-sm  border border-blue-500 bg-blue-500 transition-all duration-300  overflow-hidden
hover:bg-black hover:text-white after:absolute after:top-[-5px] after:right-[6px] after:bg-blue-500 after:w-[1px] after:h-8 after:-rotate-45 after:translate-x-[-4px] after:translate-y-[-7.5px]  leading-4 font-gothicMdbt before:absolute before:top-0 before:left-0  before:bottom-0  before:bg-black before:w-0 hover:before:w-full hover:before:right-0 before:transition-all before:duration-200 ${buttonClass}`}
        style={{
          clipPath:
            "polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 0 100%)", // Edge cut
        }}
      >
        <span className='relative z-10'>

          {children}
        </span>
      </button>
      );
  }
}

export default Button;
