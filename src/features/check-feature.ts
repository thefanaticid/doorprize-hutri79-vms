import { RequestService } from '@/lib/request-service';
import { CheckFormSchema } from '@/schemas/check-form-schema';
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { z } from 'zod'

const checkDataSchema = z.object({
    id: z.coerce.number(),
    name: z.string(),
    phone: z.coerce.number(),
    address: z.string(),
    doorprize_number: z.coerce.number()
})

export type InforDataType = z.infer<typeof checkDataSchema>


const chekDataResponseSchema = checkDataSchema.nullable().array()
export type CheckDataResponse = z.infer<typeof chekDataResponseSchema> 

interface IShowDataQuery {
    phone: number
}

interface Props {
    data: IShowDataQuery,
    onSuccess: (responses: CheckDataResponse ) => void;
    onError: (error: AxiosError<CheckDataResponse>) => void
}

export const useCheckDataQuery = ({ data, onSuccess, onError }: Props) => {
    return useMutation({
      mutationKey: ['check-data', data],
      mutationFn: (data: CheckFormSchema) => fetchCheckData(data),
      onSuccess,
      onError,
    });
};

const fetchCheckData = async (data : IShowDataQuery) : Promise<CheckDataResponse>  => {
    const requestService = new RequestService({url: '/search_or', data, schema: chekDataResponseSchema })
    const response =  await requestService.sendRequest()
    return response as CheckDataResponse;
}