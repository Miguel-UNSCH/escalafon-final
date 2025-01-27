'use client'

import Aside from '@/components/layout/Aside';
import Header from '@/components/layout/Header';
import { ReactNode, useState } from 'react';

interface DashboardProps {
  children: ReactNode;
}

export default function Dashboard({ children }: DashboardProps) {

  const [isActiveAside, setIsActiveAside] = useState(false);

  return (
    <main className='h-full flex'>
      <Aside isActiveAside={isActiveAside} setIsActiveAside={setIsActiveAside}/>
      <main className='h-full flex flex-col flex-1 pt-20 overflow-y-auto'>
        <Header isActiveAside={isActiveAside} setIsActiveAside={setIsActiveAside}/>
        <main className='p-4 w-full h-full'>{children}</main>
      </main>
    </main>
  )
}
