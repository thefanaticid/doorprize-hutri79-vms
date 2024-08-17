import { createLazyFileRoute, Link } from '@tanstack/react-router'
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Loader } from '@/components/shared/loader';

export const Route = createLazyFileRoute('/_base/registration/success')({
  component: RegistartionSuccessComponent,
  pendingComponent: Loader
})

function RegistartionSuccessComponent() {
  const { data } = Route.useLoaderData() ;

  return (
    <div className='flex items-center justify-center text-center h-screen '>
      <div className='grid gap-6'>
        <div className='grid gap-2'>
          <Check size={60} color="white" className="mx-auto rounded-full bg-primary y p-4 box-border shadow-sm" />
          <h3 className='text-2xl font-semibold'>Registration Success</h3>
        </div>
        
        <span>Thank you for your participation { data.name  }</span>
        
        <div>
            <h3 className='font-semibold'>Your Door Prize Number Is</h3>
            <span className="text-primary  text-3xl md:text-6xl">{ data.doorprize_number }</span>
        </div>

        <span>We wish you the best of luck in your endeavors.</span>
        
        <span>Please retain your door prize number in case you are fortunate enough to be able to present it in order to receive a pool prize.</span>

        <div className="mx-auto ">
            <Link to="/" className=" flex items-center gap-1">
              <Button>
                Back
              </Button>
            </Link>
        </div>
      </div>
    </div>
  )
}