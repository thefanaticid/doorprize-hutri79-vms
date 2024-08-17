import { createRootRouteWithContext, Link, Outlet, ScrollRestoration } from '@tanstack/react-router'
import { lazy, Suspense } from 'react'
import { Loader } from '../components/shared/loader'
import { Button } from '../components/ui/button'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { QueryClient } from '@tanstack/react-query'
import { Toaster } from '../components/ui/toaster'

const TanStackRouterDevtools =
  process.env.NODE_ENV === 'production'
    ? () => null // Render nothing in production
    : lazy(() =>
        // Lazy load in development
        import('@tanstack/router-devtools').then((res) => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        })),
      )


export const Route = createRootRouteWithContext<{
    queryClient: QueryClient
  }>()({
  component: () => (
    <Suspense fallback={<Loader />}>
        <>
            {/* <Loader /> */}
            <ScrollRestoration  />
            <Outlet />
            <Toaster />
            <TanStackRouterDevtools />
            <ReactQueryDevtools initialIsOpen={false} />
        </>
    </Suspense>
  ),
  notFoundComponent: () => (
    <div className='h-screen w-full flex justify-center items-center text-center'>
        <div className='w-fit grid gap-5'>
            <div className='grid gap-1'>
                <h3 className='font-semibold text-3xl'>Whoops, your destination doesn't exist!</h3>
                <span className='text-muted-foreground'>Maybe you have the wrong street or address. Let's go back before it gets dark!</span>
            </div>
            <Link to='/'><Button>Back</Button></Link>
        </div> 
    </div>
  ),
  errorComponent: (error) => (
    <div className='h-screen w-full flex justify-center items-center text-center'>
        <div className='w-fit grid gap-5'>
            <div className='grid gap-1'>
                <h3 className='font-semibold text-3xl'>Oh no! Something went wrong.</h3>
                <span className='text-muted-foreground'>{ error.error.message }</span>
            </div>
        </div> 
    </div>
  )
})
