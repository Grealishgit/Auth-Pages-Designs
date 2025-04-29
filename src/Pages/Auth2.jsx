import React, { useState } from 'react'
import bg from '../assets/images/bg1.jpg'
import { FaFacebook, FaGoogle } from 'react-icons/fa'
import { IoMdClose } from "react-icons/io";

const Auth2 = () => {
    const [onclose, setOnclose] = useState(false);
    return (
        <div className='min-h-screen w-full bg-cover backdrop-blur-md bg-opacity-80 bg-center justify-center items-center pt-20 flex'
            style={{
                backgroundImage: `url(${bg})`,
            }}
        >
            {onclose ? (
                <form className='bg-white items-center p-10 rounded-2xl w-120'>
                    <div className='justify-end flex'>
                        <IoMdClose onClick={() => setOnclose(!onclose)} className='h-7 w-7 cursor-pointer' />
                    </div>
                    <div className="flex justify-center items-center ">
                        <div className="w-7 h-7 cursor-pointer rounded-full bg-stone-300" />
                    </div>

                    <h2 className='text-3xl font-semibold text-center'>Create an account</h2>
                    <p className='text-sm text-center'>Already have an account? <span>Log in</span> </p>
                    <div className='flex mt-7 flex-col'>
                        <p className='w-full cursor-pointer flex flex-row gap-4 rounded-full items-center pl-16 font-semibold  border border-gray-400 py-2'>
                            <FaFacebook className='text-blue-500' />
                            <span className='text-center'>Continue with Facebook</span> </p>
                    </div>
                    <div className='flex mt-4 flex-col'>
                        <p className='w-full cursor-pointer flex flex-row gap-4 rounded-full items-center pl-16 font-semibold  border border-gray-400 py-2'>
                            <FaGoogle />
                            <span className='text-center'>Continue with Google</span> </p>
                    </div>

                    <div className="flex items-center mt-4">
                        <div className="flex-grow border-t border-gray-500"></div>
                        <span className="mx-4 text-gray-500">OR</span>
                        <div className="flex-grow border-t border-gray-500"></div>
                    </div>

                    <p className='text-center text-sm text-gray-500'>Enter your email address to create an account</p>
                    <div className='flex flex-col mt-4 gap-2 '>
                        <label htmlFor="" className='text-gray-500'>Your Email</label>
                        <input type="email" className='w-full  py-2 border border-gray-400 rounded-lg' />
                    </div>
                    <button className='w-full cursor-pointer text-white text-lg rounded-full py-3 mt-4 bg-gray-500 '>Create an account</button>
                </form>
            ) : (
                <form className='bg-white items-center p-10 rounded-2xl w-120'>
                    <div className='justify-start flex'>
                        <IoMdClose onClick={() => setOnclose(!onclose)} className='h-7 w-7 cursor-pointer' />
                    </div>
                    <div className="flex justify-center items-center ">
                        <div className="w-7 h-7 cursor-pointer rounded-full bg-stone-300" />
                    </div>

                    <h2 className='text-3xl font-semibold text-center'>Sign Up</h2>
                    <p className='text-sm text-center'>Step 1 of 3 </p>


                    <div className='flex flex-col mt-4 gap-2 '>
                        <label htmlFor="" className='text-gray-500'>Your Username</label>
                        <input type="email" className='w-full  py-2 border border-gray-400 rounded-lg' />
                    </div>
                    <div className='flex flex-col mt-4 gap-2 '>
                        <label htmlFor="" className='text-gray-500'>Phone number</label>
                        <input type="email" className='w-full  py-2 border border-gray-400 rounded-lg' />
                    </div>
                    <div className='justify-end flex mt-3'>
                        <p className='font-semibold underline'>Use Email instead</p>
                    </div>
                    <p className='mt-2 text-md'>What's your date of birth?</p>
                    <div className='flex flex-row gap-4'>
                        <div className='flex flex-col mt-3 gap-2'>
                            <label className='text-gray-500'>Month</label>
                            <select className='w-full mx-2 py-3 border border-gray-400 rounded-lg'>
                                <option value="">Select Month</option>
                                {[
                                    "January", "February", "March", "April", "May", "June",
                                    "July", "August", "September", "October", "November", "December"
                                ].map((month, index) => (
                                    <option key={index} value={month}>{month}</option>
                                ))}
                            </select>
                        </div>

                        <div className='flex flex-col mt-3 gap-2'>
                            <label className='text-gray-500'>Date</label>
                            <select className='w-full mx-2 py-3 border border-gray-400 rounded-lg'>
                                <option value="">Select Date</option>
                                {[...Array(31)].map((_, i) => (
                                    <option key={i} value={i + 1}>{i + 1}</option>
                                ))}
                            </select>
                        </div>

                        <div className='flex flex-col mt-3 gap-2'>
                            <label className='text-gray-500'>Year</label>
                            <select className='w-full mx-2 py-3 border border-gray-400 rounded-lg'>
                                <option value="">Select Year</option>
                                {[...Array(100)].map((_, i) => {
                                    const year = new Date().getFullYear() - i;
                                    return <option key={i} value={year}>{year}</option>;
                                })}
                            </select>
                        </div>
                    </div>


                    <button className='w-full cursor-pointer text-white text-lg rounded-full py-3 mt-4 bg-gray-500 '>Next</button>
                </form>
            )}

        </div>
    )
}

export default Auth2