import React from 'react';
import { getCollections } from '../lib/shopify';

export default function CollectionsPage({ collections }) {
  console.log(collections);
  return (
    <div className='bg-white'>
      <div className='px-4 py-16 mx-auto max-w-xl sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
        <h2 className='text-2xl font-extrabold tracking-tight text-gray-900'>
          Shop by Collection
        </h2>
        <p className='mt-4 text-base text-gray-500'>
          Each season, we collaborate with world-class designers to create a
          collection inspired by the natural world.
        </p>

        <div className='mt-10 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-x-8'>
          {/* {collections.map((collection) => (
            <a
              key={collection.handle}
              href={collection.href}
              className='block group'
            >
              <div
                aria-hidden='true'
                className='overflow-hidden rounded-lg aspect-w-3 aspect-h-2 group-hover:opacity-75 lg:aspect-w-5 lg:aspect-h-6'
              >
                <img
                  src={collection.imageSrc}
                  alt={collection.imageAlt}
                  className='object-cover object-center w-full h-full'
                />
              </div>
              <h3 className='mt-4 text-base font-semibold text-gray-900'>
                {collection.name}
              </h3>
              <p className='mt-2 text-sm text-gray-500'>
                {collection.description}
              </p>
            </a>
          ))} */}
        </div>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const collections = await getCollections();

  return {
    props: { collections }, // will be passed to the page component as props
  };
}
