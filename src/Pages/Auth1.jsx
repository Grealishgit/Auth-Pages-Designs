import React, { useState } from 'react'
import bg from '../assets/images/bg1.jpg'
import bg1 from '../assets/images/bg2.jpg'
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const Auth1 = () => {
    const [isSign, setIsSign] = useState(false);
    const [shoPassword, setShowPassword] = useState(false);
    return (
        <div className='min-h-screen justify-center bg-stone-200 pt-20 flex items-center'>
            <div className='md:w-270 w-85 flex min-h-full  shadow-lg shadow-black'>

                {isSign ? (
                    <div className='md:w-180 md:p-15 p-8 h-auto bg-white'>
                        <div className='w-7 h-7 cursor-pointer rounded-full bg-stone-300 relative md:-top-13 -top-6 md:-left-12 -left-7' />
                        <h2 className='font-semibold text-start text-2xl'>Welcome to the community</h2>
                        <p>Already have an Account? <span onClick={() => setIsSign(!isSign)} className='underline font-semibold cursor-pointer'>Log in</span> </p>
                        <div className='flex mt-3 gap-3 flex-col'>
                            <label htmlFor="">Email</label>
                            <input type="text" placeholder='user@gmail.com' className='w-full border border-gray-300 pl-4 rounded-lg py-2' />
                        </div>

                        <div className='flex mt-3 gap-3 flex-col'>
                            <label htmlFor="">Username</label>
                            <input type="text" placeholder='username' className='w-full border border-gray-300 pl-4 rounded-lg py-2' />
                        </div>
                        <div className='flex mt-3 gap-3 flex-col'>

                            <div className='flex justify-between'>
                                <label htmlFor="">Password</label>


                                {shoPassword ? (
                                    <div className='flex flex-row gap-1 cursor-pointer items-center'>
                                        <FaRegEye onClick={() => setShowPassword(!shoPassword)} />
                                        <p onClick={() => setShowPassword(!shoPassword)} className='font-semibold'>Hide</p>
                                    </div>

                                ) : (
                                    <div className='flex flex-row gap-1 cursor-pointer items-center'>
                                        <FaEyeSlash onClick={() => setShowPassword(!shoPassword)} />
                                        <p onClick={() => setShowPassword(!shoPassword)} className='font-semibold'>Show</p>
                                    </div>
                                )}

                            </div>

                            <input
                                type={shoPassword ? "text" : "password"} placeholder='password'
                                className='w-full border border-gray-300 rounded-lg pl-4 py-2' />
                            <div className='grid mt-2 md:grid-cols-3 grid-cols-2 gap-4'>
                                <li className='text-gray-400 text-xs'>Use 8 or more characters</li>
                                <li className='text-gray-400 text-xs'>One Uppercase character</li>
                                <li className='text-gray-400 text-xs'>One lowercase character</li>
                                <li className='text-gray-400 text-xs'>One special chracter</li>
                                <li className='text-gray-400 text-xs'>One number</li>
                            </div>
                        </div>

                        <div className='mt-4 flex flex-row gap-2 items-center'>
                            <input type="checkbox" className='accent-black cursor-pointer mb-3' />
                            <p className='text-gray-700 font-semibold text-xs'>
                                I want to receive emails about the product, feature updates, events and marketing promotions</p>
                        </div>

                        <p className='text-gray-700 font-semibold text-xs mt-8'>By creating account, you agree to the <span className='underline cursor-pointer'>Terms of use </span> and <span className='underline cursor-pointer'>Privacy Policy</span></p>
                        <div className='mt-5'>
                            <button className='md:px-5 px-16 py-3 text-white rounded-full cursor-pointer bg-stone-300'>Create an account</button>
                            <p className='text-gray-700 font-semibold text-sm mt-2' >Already have an account? <span onClick={() => setIsSign(!isSign)} className='underline cursor-pointer'>Log in</span> </p>
                        </div>
                    </div>
                ) : (
                        <div className='w-180 md:p-15 p-8 h-auto bg-white'>
                            <div className='w-7 h-7 cursor-pointer rounded-full bg-stone-300 relative md:-top-13 -top-6 md:-left-12 -left-7' />
                        <h2 className='font-semibold text-start text-2xl'>Welcome to the community</h2>
                        <p>Don't have an Account? <span onClick={() => setIsSign(!isSign)} className='underline font-semibold cursor-pointer'>Sign Up</span> </p>
                        <div className='flex mt-3 gap-3 flex-col'>
                            <label htmlFor="">Email</label>
                            <input type="text" placeholder='user@gmail.com' className='w-full border border-gray-300 pl-4 rounded-lg py-2' />
                        </div>
                        <div className='flex mt-3 gap-3 flex-col'>
                            <div className='flex justify-between'>
                                <label htmlFor="">Password</label>


                                {shoPassword ? (
                                    <div className='flex flex-row gap-1 cursor-pointer items-center'>
                                        <FaRegEye onClick={() => setShowPassword(!shoPassword)} />
                                        <p onClick={() => setShowPassword(!shoPassword)} className='font-semibold'>Hide</p>
                                    </div>

                                ) : (
                                    <div className='flex flex-row gap-1 cursor-pointer items-center'>
                                        <FaEyeSlash onClick={() => setShowPassword(!shoPassword)} />
                                        <p onClick={() => setShowPassword(!shoPassword)} className='font-semibold'>Show</p>
                                    </div>
                                )}

                            </div>
                            <input type={shoPassword ? "text" : "password"} placeholder='password' className='w-full border pl-4 border-gray-300 rounded-lg py-2' />

                            </div>
                        <div className='mt-5'>
                            <button className='md:px-5 px-12 py-3 font-semibold text-white rounded-full cursor-pointer bg-stone-300'>Login to Your Account</button>
                            <p className='text-gray-700 font-semibold text-sm mt-4' >Already have an account? <span onClick={() => setIsSign(!isSign)} className='underline cursor-pointer'>Sign Up</span> </p>
                        </div>
                    </div>
                )}

                <div
                    className="w-120 h-auto md:block hidden bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${isSign ? bg : bg1})`,
                    }}
                ></div>

            </div>

        </div>
    )
}

export default Auth1