/* This example requires Tailwind CSS v2.0+ */
const incentives = [
  {
    name: 'Free shipping',
    imageSrc:
      'https://tailwindui.com/img/ecommerce/icons/icon-shipping-simple.svg',
    description:
      "It's not actually free we just price it into the products. Someone's paying for it, and it's not us.",
  },
  {
    name: '10-year warranty',
    imageSrc:
      'https://tailwindui.com/img/ecommerce/icons/icon-warranty-simple.svg',
    description:
      "If it breaks in the first 10 years we'll replace it. After that you're on your own though.",
  },
  {
    name: 'Exchanges',
    imageSrc:
      'https://tailwindui.com/img/ecommerce/icons/icon-exchange-simple.svg',
    description:
      "If you don't like it, trade it to one of your friends for something of theirs. Don't send it here though.",
  },
];

export default function Example() {
  return (
    <div className='bg-[#fff503]'>
      <div className='px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8'>
        <div className='relative px-6 py-16 bg-gray-50 sm:p-16'>
          <div className='mx-auto max-w-xl lg:max-w-none'>
            <div className='text-center'>
              <h2 className='z-10 text-2xl font-extrabold tracking-tight text-gray-900 bg-white'>
                We built our business on customer service
              </h2>
            </div>

            <div className='grid grid-cols-1 gap-x-8 gap-y-10 mx-auto mt-12 max-w-sm sm:max-w-none lg:grid-cols-3'>
              {incentives.map((incentive) => (
                <div
                  key={incentive.name}
                  className='text-center sm:flex sm:text-left lg:block lg:text-center'
                >
                  <div className='sm:flex-shrink-0'>
                    <div className='flow-root'>
                      <img
                        className='mx-auto w-16 h-16 stroke-2'
                        src={incentive.imageSrc}
                        alt=''
                      />
                    </div>
                  </div>
                  <div className='mt-3 sm:mt-0 sm:ml-6 lg:mt-6 lg:ml-0'>
                    <h3 className='text-sm font-medium text-gray-900'>
                      {incentive.name}
                    </h3>
                    <p className='mt-2 text-sm text-gray-500'>
                      {incentive.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
