/* This example requires Tailwind CSS v2.0+ */
import { HomeIcon } from '@heroicons/react/solid';

const pages = [
  { name: 'Projects', href: '#', current: false },
  { name: 'Project Nero', href: '#', current: true },
];

export default function Breadcrumb() {
  return (
    <nav
      className='flex px-10 max-w-7xl bg-white border-gray-200 border-y'
      aria-label='Breadcrumb'
    >
      <ol
        role='list'
        className='flex px-4 mx-auto space-x-4 w-full max-w-screen-xl sm:px-6 lg:px-8'
      >
        <li className='flex'>
          <div className='flex items-center'>
            <a
              href='#'
              className='text-gray-400 hover:text-[#FF66CC] transition-all duration-500 ease-in-out'
            >
              <HomeIcon className='flex-shrink-0 w-5 h-5' aria-hidden='true' />
              <span className='sr-only'>Home</span>
            </a>
          </div>
        </li>
        {pages.map((page) => (
          <li key={page.name} className='flex'>
            <div className='flex items-center'>
              <svg
                className='flex-shrink-0 w-6 h-full text-gray-200'
                viewBox='0 0 24 44'
                preserveAspectRatio='none'
                fill='currentColor'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
              >
                <path d='M.293 0l22 22-22 22h1.414l22-22-22-22H.293z' />
              </svg>
              <a
                href={page.href}
                className='ml-4 text-sm font-medium text-gray-500 hover:text-[#FF66CC] transition-all duration-500 ease-in-out'
                aria-current={page.current ? 'page' : undefined}
              >
                {page.name}
              </a>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
