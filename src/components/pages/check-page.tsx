import { DATA_INFORMATION } from "@/storages/check-data-storage"
import { CheckForm } from "../form/check-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { useAtom } from "jotai"
import { DoorprizeInformationCard } from "../card/doorprize-infomation-card"

export const CheckPage = () => {
    const [data] = useAtom(DATA_INFORMATION)

    return (
        <div className="grid gap-6">
            <Card className="">
                <CardHeader>
                    <CardTitle>Check Door Prize Number</CardTitle>
                    <CardDescription>Please complete the form to obtain door prize number information.</CardDescription>
                </CardHeader>
                <CardContent>
                    <CheckForm />
                </CardContent>
            </Card>

            { data && <DoorprizeInformationCard data={data} /> }
        </div>
    )
}
