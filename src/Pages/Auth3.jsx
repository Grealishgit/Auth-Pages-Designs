import React, { useState } from 'react'
import bg1 from '../assets/images/bg1.jpg'
import { FaFacebook, FaGoogle } from 'react-icons/fa'
import { IoMdClose } from 'react-icons/io'

const Auth3 = () => {
    const [login, setLogin] = useState(false);

    return (
        <div className='min-h-screen relative flex items-center justify-center bg-center bg-cover'
            style={{ backgroundImage: `url(${bg1})` }}
        >
            {login ? (
                <form className="bg-white absolute top-20 right-4 p-10 rounded-2xl max-w-sm w-full shadow-lg">
                    {/* Close icon */}
                    <div className="flex justify-end">
                        <IoMdClose onClick={() => setLogin(!login)} className="h-7 w-7 cursor-pointer" />
                    </div>

                    {/* Avatar */}
                    {/* <div className="flex justify-center items-center mb-4">
                        <div className="w-10 h-10 cursor-pointer rounded-full bg-stone-300" />
                    </div> */}

                    {/* Title */}
                    <h2 className="text-3xl font-semibold text-center">Create an account</h2>
                    <p className="text-sm text-center text-gray-500">
                        Already have an account? <span className="text-blue-600 underline cursor-pointer">Log in</span>
                    </p>



                    {/* Instruction */}
                    <p className="text-center text-sm text-gray-500 mt-4">
                        Enter your email address to create an account
                    </p>

                    {/* Username */}
                    <div className="flex flex-col mt-4 gap-2">
                        <label htmlFor="username" className="text-gray-500">Your Username</label>
                        <input
                            id="username"
                            type="text"
                            className="w-full py-2 px-3 border border-gray-400 rounded-lg"
                        />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col mt-4 gap-2">
                        <label htmlFor="email" className="text-gray-500">Your Email</label>
                        <input
                            id="email"
                            type="email"
                            className="w-full py-2 px-3 border border-gray-400 rounded-lg"
                        />
                    </div>

                    {/* Password */}
                    <div className="flex flex-col mt-4 gap-2">
                        <label htmlFor="password" className="text-gray-500">Your Password</label>
                        <input
                            id="password"
                            type="password"
                            className="w-full py-2 px-3 border border-gray-400 rounded-lg"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full text-white text-lg rounded-full py-3 mt-6 bg-gray-600 hover:bg-gray-700 transition"
                    >
                        Create an account
                    </button>
                    {/* Divider */}
                    <div className="flex items-center mt-4">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="mx-4 text-gray-500">OR</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>
                    {/* Social buttons */}
                    <div className="flex flex-row gap-2 mt-6">
                        <button type="button" className="flex w-full items-center gap-3 justify-center border border-gray-400 py-2 rounded-lg font-semibold text-sm">
                            <FaFacebook className="text-blue-600" />
                            Facebook
                        </button>
                        <button type="button" className="flex w-full items-center gap-3 justify-center border border-gray-400 py-2 rounded-lg font-semibold text-sm">
                            <FaGoogle className="text-red-500" />
                            Google
                        </button>
                    </div>

                    {/* Submit */}


                </form>
            ) : (
                <form className="bg-white absolute top-20 right-4 p-10 rounded-2xl max-w-sm w-full shadow-lg">
                    {/* Close icon */}
                    <div className="flex justify-end">
                        <IoMdClose onClick={() => setLogin(!login)} className="h-7 w-7 cursor-pointer" />
                    </div>
                    {/* Title */}
                    <h2 className="text-3xl font-semibold text-center">Login to Your Account</h2>
                    <p className="text-sm text-center text-gray-500">
                        Dont't have an account? <span className="text-blue-600 underline cursor-pointer">Sign Up</span>
                    </p>



                    {/* Instruction */}
                    {/* <p className="text-center text-sm text-gray-500 mt-4">
                        Enter your email address to create an account
                    </p> */}



                    {/* Email */}
                    <div className="flex flex-col mt-4 gap-2">
                        <label htmlFor="email" className="text-gray-500">Your Email</label>
                        <input
                            id="email"
                            type="email"
                            className="w-full py-2 px-3 border border-gray-400 rounded-lg"
                        />
                    </div>

                    {/* Password */}
                    <div className="flex flex-col mt-4 gap-2">
                        <div className='flex justify-between'>
                            <label htmlFor="password" className="text-gray-500">Your Password</label>
                            <p className='underline cursor-pointer'>Forgot Password</p>
                        </div>

                        <input
                            id="password"
                            type="password"
                            className="w-full py-2 px-3 border border-gray-400 rounded-lg"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full cursor-pointer text-white text-lg rounded-full py-3 mt-6 bg-gray-600 hover:bg-gray-700 transition"
                    >
                        Login
                    </button>


                </form>
            )}

        </div>
    )
}

export default Auth3