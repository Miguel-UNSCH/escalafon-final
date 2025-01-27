import { HiOutlineMenuAlt1 } from "react-icons/hi";

interface HeaderProps {
  isActiveAside: boolean;
  setIsActiveAside: (value: boolean) => void;
}

function Header({ isActiveAside, setIsActiveAside } : HeaderProps) {
  return (
    <>
      <header className='fixed top-0 bg-[#FAFBFB] dark:bg-[#131920] p-4 w-full opacity-90'>
        <button onClick={() => setIsActiveAside(!isActiveAside)}>
          <HiOutlineMenuAlt1 />
        </button>
      </header>
    </>
  )
}

export default Header;
