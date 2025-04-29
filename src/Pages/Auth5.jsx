import React from 'react'
import user from '../assets/images/Adrian.jpg'
import { CiCirclePlus } from 'react-icons/ci'
import { MdArrowDropDown } from "react-icons/md";
import { IoMdClose } from 'react-icons/io';

const Auth5 = () => {
    return (
        <div className='bg-stone-200 justify-center items-center min-h-screen w-full flex flex-col'>
            <div className='w-[1000px] flex flex-col bg-white rounded-lg shadow-lg '>
                {/* Top Section */}
                <div className='flex w-full flex-grow'>
                    {/* Left Card */}
                    <div className='w-1/2 flex flex-col rounded-l-lg bg-gray-100 p-7'>
                        <h2 className='text-4xl font-semibold'>Recent Login</h2>
                        <p className='text-md text-gray-500 mt-2'>Click your picture or add an account</p>

                        <div className="mt-8 grid grid-cols-2 gap-2">
                            {/* Profile Card */}
                            <div className="flex flex-col h-60 w-50 bg-white rounded-lg shadow-md shadow-black overflow-hidden">
                                <div className="relative h-40 w-full">
                                    <img
                                        src={user}
                                        alt="User"
                                        className="h-46 w-50 object-cover rounded-t-lg"
                                    />
                                    <IoMdClose className="absolute top-2 left-2 text-white bg-black bg-opacity-60 rounded-full p-1 h-6 w-6 cursor-pointer z-10" />
                                </div>
                                <p className="text-center mt-8  text-gray-500 text-lg font-semibold">
                                    Eugene Hunter
                                </p>
                            </div>


                            {/* Add New Card */}
                            <div className="flex flex-col h-60 w-50 bg-white rounded-lg shadow-md shadow-black overflow-hidden">
                                <button className="flex justify-center items-center border border-gray-300 h-50 bg-gray-200">
                                    <CiCirclePlus className="h-20 w-20 cursor-pointer text-gray-600" />
                                </button>
                                <p className="text-center mt-4 mb-2 text-gray-500 text-lg font-semibold">Add an Account</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className='w-1/2 flex rounded-r-lg p-8 bg-gray-100 flex-col'>
                        <form className='w-full border border-gray-400 p-5 bg-white rounded-lg'>
                            <div className='flex flex-col gap-2'>
                                <label>Your Email</label>
                                <input type="email" className='w-full pl-4 py-2 rounded-lg border border-gray-300' />
                            </div>
                            <div className='flex mt-4 flex-col gap-2'>
                                <label>Your Password</label>
                                <input type="password" className='w-full pl-4 py-2 rounded-lg border border-gray-300' />
                            </div>
                            <button className='w-full py-2.5 mt-4 bg-gray-500 cursor-pointer text-white text-lg rounded-full'>
                                Log in
                            </button>
                            <p className='underline text-center font-semibold text-lg mt-4'>Forgot your password?</p>
                        </form>
                        <button className='w-full py-2.5 mt-4 border border-gray-400 text-black text-lg rounded-full'>
                            Create an account
                        </button>
                    </div>
                </div>

                {/* Bottom Section (Fixed at bottom of card) */}
                <div className='flex justify-between w-full px-6 py-4 border-t rounded-b-lg border-gray-300 bg-white'>
                    <ul className='flex flex-wrap gap-4 text-sm text-gray-600'>
                        <li>Sign Up</li>
                        <li>Login</li>
                        <li>Help Center</li>
                        <li>Terms of Service</li>
                        <li>Privacy Policy</li>
                        <li>About</li>
                        <li>Setting</li>
                    </ul>
                    <p className='text-gray-500 flex flex-row gap-1 font-semibold items-center'>English (United States)
                        <MdArrowDropDown className='h-5 w-5 cursor-pointer' /></p>
                </div>
            </div>
        </div>

    )
}

export default Auth5