import Link from 'next/link';
import { Fragment, useState } from 'react';
import { Dialog, Popover, Tab, Transition } from '@headlessui/react';
import {
  MenuIcon,
  QuestionMarkCircleIcon,
  SearchIcon,
  ShoppingBagIcon,
  XIcon,
} from '@heroicons/react/outline';

const collections = [
  {
    name: "Women's",
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-04-collection-01.jpg',
    imageAlt: 'Woman wearing a comfortable cotton t-shirt.',
  },
  {
    name: "Men's",
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-04-collection-02.jpg',
    imageAlt: 'Man wearing a comfortable and casual cotton t-shirt.',
  },
  {
    name: 'Desk Accessories',
    href: '#',
    imageSrc:
      'https://tailwindui.com/img/ecommerce-images/home-page-04-collection-03.jpg',
    imageAlt:
      'Person sitting at a wooden desk with paper note organizer, pencil and tablet.',
  },
];
export default function Hero() {
  return (
    <main>
      <div className='relative'>
        {/* Background image and overlap */}
        <div
          aria-hidden='true'
          className='hidden absolute inset-0 sm:flex sm:flex-col'
        >
          <div className='relative flex-1 w-full bg-gray-800'>
            <div className='overflow-hidden absolute inset-0'>
              <img
                src='https://tailwindui.com/img/ecommerce-images/home-page-04-hero-full-width.jpg'
                alt=''
                className='object-cover object-center w-full h-full'
              />
            </div>
            <div className='absolute inset-0 bg-gray-900 opacity-50' />
          </div>
          <div className='w-full h-32 bg-white md:h-40 lg:h-48' />
        </div>

        <div className='relative px-4 pb-96 mx-auto max-w-3xl text-center sm:pb-0 sm:px-6 lg:px-8'>
          {/* Background image and overlap */}
          <div
            aria-hidden='true'
            className='flex absolute inset-0 flex-col sm:hidden'
          >
            <div className='relative flex-1 w-full bg-gray-800'>
              <div className='overflow-hidden absolute inset-0'>
                <img
                  src='https://tailwindui.com/img/ecommerce-images/home-page-04-hero-full-width.jpg'
                  alt=''
                  className='object-cover object-center w-full h-full'
                />
              </div>
              <div className='absolute inset-0 bg-gray-900 opacity-50' />
            </div>
            <div className='w-full h-48 bg-white' />
          </div>
          <div className='relative py-32'>
            <h1 className='text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl'>
              Mid-Season Sale
            </h1>
            <div className='mt-4 sm:mt-6'>
              <a
                href='#'
                className='inline-block px-8 py-3 font-medium text-white bg-indigo-600 rounded-md border border-transparent hover:bg-indigo-700'
              >
                Shop Collection
              </a>
            </div>
          </div>
        </div>

        <section
          aria-labelledby='collection-heading'
          className='relative -mt-96 sm:mt-0'
        >
          <h2 id='collection-heading' className='sr-only'>
            Collections
          </h2>
          <div className='grid grid-cols-1 gap-y-6 px-4 mx-auto max-w-md sm:max-w-7xl sm:px-6 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-6 lg:px-8 lg:gap-x-8'>
            {collections.map((collection) => (
              <div
                key={collection.name}
                className='relative h-96 bg-white rounded-lg shadow-xl group sm:h-auto sm:aspect-w-4 sm:aspect-h-5'
              >
                <div>
                  <div
                    aria-hidden='true'
                    className='overflow-hidden absolute inset-0 rounded-lg'
                  >
                    <div className='overflow-hidden absolute inset-0 group-hover:opacity-75'>
                      <img
                        src={collection.imageSrc}
                        alt={collection.imageAlt}
                        className='object-cover object-center w-full h-full'
                      />
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50' />
                  </div>
                  <div className='flex absolute inset-0 items-end p-6 rounded-lg'>
                    <div>
                      <p aria-hidden='true' className='text-sm text-white'>
                        Shop the collection
                      </p>
                      <h3 className='mt-1 font-semibold text-white'>
                        <a href={collection.href}>
                          <span className='absolute inset-0' />
                          {collection.name}
                        </a>
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
