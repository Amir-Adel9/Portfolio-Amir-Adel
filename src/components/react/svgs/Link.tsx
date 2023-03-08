import type { SVGProps } from 'react';
const Link = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width=''
    height=''
    viewBox='0 0 24 20'
    xmlns='http://www.w3.org/2000/svg'
    fill='#111'
    stroke='currentColor'
    strokeWidth={2}
    strokeLinecap='round'
    strokeLinejoin='round'
    className='feather feather-external-link w-[20px] h-[20px] md:w-[32px] md:h-[32px]'
    {...props}
  >
    <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6' />
    <polyline points='15 3 21 3 21 9' />
    <line x1={10} y1={14} x2={21} y2={3} />
  </svg>
);
export default Link;
