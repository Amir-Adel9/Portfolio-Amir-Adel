import type { SVGProps } from 'react';
const Hamburger = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='46px'
    height='46px'
    viewBox='0 0 24 24'
    role='img'
    className='flex sm:hidden mr-2'
    xmlns='http://www.w3.org/2000/svg'
    aria-labelledby='hamburgerIconTitle'
    stroke='#64ffda'
    strokeWidth={2}
    strokeLinecap='round'
    strokeLinejoin='round'
    fill='none'
    color='#64ffda'
    {...props}
  >
    <path d='M6 7L18 7M6 12L18 12M6 17L18 17' />
  </svg>
);
export default Hamburger;
