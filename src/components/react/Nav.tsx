import type { ReactElement } from 'react';

const Nav: React.FC<{
  children: ReactElement;
  isClicked: boolean;
}> = (props) => {
  return (
    <a
      className='cursor-pointer'
      onClick={(e) => {
        e.preventDefault();
        const elementToView = document.getElementById(
          `${!props.isClicked ? 'work' : 'home'}`
        );
        console.log(elementToView);
        elementToView?.scrollIntoView();
      }}
    >
      {props.children}
    </a>
  );
};

export default Nav;
