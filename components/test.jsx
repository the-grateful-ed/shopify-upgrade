import { Fragment, useContext, useRef } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import Image from 'next/image';
import Link from 'next/link';
import { CartContext } from '../context/shopContext';
import { formatter } from '../utils/helpers';

export default function MiniCart({ cart }) {
  const cancelButtonRef = useRef();

  const {
    cartOpen,
    setCartOpen,
    checkoutUrl,
    removeCartItem,
    clearCart,
    cartLoading,
    incrementCartItem,
    decrementCartItem,
  } = useContext(CartContext);

  let cartTotal = 0;
  cart.map((item) => {
    cartTotal += item?.variantPrice * item?.variantQuantity;
  });

  return (
    <Transition.Root show={cartOpen} as={Fragment}>
      <Dialog
        initialFocus={cancelButtonRef}
        as='div'
        className='overflow-hidden fixed inset-0 z-50'
        onClose={() => {
          setCartOpen(!cartOpen);
        }}
      >
        <div
          className='block relative p-8 pt-4 w-screen max-w-sm bg-white border-2 border-black'
          aria-modal='true'
          role='dialog'
          tabindex='-1'
        >
          <button
            ref={cancelButtonRef}
            className='block relative -mr-4 ml-auto text-gray-600 transition hover:scale-110'
            onClick={() => setCartOpen(false)}
          >
            <span className='sr-only'>Close cart</span>

            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              stroke-width='1.5'
              stroke='currentColor'
              className='w-5 h-5'
            >
              <path
                stroke-linecap='round'
                stroke-linejoin='round'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </button>

          <div className='mt-6 space-y-6'>
            {cart.length > 0 ? (
              <ul className='space-y-4' role='list'>
                {cart.map((product) => (
                  <li
                    className='flex items-center'
                    key={product.id + Math.random()}
                  >
                    <div className='relative'>
                      <Transition.Child
                        as={Fragment}
                        enter='ease-in-out duration-500'
                        enterFrom='opacity-0'
                        enterTo='opacity-100'
                        leave='ease-in-out duration-500'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                      >
                        <Dialog.Overlay className='absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity' />
                      </Transition.Child>
                      <span
                        className={`absolute inset-0 bg-teal-500 translate-x-1 translate-y-1 ${
                          cartLoading ? 'bg-white opacity-60' : 'hidden'
                        }`}
                      ></span>
                      <Image
                        src={product.image}
                        alt={product.title}
                        layout='fill'
                        objectFit='cover'
                      />
                    </div>

                    <div className='ml-4'>
                      <h3 className='font-mono text-sm'>
                        <Link
                          href={`/products/${product.handle}`}
                          passHref
                          onClick={() => setCartOpen(false)}
                        >
                          {product.title}
                        </Link>
                      </h3>

                      <dl className='mt-0.5 space-y-px font-mono text-[10px]'>
                        <div>
                          <dt className='inline'>Size:</dt>
                          <dd className='inline'>XXS</dd>
                        </div>

                        <div>
                          <dt className='inline'>Color:</dt>
                          <dd className='inline'>White</dd>
                        </div>
                      </dl>
                    </div>

                    <div className='flex flex-1 gap-2 justify-end items-center'>
                      <form>
                        <label for='Line1Qty' className='sr-only'>
                          {' '}
                          Quantity{' '}
                        </label>

                        <input
                          type='number'
                          min='1'
                          value='1'
                          id='Line1Qty'
                          className='h-8 w-12 border-2 border-black bg-white p-0 text-center font-mono text-xs text-black [-moz-appearance:_textfield] focus:outline-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none'
                        />
                      </form>

                      <button className='transition hover:text-red-600'>
                        <span className='sr-only'>Remove item</span>

                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          stroke-width='1.5'
                          stroke='currentColor'
                          className='w-4 h-4'
                        >
                          <path
                            stroke-linecap='round'
                            stroke-linejoin='round'
                            d='M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0'
                          />
                        </svg>
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div>
                <p>Nothing in your cart!</p>
              </div>
            )}
          </div>

          <div className='space-y-4 text-center'>
            <a
              href='#'
              className='block px-5 py-3 font-mono text-sm uppercase border-2 border-black hover:ring-1 hover:ring-black'
            >
              View my cart (2)
            </a>

            <a
              href='#'
              className='block px-5 py-3 font-mono text-sm text-white uppercase bg-teal-500 border-black hover:bg-teal-600'
            >
              Checkout
            </a>

            <a
              href='#'
              className='inline-block font-mono text-sm underline uppercase underline-offset-4 hover:opacity-75'
            >
              Continue shopping
            </a>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
