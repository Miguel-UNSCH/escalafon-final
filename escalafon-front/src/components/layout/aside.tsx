import { Button } from "../ui/button";
import { X } from "lucide-react";
import { FaChevronLeft } from "react-icons/fa";

import AsideOptions from "@/components/layout/aside-options";
import Image from "next/image";
import { SidebarMenu } from "@/types/opciones_menu";

function Aside({
  openSidebar,
  setOpenSidebar,
  sidebarMinimize,
  toogleMinimizeSidebar,
  toggleSidebar,
  sidebarOptions,
}: {
  openSidebar: boolean;
  setOpenSidebar: (value: boolean) => void;
  sidebarMinimize: boolean;
  toogleMinimizeSidebar: () => void;
  toggleSidebar: () => void;
  sidebarOptions: SidebarMenu[];
}) {
  return (
    <aside
      className={`
      ${openSidebar ? "translate-x-0" : "-translate-x-full"}
      ${sidebarMinimize ? "w-20" : "w-72"}
      fixed inset-y-0 left-0 z-50 bg-white dark:bg-[#1D1E24] transform transition-all duration-300 ease-in-out
      lg:translate-x-0 lg:static lg:inset-0 flex flex-col
    `}>
      <div className="flex items-center justify-between p-6 border-b border-border">
        <div className="text-4xl font-extrabold">
          {sidebarMinimize ? (
            <Image src={'/logo/logo.png'} alt="logo" width={50} height={50}/>
          ) : (
            <Image src={'/logo/logo.png'} alt="logo" width={100} height={50}/>
          )}
        </div>
        <Button variant="ghost" size="icon" onClick={toggleSidebar} className="lg:hidden">
          <X className="h-6 w-6" />
          <span className="sr-only">Cerrar menú</span>
        </Button>
      </div>
      <div className="p-6 overflow-y-auto">
        <AsideOptions sidebarOptions={sidebarOptions} setOpenSidebar={setOpenSidebar} sidebarMinimize={sidebarMinimize} />
      </div>
      <Button
        variant="ghost"
        size="icon"
        onClick={toogleMinimizeSidebar}
        className={`absolute hidden lg:block top-4 bg-primary rounded-none rounded-tl-xl rounded-bl-xl w-fit transition-all
          ${sidebarMinimize ? "-right-3.5 rotate-180" : "right-0"}
          `}>
        <FaChevronLeft className=""/>
        <span className="sr-only">{sidebarMinimize ? "Expandir barra lateral" : "Minimizar barra lateral"}</span>
      </Button>
    </aside>
  );
}

export default Aside;