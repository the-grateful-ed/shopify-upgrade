import Link from 'next/link';

export default function Hero() {
  return (
    <main>
      <div>
        {/* Hero card */}
        <div className='relative'>
          <div className='absolute inset-x-0 bottom-0 h-1/2 bg-gray-100' />
          <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>
            <div className='relative shadow-xl sm:rounded-2xl sm:overflow-hidden'>
              <div className='absolute inset-0'>
                <img
                  className='object-cover w-full h-full opacity-30'
                  src='./bg.jpg'
                  alt='People working on laptops'
                />
                <div className='absolute inset-0 bg-[#FF66CC] mix-blend-multiply bg-opacity-100' />
              </div>
              <div className='relative px-4 py-8 sm:px-6 sm:py-12 lg:py-16 lg:px-8'>
                <h1 className='text-4xl font-extrabold tracking-tight text-center sm:text-5xl lg:text-6xl'>
                  <span className='block text-white'>Take control of your</span>
                  <span className='block text-[#97BFE3]'>customer support</span>
                </h1>
                <p className='mx-auto mt-6 max-w-lg text-xl text-center text-indigo-200 sm:max-w-3xl'>
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure
                  qui lorem cupidatat commodo. Elit sunt amet fugiat veniam
                  occaecat fugiat aliqua.
                </p>
                <div className='mx-auto mt-10 max-w-sm sm:max-w-none sm:flex sm:justify-center'>
                  <div className='space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5'>
                    <a
                      href='#'
                      className='flex justify-center items-center px-4 py-3 text-base font-medium text-indigo-700 bg-white rounded-md border border-transparent shadow-sm hover:bg-indigo-50 sm:px-8'
                    >
                      Get started
                    </a>
                    <a
                      href='#'
                      className='flex justify-center items-center px-4 py-3 text-base font-medium text-white bg-indigo-500 bg-opacity-60 rounded-md border border-transparent shadow-sm hover:bg-opacity-70 sm:px-8'
                    >
                      Live demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
