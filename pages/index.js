import { getProductsInCollection } from '../lib/shopify';
import ProductList from '../components/ProductList';
import Hero from '../components/Hero';
import Head from 'next/head';
import CallToAction from '../components/CallToAction';
import SecondaryHero from '../components/SecondaryHero';
import Incentives from '../components/Incentives';

export default function Home({ products }) {
  console.log(products);
  return (
    <div className=''>
      <Head>
        <title>Modern eCommerce Course</title>
        <meta httpEquiv='Content-Type' content='text/html; charset=utf-8' />
        <meta
          httpEquiv='Content-Type'
          content='text/html; charset=ISO-8859-1'
        />
        <meta
          name='description'
          content='Modern eCommerce Development Course focusing on Shopify, Next.js, TailwindCSS, GraphQL. Additional topics include Storefront API, Static Site Generation, getStaticPaths, getStaticProps and more.'
        />
        <meta property='og:title' content='Modern eCommerce Course' />
        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://www.buildnextshop.com' />
        <meta
          property='og:image'
          content='https://www.buildnextshop.com/share.png'
        />
        <meta
          property='og:description'
          content='Modern eCommerce Development Course focusing on Shopify, Next.js, TailwindCSS, GraphQL. Additional topics include Storefront API, Static Site Generation, getStaticPaths, getStaticProps and more.'
        />
        <meta property='og:locale' content='en_US' />
        <meta property='og:site_name' content='Modern eCommerce Course' />
      </Head>
      <SecondaryHero />
      <Hero />
      <Incentives />
      <ProductList products={products} />
      <CallToAction />
    </div>
  );
}

export async function getStaticProps() {
  const products = await getProductsInCollection();

  return {
    props: { products }, // will be passed to the page component as props
  };
}
