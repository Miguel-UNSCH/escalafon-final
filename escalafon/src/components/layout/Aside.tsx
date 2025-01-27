interface AsideProps {
  isActiveAside: boolean;
  setIsActiveAside: (value: boolean) => void;
}

function Aside({ isActiveAside, setIsActiveAside } : AsideProps) {
  return (
    <>
      {
        isActiveAside && (
          <aside className='border-r border-dashed border-[#263240] p-4 w-72 hidden lg:block'>Hola</aside>
        )
      }
    </>
  )
}

export default Aside;
