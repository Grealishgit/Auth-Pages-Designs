import React from 'react'
import { MdArrowDropDown } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";

const Navbar = () => {
    return (
        <div className='w-full fixed z-50 md:py-4 py-2 shadow-md shadow-black bg-white/80'>
            <div className='flex justify-between w-full items-center'>
                <div className='md:flex hidden items-center flex-row gap-6'>
                    <div className='w-7 h-7 cursor-pointer rounded-full bg-stone-400 relative top-0 left-2' />
                    <p className='font-semibold text-xl cursor-pointer'>Home</p>
                    <p className='font-semibold text-xl cursor-pointer'>Designs</p>
                    <p className='font-semibold text-xl cursor-pointer'>Info</p>
                    <p className='font-semibold text-xl cursor-pointer'>About</p>
                </div>
                <div className='flex flex-row items-center gap-3 pl-2 pr-3'>
                    <div className='relative items-center'>
                        <IoIosSearch className='absolute w-5 h-5 md:top-3 top-2 left-2' />
                        <input type="text" placeholder='Search' className='border pl-7 font-semibold border-gray-400 w-35 md:py-2 py-1.5 rounded-full bg-stone-300' />
                    </div>
                    <p className='font-semibold text-lg md:flex hidden flex-row gap-1 items-center'>English (United States)<MdArrowDropDown className='cursor-pointer' /></p>
                    <button className='md:px-6 px-4 py-1.5 cursor-pointer rounded-lg border border-black hover:bg-stone-300'>Login </button>
                    <button className='md:px-5 px-4 md:py-2 py-2 cursor-pointer rounded-lg text-white bg-black'>Sign up</button>
                </div>
            </div>
        </div>
    )
}

export default Navbar