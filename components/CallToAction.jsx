export default function CallToAction() {
  return (
    <div className='bg-[#3993DD]'>
      <div className='px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center'>
        <div className='lg:w-0 lg:flex-1'>
          <h2
            className='text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl'
            id='newsletter-headline'
          >
            Sign up for our newsletter
          </h2>
          <p className='mt-3 max-w-3xl text-lg leading-6 text-gray-900'>
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            Lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat.
          </p>
        </div>
        <div className='mt-8 lg:mt-0 lg:ml-8'>
          <form className='sm:flex'>
            <label htmlFor='email-address' className='sr-only'>
              Email address
            </label>
            <input
              id='email-address'
              name='email-address'
              type='email'
              autoComplete='email'
              required
              className='px-5 py-3 w-full placeholder-gray-500 rounded-md border border-transparent focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white sm:max-w-xs'
              placeholder='Enter your email'
            />
            <div className='mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0'>
              <button
                type='submit'
                className='flex justify-center items-center px-5 py-3 w-full text-base font-medium text-white bg-indigo-500 rounded-md border border-transparent hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500'
              >
                Notify me
              </button>
            </div>
          </form>
          <p className='mt-3 text-sm text-gray-900'>
            We care about the protection of your data. Read our{' '}
            <a href='#' className='font-medium text-gray-900 underline'>
              Privacy Policy.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
