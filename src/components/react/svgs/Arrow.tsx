import type { SVGProps } from 'react';
const Arrow = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='32px'
    height='32px'
    viewBox='0 0 24 24'
    className='hover:scale-110 duration-500 stroke-[#DDD] fill-[#DDD] hover:fill-[#64ffda] hover:stroke-[#64ffda] animate-bounce'
    role='img'
    xmlns='http://www.w3.org/2000/svg'
    aria-labelledby='arrowDownIconTitle'
    stroke='#ffffff'
    strokeWidth={2}
    strokeLinecap='round'
    strokeLinejoin='round'
    {...props}
  >
    <path d='M6 15l6 6 6-6' />
    <path d='M12 3v17' />
    <path strokeLinecap='round' d='M12 21v-1' />
  </svg>
);
export default Arrow;
