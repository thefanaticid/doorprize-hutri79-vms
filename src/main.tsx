import { createRoot } from 'react-dom/client'
import './assets/css/app.css'
// Import the generated route tree
import { routeTree } from './routeTree.gen'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { JotaiProvider } from './contexts/jotai-context'
import { ThemeProvider } from './contexts/theme-context'

const queryClient = new QueryClient()

// Create a new router instance
const router = createRouter({ 
  routeTree,
  basepath: '/doorprize-hutri79-vms',
  context: {
    queryClient,
  },
  defaultPreload: 'intent',
  // Since we're using React Query, we don't want loader calls to ever be stale
  // This will ensure that the loader is always called when the route is preloaded or visited
  defaultPreloadStaleTime: 0
})

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

createRoot(document.getElementById('root')!).render(
  <JotaiProvider>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="system" >
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  </JotaiProvider>
)
