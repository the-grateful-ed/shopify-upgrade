import { useContext, useState, Fragment } from 'react';
import { CartContext } from '../context/shopContext';
import Image from 'next/image';
import { Dialog, Popover, Tab, Transition } from '@headlessui/react';
import {
  MenuIcon,
  QuestionMarkCircleIcon,
  SearchIcon,
  ShoppingBagIcon,
  XIcon,
} from '@heroicons/react/outline';
import MiniCart from './MiniCart';
const currencies = ['CAD', 'USD', 'AUD', 'EUR', 'GBP'];

const navigation = {
  categories: [
    {
      name: 'Women',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg',
          imageAlt:
            'Models sitting back to back, wearing Basic Tee in black and bone.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg',
          imageAlt:
            'Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees.',
        },
        {
          name: 'Accessories',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg',
          imageAlt:
            'Model wearing minimalist watch with black wristband and white watch face.',
        },
        {
          name: 'Carry',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-category-04.jpg',
          imageAlt:
            'Model opening tan leather long wallet with credit card pockets and cash pouch.',
        },
      ],
    },
    {
      name: 'Men',
      featured: [
        {
          name: 'New Arrivals',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-01.jpg',
          imageAlt:
            'Hats and sweaters on wood shelves next to various colors of t-shirts on hangers.',
        },
        {
          name: 'Basic Tees',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-02.jpg',
          imageAlt: 'Model wearing light heather gray t-shirt.',
        },
        {
          name: 'Accessories',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-03.jpg',
          imageAlt:
            'Grey 6-panel baseball hat with black brim, black mountain graphic on front, and light heather gray body.',
        },
        {
          name: 'Carry',
          href: '#',
          imageSrc:
            'https://tailwindui.com/img/ecommerce-images/mega-menu-01-men-category-04.jpg',
          imageAlt:
            'Model putting folded cash into slim card holder olive leather wallet with hand stitching.',
        },
      ],
    },
  ],
  pages: [
    { name: 'Company', href: '#' },
    { name: 'Stores', href: '#' },
  ],
};
const trendingProducts = [
  {
    id: 1,
    name: 'Leather Long Wallet',
    color: 'Natural',
    price: '$75',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-04-trending-product-02.jpg',
    imageAlt: 'Hand stitched, orange leather long wallet.',
  },
  // More products...
];
const perks = [
  {
    name: 'Free returns',
    imageUrl:
      'https://tailwindui.com/img/ecommerce/icons/icon-returns-light.svg',
    description:
      'Not what you expected? Place it back in the parcel and attach the pre-paid postage stamp.',
  },
  {
    name: 'Same day delivery',
    imageUrl:
      'https://tailwindui.com/img/ecommerce/icons/icon-calendar-light.svg',
    description:
      'We offer a delivery service that has never been done before. Checkout today and receive your products within hours.',
  },
  {
    name: 'All year discount',
    imageUrl:
      'https://tailwindui.com/img/ecommerce/icons/icon-gift-card-light.svg',
    description:
      'Looking for a deal? You can use the code "ALLYEAR" at checkout and get money off all year round.',
  },
  {
    name: 'For the planet',
    imageUrl:
      'https://tailwindui.com/img/ecommerce/icons/icon-planet-light.svg',
    description:
      'We???ve pledged 1% of sales to the preservation and restoration of the natural environment.',
  },
];
const footerNavigation = {
  products: [
    { name: 'Bags', href: '#' },
    { name: 'Tees', href: '#' },
    { name: 'Objects', href: '#' },
    { name: 'Home Goods', href: '#' },
    { name: 'Accessories', href: '#' },
  ],
  company: [
    { name: 'Who we are', href: '#' },
    { name: 'Sustainability', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy', href: '#' },
  ],
  customerService: [
    { name: 'Contact', href: '#' },
    { name: 'Shipping', href: '#' },
    { name: 'Returns', href: '#' },
    { name: 'Warranty', href: '#' },
    { name: 'Secure Payments', href: '#' },
    { name: 'FAQ', href: '#' },
    { name: 'Find a store', href: '#' },
  ],
};

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Nav() {
  const { cart, cartOpen, setCartOpen } = useContext(CartContext);

  let cartQuantity = 0;
  cart.map((item) => {
    return (cartQuantity += item?.variantQuantity);
  });
  const [open, setOpen] = useState(false);
  return (
    <div>
      {' '}
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as='div'
          className='flex fixed inset-0 z-40 lg:hidden'
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter='transition-opacity ease-linear duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='transition-opacity ease-linear duration-300'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter='transition ease-in-out duration-300 transform'
            enterFrom='-translate-x-full'
            enterTo='translate-x-0'
            leave='transition ease-in-out duration-300 transform'
            leaveFrom='translate-x-0'
            leaveTo='-translate-x-full'
          >
            <div className='flex overflow-y-auto relative flex-col pb-12 w-full max-w-xs bg-white shadow-xl'>
              <div className='flex px-4 pt-5 pb-2'>
                <button
                  type='button'
                  className='inline-flex justify-center items-center p-2 -m-2 text-gray-400 rounded-md'
                  onClick={() => setOpen(false)}
                >
                  <span className='sr-only'>Close menu</span>
                  <XIcon className='w-6 h-6' aria-hidden='true' />
                </button>
              </div>

              {/* Links */}
              <Tab.Group as='div' className='mt-2'>
                <div className='border-b border-gray-200'>
                  <Tab.List className='flex px-4 -mb-px space-x-8'>
                    {/* {navigation.categories.map((category) => (
                      <Tab
                        key={category.name}
                        className={({ selected }) =>
                          classNames(
                            selected
                              ? 'text-indigo-600 border-indigo-600'
                              : 'text-gray-900 border-transparent',
                            'flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium'
                          )
                        }
                      >
                        {category.name}
                      </Tab>
                    ))} */}
                  </Tab.List>
                </div>
                <Tab.Panels as={Fragment}>
                  {/* {navigation.categories.map((category) => (
                    <Tab.Panel
                      key={category.name}
                      className='px-4 py-6 space-y-12'
                    >
                      <div className='grid grid-cols-2 gap-x-4 gap-y-10'>
                        {category.featured.map((item) => (
                          <div key={item.name} className='relative group'>
                            <div className='overflow-hidden bg-gray-100 rounded-md aspect-w-1 aspect-h-1 group-hover:opacity-75'>
                              <img
                                src={item.imageSrc}
                                alt={item.imageAlt}
                                className='object-cover object-center'
                              />
                            </div>
                            <a
                              href={item.href}
                              className='block mt-6 text-sm font-medium text-gray-900'
                            >
                              <span
                                className='absolute inset-0 z-10'
                                aria-hidden='true'
                              />
                              {item.name}
                            </a>
                            <p
                              aria-hidden='true'
                              className='mt-1 text-sm text-gray-500'
                            >
                              Shop now
                            </p>
                          </div>
                        ))}
                      </div>
                    </Tab.Panel>
                  ))} */}
                </Tab.Panels>
              </Tab.Group>

              <div className='px-4 py-6 space-y-6 border-t border-gray-200'>
                {/* {navigation.pages.map((page) => (
                  <div key={page.name} className='flow-root'>
                    <a
                      href={page.href}
                      className='block p-2 -m-2 font-medium text-gray-900'
                    >
                      {page.name}
                    </a>
                  </div>
                ))} */}
              </div>

              <div className='px-4 py-6 space-y-6 border-t border-gray-200'>
                <div className='flow-root'>
                  <a
                    href='#'
                    className='block p-2 -m-2 font-medium text-gray-900'
                  >
                    Create an account
                  </a>
                </div>
                <div className='flow-root'>
                  <a
                    href='#'
                    className='block p-2 -m-2 font-medium text-gray-900 link link-underline link-underline-black'
                  >
                    Sign in
                  </a>
                </div>
              </div>

              <div className='px-4 py-6 space-y-6 border-t border-gray-200'>
                {/* Currency selector */}
                {/* <form>
                  <div className='inline-block'>
                    <label htmlFor='mobile-currency' className='sr-only'>
                      Currency
                    </label>
                    <div className='relative -ml-2 rounded-md border-transparent group focus-within:ring-2 focus-within:ring-white'>
                      <select
                        id='mobile-currency'
                        name='currency'
                        className='flex items-center py-0.5 pr-5 pl-2 text-sm font-medium text-gray-700 bg-none rounded-md border-transparent group-hover:text-gray-800 focus:outline-none focus:ring-0 focus:border-transparent'
                      >
                        {currencies.map((currency) => (
                          <option key={currency}>{currency}</option>
                        ))}
                      </select>
                      <div className='flex absolute inset-y-0 right-0 items-center pointer-events-none'>
                        <svg
                          aria-hidden='true'
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 20 20'
                          className='w-5 h-5 text-gray-500'
                        >
                          <path
                            stroke='currentColor'
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth='1.5'
                            d='M6 8l4 4 4-4'
                          />
                        </svg>
                      </div>
                    </div>
                  </div>
                </form> */}
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
      <header className='relative'>
        <nav aria-label='Top'>
          {/* Top navigation */}
          <div className='bg-[#38dbff]'>
            <p className='flex justify-center py-2 w-full text-sm font-medium text-center text-gray-500'>
              Get free delivery on orders over $100
            </p>
          </div>

          {/* Secondary navigation */}
          <div className='bg-[#dd7dff]'>
            <div className='px-4 mx-auto max-w-7xl sm:px-6 lg:px-8'>
              <div className='flex justify-between items-center h-20'>
                {/* Logo (lg+) */}
                <div className='hidden lg:flex-1 lg:flex lg:items-center'>
                  <a href='./'>
                    <span className='sr-only'>Pinky's Bead Company</span>
                    <h1 className='block mb-1 text-2xl font-extrabold tracking-tight leading-none text-white md:text-3xl lg:text-4xl'>
                      Pinky's
                      <mark className='px-2 text-white bg-blue-600 rounded dark:bg-blue-500'>
                        Bead
                      </mark>
                      Co.
                    </h1>
                  </a>
                </div>

                <div className='hidden h-full lg:flex'>
                  {/* Flyout menus */}
                </div>

                {/* Mobile menu and search (lg-) */}
                <div className='flex flex-1 items-center lg:hidden'>
                  <button
                    type='button'
                    className='p-2 -ml-2 text-gray-400 bg-white rounded-md'
                    onClick={() => setOpen(true)}
                  >
                    <span className='sr-only'>Open menu</span>
                    <MenuIcon className='w-6 h-6' aria-hidden='true' />
                  </button>

                  {/* Search */}
                  <a
                    href='#'
                    className='p-2 ml-2 text-gray-400 hover:text-gray-500'
                  >
                    <span className='sr-only'>Search</span>
                    <SearchIcon className='w-6 h-6' aria-hidden='true' />
                  </a>
                </div>

                {/* Logo (lg-) */}
                <a href='#' className='lg:hidden'>
                  <span className='sr-only'>Workflow</span>
                  <img
                    src='https://tailwindui.com/img/logos/workflow-mark.svg?color=indigo&shade=600'
                    alt=''
                    className='w-auto h-8'
                  />
                </a>

                <div className='flex flex-1 justify-end items-center'>
                  <a
                    href='#'
                    className='hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block'
                  >
                    Search
                  </a>

                  <div className='flex items-center lg:ml-8'>
                    {/* Help */}
                    <a
                      href='#'
                      className='p-2 text-gray-400 hover:text-gray-500 lg:hidden'
                    >
                      <span className='sr-only'>Help</span>
                      <QuestionMarkCircleIcon
                        className='w-6 h-6'
                        aria-hidden='true'
                      />
                    </a>
                    <a
                      href='#'
                      className='hidden text-sm font-medium text-gray-700 hover:text-gray-800 lg:block'
                    >
                      Help
                    </a>

                    {/* Cart */}
                    <div className='flow-root ml-4 lg:ml-8'>
                      <a
                        href='#'
                        className='flex items-center p-2 -m-2 group'
                        onClick={() => setCartOpen(!cartOpen)}
                      >
                        <ShoppingBagIcon
                          className='flex-shrink-0 w-6 h-6 text-black group-hover:text-gray-800'
                          aria-hidden='true'
                        />
                        <span className='ml-2 text-sm font-medium text-black group-hover:text-gray-800'>
                          {cartQuantity}
                        </span>
                        <span className='sr-only'>items in cart, view bag</span>
                      </a>
                      <MiniCart cart={cart} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
}
