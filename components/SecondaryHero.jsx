import React from 'react';

export default function SecondaryHero() {
  return (
    <div>
      {' '}
      <main className='px-4 mx-auto mt-8 max-w-7xl sm:mt-12'>
        <div className='text-center'>
          <h1 className='text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-6xl'>
            <span className='block xl:inline'>Data to enrich your</span>{' '}
            <span className='block text-indigo-600 xl:inline'>
              online business
            </span>
          </h1>
          <p className='mx-auto mt-3 max-w-md text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl'>
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua.
          </p>
          <div className='mx-auto mt-5 max-w-md sm:flex sm:justify-center md:mt-8'>
            <div className='rounded-md shadow'>
              <a
                href='#'
                className='flex justify-center items-center px-8 py-3 w-full text-base font-medium text-white bg-indigo-600 rounded-md border border-transparent hover:bg-indigo-700 md:py-4 md:text-lg md:px-10'
              >
                Get started
              </a>
            </div>
            <div className='mt-3 rounded-md shadow sm:mt-0 sm:ml-3'>
              <a
                href='#'
                className='flex justify-center items-center px-8 py-3 w-full text-base font-medium text-indigo-600 bg-white rounded-md border border-transparent hover:bg-gray-50 md:py-4 md:text-lg md:px-10'
              >
                Live demo
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
