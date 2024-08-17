
export const Loader = () => {
  return (
    <div className="bg-transparent flex justify-center items-center h-screen w-full">
        <div className="size-fit">
            <div className="flex gap-2">
                <span className="relative size-3 rounded-full bg-primary animate-bounce duration-300 delay-0"></span>
                <span className="relative size-3 rounded-full bg-primary animate-bounce duration-300 delay-300"></span>
                <span className="relative size-3 rounded-full bg-primary animate-bounce duration-300 delay-700"></span>
            </div>
        </div>
    </div>
  )
}
