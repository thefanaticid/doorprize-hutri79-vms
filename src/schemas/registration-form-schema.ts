import { z } from 'zod'

export const registarionFormSchema = z.object({
    name: z.string({ required_error: 'Name required' }).min(1, 'Name required'),
    phone: z.coerce.number({ invalid_type_error: 'Phone required' }),
    address: z.string({ required_error: 'Address required' }).min(1, 'Address required').max(500),
})

export type RegistartionFormSchema = z.infer<typeof registarionFormSchema>