import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { useToast } from "../ui/use-toast"
import { checkFormSchema, CheckFormSchema } from "@/schemas/check-form-schema"
import { useCheckDataQuery } from "@/features/check-feature"
import { useAtom } from "jotai"
import { DATA_INFORMATION } from "@/storages/check-data-storage"

export const CheckForm = () => {
    const form = useForm<CheckFormSchema>({
        resolver: zodResolver(checkFormSchema),
        defaultValues: {
          phone: undefined
        },
    })

    const { toast } = useToast()
    const [, setData] = useAtom(DATA_INFORMATION)

    const { mutate: checkDataMutate, isPending  } = useCheckDataQuery({
        data: form.getValues(),
        onSuccess: (response) => {  
            
            if(!response.length) {
                setData(null)
                
                toast({
                    variant: "destructive",
                    title: 'Uh oh! Something went wrong',
                    description: 'Your phone is not registered.'
                })
            } else {
                setData(response[0])
            }
        },
        onError: (error) => {
            toast({
                variant: "destructive",
                title: 'Uh oh! Something went wrong.',
                description: error.message
            })

            console.error(error);
        },
    });

    function onSubmit(values: CheckFormSchema) {

        checkDataMutate(values) ;
    }
    
    return (
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

            <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
                <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                    <Input type="number" {...field} />
                </FormControl>
                <FormDescription>
                    Please enter your phone number and confirm that you are registered.
                </FormDescription>
                <FormMessage />
                </FormItem>
            )}
            />

            <Button type="submit" disabled={isPending}> { isPending ? 'Check...' : 'Check Door Prize Information' }</Button>
        </form>
      </Form>
    )
}
