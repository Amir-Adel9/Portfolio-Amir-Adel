import type { SVGProps } from 'react';

const Email = (props: SVGProps<SVGSVGElement>) => (
  <svg
    fill='#DDD'
    width='32px'
    height='32px'
    viewBox='0 0 512 512'
    xmlns='http://www.w3.org/2000/svg'
    className='duration-500 fill-[#f1f1f1] hover:fill-[#64ffda] hover:-translate-y-1'
    {...props}
  >
    <title>{'mail'}</title>
    <path d='M64 128Q64 113 73 105 81 96 96 96L416 96Q431 96 440 105 448 113 448 128L448 144 256 272 64 144 64 128ZM256 328L448 200 448 384Q448 416 416 416L96 416Q64 416 64 384L64 200 256 328Z' />
  </svg>
);
export default Email;
