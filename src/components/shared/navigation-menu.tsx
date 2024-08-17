import { LIST_MENU } from '@/constraints/list-menu'
import { Link, useRouterState } from '@tanstack/react-router'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { Button } from '../ui/button'
import { Goal, Menu } from 'lucide-react'

export const NavigationMenu = () => {
  const { location: { pathname } } = useRouterState()
  return (
  <>
    <nav className=' hidden flex-col gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:ml-auto  md:gap-5 md:text-sm lg:gap-6'>
      {
        LIST_MENU.map((menu, index) => (
          <Link
            key={index}
            to={menu.link}
            className={`${ pathname === menu.link ? 'text-foreground' : 'text-muted-foreground'} transition-colors hover:text-foreground`}
          >
            { menu.name }
          </Link>
        ))
      }
    </nav>

    <Sheet>
      <SheetTrigger className='ml-auto' asChild>
        <Button
          variant="outline"
          size="icon"
          className="shrink-0 md:hidden"
        >
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <div className="mb-6 font-semibold md:text-base flex gap-3 items-center">
            <Goal className='size-6' />
            <span className='text-base md:text-xl'> DoorPrize HUT RI  79 VMS </span>
        </div>
        <nav className="grid gap-6 text-lg font-medium">
          {
              LIST_MENU.map((menu, index) => (
              <Link
              key={index}
              to={menu.link}
              className={`${ pathname === menu.link ? 'text-foreground' : 'text-muted-foreground'} hover:text-foreground`}
              >
                { menu.name }
              </Link>
              ))
          }
        </nav>
      </SheetContent>
    </Sheet>
  </>
  )
}
