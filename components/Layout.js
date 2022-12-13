import React from 'react';
import Footer from './Footer';
import Nav from './Nav';
import Breadcrumb from './Breadcrumb';

export default function Layout({ children }) {
  return (
    <div className='flex flex-col justify-between min-h-screen bg-[#dd7dff]'>
      <Nav />
      <Breadcrumb />
      <main>{children}</main>

      <Footer />
    </div>
  );
}
