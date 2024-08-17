import { NavigationMenu } from '@/components/shared/navigation-menu'
import { createFileRoute, Outlet } from '@tanstack/react-router'

import { Goal } from 'lucide-react'

export const Route = createFileRoute('/_base')({
  component: () => <>
    <div className='min-h-screen flex flex-1 flex-col'>
      <header className='sticky top-0 flex items-center h-20 w-full gap-4 border-b bg-background px-4 md:px-6'>
        <div className=" font-semibold md:text-base flex gap-3 items-center">
          <Goal className='size-6' />
          <span className='text-base md:text-xl'> DoorPrize HUT RI  79 VMS </span>
        </div>

        <NavigationMenu />
        
      </header>
      <main className='flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10 bg-muted/40 '>
        <div className='mx-auto grid w-full max-w-6xl gap-2'>
          <Outlet />
        </div>
      </main>
      <footer className='bg-primary text-primary-foreground p-6 grid text-center w-full'>
        <span className='text-sm font-semibold'> © { new Date().getFullYear() } 79th Independence Commission VMS. All rights reserved.</span>
      </footer>
    </div>
  </>
})