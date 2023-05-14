import type React from 'react';

const Arrow: React.FC<{
  isClicked: boolean;
  isClickedHandler: React.Dispatch<React.SetStateAction<boolean>>;
}> = (props) => (
  <svg
    width='24px'
    height='32px'
    viewBox='0 0 24 24'
    className={`duration-500 stroke-[#f1f1f1] fill-[#f1f1f1] hover:fill-[#64ffda] hover:stroke-[#64ffda] hover:-translate-y-1 ${
      props.isClicked ? 'rotate-180' : ''
    }`}
    role='img'
    xmlns='http://www.w3.org/2000/svg'
    aria-labelledby='arrowDownIconTitle'
    stroke='#ffffff'
    strokeWidth={2}
    strokeLinecap='round'
    strokeLinejoin='round'
    onClick={() => {
      props.isClickedHandler(!props.isClicked);
    }}
    {...props}
  >
    <path d='M6 15l6 6 6-6' />
    <path d='M12 3v17' />
    <path strokeLinecap='round' d='M12 21v-1' />
  </svg>
);
export default Arrow;
