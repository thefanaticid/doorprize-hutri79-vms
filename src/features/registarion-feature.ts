import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { z } from 'zod' 
import { RegistartionFormSchema } from "../schemas/registration-form-schema";
import { RequestService } from "../lib/request-service";
import { generateRandomNumber } from "@/lib/utils";

const registrationResponseSchema = z.object({
    created: z.number()
}) ;

// type RegistrationSchema = z.infer<typeof registrationResponseSchema> 

export type RegistrationResponse = {
    data: {
        name: string,
        phone: number,
        address: string,
        doorprize_number: number
    }
}

interface Props {
    onSuccess: (responses: RegistrationResponse ) => void;
    onError: (error: AxiosError<RegistrationResponse>) => void
}

export const useRegistrationQuery = ({ onSuccess, onError }: Props) => {
    return useMutation({
      mutationKey: ['registartion'],
      mutationFn: (data: RegistartionFormSchema) => fetchBiodata(data),
      onSuccess,
      onError,
    });
};


const fetchBiodata = async (data: RegistartionFormSchema) : Promise<RegistrationResponse>  => {

    const transformedData = {
        data: [
            {
                id: 'INCREMENT',
                doorprize_number: generateRandomNumber(),
                ...data
            }
        ]
    }

    const requestService = new RequestService({url: '/', data: transformedData, method: 'POST', schema: registrationResponseSchema})
    
    await requestService.sendRequest()

    const responseData = {
        data : {
            ...data,
            doorprize_number: transformedData.data[0].doorprize_number
        }
    }
    
    return responseData as RegistrationResponse;
}
