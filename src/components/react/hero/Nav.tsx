const Nav = ({ children }: any) => {
  return (
    <a
      className='absolute cursor-pointer bottom-20'
      onClick={(e) => {
        e.preventDefault();
        const elementToView = document.getElementById('main');
        elementToView?.scrollIntoView();
      }}
    >
      {children}
    </a>
  );
};

export default Nav;
