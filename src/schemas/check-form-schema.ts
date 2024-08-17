import { z } from 'zod'

export const checkFormSchema = z.object({
    phone: z.coerce.number({ invalid_type_error: 'Phone required' })
})

export type CheckFormSchema = z.infer<typeof checkFormSchema>