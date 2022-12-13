import Link from 'next/link';

const Button = ({ children }) => (
  <a
    class='inline-block relative text-sm font-medium text-indigo-600 group focus:outline-none focus:ring active:text-indigo-500'
    href='/download'
  >
    <span class='absolute inset-0 bg-indigo-600 transition-transform translate-x-0 translate-y-0 group-hover:translate-y-0.5 group-hover:translate-x-0.5'></span>

    <span class='block relative px-8 py-3 bg-white border border-current'>
      {children}
    </span>
  </a>
);

export default Button;
