import React from 'react'
import bg1 from '../assets/images/bg3.jpg'

const Auth4 = () => {
    return (
        <div className='w-full min-h-screen flex bg-center bg-cover'
            style={{ backgroundImage: `url(${bg1})` }}
        >
            <div className='items-center  flex flex-col w-full justify-center'>
                <div className='flex flex-col w-full items-center'>
                    <h2 className='text-white text-center font-semibold text-6xl'>Explore  the <span className='text-orange-500'>world </span> to <br /> experience the beaauty of nature.</h2>
                    <p className='text-white mt-3'>Your form is mostly well-structured and visually clean. However,
                        here are a few improvements to make it more polished</p>
                </div>
                <div>
                    <p className='text-white mt-10'>Ready to travel with us? Enter your email to create or restart your membership.</p>
                    <div className='flex gap-2 mt-4 flex-row'>
                        <input type="email" placeholder='Your Email' className='px-40 pl-4 rounded-tl-lg rounded-bl-lg py-3 bg-white' />
                        <button className='bg-orange-500 cursor-pointer rounded-tr-lg rounded-br-lg  text-white py-3 w-full'>Get Started</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Auth4