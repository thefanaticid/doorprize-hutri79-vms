import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { Input } from "../ui/input"
import { Button } from "../ui/button"
import { Textarea } from "../ui/textarea"
import { registarionFormSchema, RegistartionFormSchema } from "../../schemas/registration-form-schema"
import { useRegistrationQuery } from "../../features/registarion-feature"
import { useToast } from "../ui/use-toast"
import { useNavigate } from "@tanstack/react-router"
import CryptoJS from 'crypto-js';

export const RegistrationForm = () => {
    const form = useForm<RegistartionFormSchema>({
        resolver: zodResolver(registarionFormSchema),
        defaultValues: {
          name: "",
          address: "",
          phone: undefined
        },
    })

    const navigate = useNavigate() 

    const { toast } = useToast()

    const { mutate: registrationMutate, isPending  } = useRegistrationQuery({
        onSuccess: (response) => {    
            toast({
                title: 'Registration Success'
            })

            navigate({
                to: '/registration/success',
                search: {
                    __ref: CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(JSON.stringify(response.data))),
                }
            })
        },
        onError: (error) => {
            toast({
                variant: "destructive",
                title: 'Oh no! Something went wrong.',
                description: error.message
            })
        },
    });

    function onSubmit(values: RegistartionFormSchema) {
        registrationMutate(values) ;
    }
    
    return (
        <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormDescription>
                    Please enter your name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

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
                    Please enter your phone number, which will be used as your active WhatsApp number.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Address</FormLabel>
                <FormControl>
                    <Textarea
                    className="resize-none"
                    {...field}
                    />
                </FormControl>
                <FormDescription>
                    Please enter your address.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" disabled={isPending}> { isPending ? 'Registring...' : 'Register Now' }</Button>
        </form>
      </Form>
    )
}
