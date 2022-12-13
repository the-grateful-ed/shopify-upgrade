import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
  return (
    <div>
      <section>
        <div className='px-4 py-8 mx-auto max-w-screen-xl sm:px-6 sm:py-12 lg:px-8'>
          <ul className='grid grid-cols-1 gap-4 mt-8 lg:grid-cols-3'>
            <li>
              <a href='#' className='block relative group'>
                <Image
                  src='https://images.unsplash.com/photo-1618898909019-010e4e234c55?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
                  alt=''
                  layout='fill'
                  className='object-cover w-full rounded-2xl transition duration-500 aspect-square group-hover:opacity-90'
                />

                <div className='flex absolute inset-0 flex-col justify-end items-start p-6'>
                  <h3 className='text-xl font-medium text-white'>
                    Casual Trainers
                  </h3>
                  <span className='inline-block px-5 py-3 font-mono text-sm text-white uppercase bg-[#C31FFF] border-black hover:bg-[#dd7dff]'>
                    Shop Now
                  </span>
                </div>
              </a>
            </li>

            <li>
              <a href='#' className='block relative group'>
                <img
                  src='https://images.unsplash.com/photo-1624623278313-a930126a11c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'
                  alt=''
                  className='object-cover w-full transition duration-500 aspect-square group-hover:opacity-90'
                />

                <div className='flex absolute inset-0 flex-col justify-end items-start p-6'>
                  <h3 className='text-xl font-medium text-white'>
                    Winter Jumpers
                  </h3>

                  <span className='inline-block px-5 py-3 mt-1.5 text-xs font-medium tracking-wide text-white uppercase bg-black'>
                    Shop Now
                  </span>
                </div>
              </a>
            </li>

            <li className='lg:col-span-2 lg:col-start-2 lg:row-span-2 lg:row-start-1'>
              <a href='#' className='block relative group'>
                <img
                  src='https://images.unsplash.com/photo-1593795899768-947c4929449d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80'
                  alt=''
                  className='object-cover w-full rounded-2xl transition duration-500 aspect-square group-hover:opacity-90'
                />

                <div className='flex absolute inset-0 flex-col justify-end items-start p-6'>
                  <h3 className='text-xl font-medium text-white'>
                    Skinny Jeans Blue
                  </h3>

                  <span className='inline-block px-5 py-3 mt-1.5 text-xs font-medium tracking-wide text-white uppercase bg-black'>
                    Shop Now
                  </span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}
