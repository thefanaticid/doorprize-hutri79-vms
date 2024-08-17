import { RequestService } from '@/lib/request-service';
import { queryOptions } from '@tanstack/react-query';
import { z } from 'zod'

const showDataSchema = z.object({
    id: z.coerce.number(),
    name: z.string(),
    phone: z.coerce.number(),
    address: z.string(),
    doorprize_number: z.coerce.number()
}).optional().array()

export type ShowBiodataResponse = z.infer<typeof showDataSchema> 

interface IShowDataQuery {
    phone: number,
    addrees?: string,
    name?: string
}

export const useShowDataQuery = (data : IShowDataQuery) => {
    return queryOptions({
        queryKey: ['show-data', data],
        queryFn: () => fetchShowData(data)
    });
};

const fetchShowData = async (data : IShowDataQuery) : Promise<ShowBiodataResponse>  => {
    const requestService = new RequestService({url: '/search_or', data, schema: showDataSchema })
    const response =  await requestService.sendRequest()
    return response as ShowBiodataResponse;
}