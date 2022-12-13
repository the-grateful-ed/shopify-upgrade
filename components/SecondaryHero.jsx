import React from 'react';

export default function SecondaryHero() {
  return (
    <div>
      {' '}
      <main className='px-4 mx-auto mt-8 max-w-7xl sm:mt-12 bg-[#dd7dff]'>
        <div className='text-center'>
          <h1 className='text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl'>
            <span className='block xl:inline'>Hand-crafted custom made </span>{' '}
            <span className='block text-[#38dbff] xl:inline'>Bead Kits</span>
          </h1>
          <p className='mx-auto mt-3 max-w-md text-base text-black sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
            We bring you beads that are specifically picked for their unique
            qualities and visual appeal. Guarenteed to look awesome on anyone!
          </p>
          <div className='mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8'>
            <div className='mt-3 rounded-md shadow sm:mt-0 sm:ml-3'>
              <a
                class='inline-block relative text-sm font-medium text-[#38dbff] group focus:outline-none focus:ring active:text-[#38dbff]'
                href='/download'
              >
                <span class='absolute inset-0 bg-[#38dbff]  translate-x-1.5 translate-y-1.5 group-hover:translate-y-0 group-hover:translate-x-0'></span>

                <span class='block relative px-10 py-4 text-xl text-black bg-white border border-current'>
                  Shop Now!
                </span>
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
