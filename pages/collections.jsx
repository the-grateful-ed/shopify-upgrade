import { getCollections } from '../lib/shopify';
import React from 'react';

export default function Home({ collections }) {
  console.log(collections);
  return <div>collections</div>;
}

export async function getStaticProps() {
  const collections = await getCollections();

  return {
    props: { collections }, // will be passed to the page component as props
  };
}
