import { InforDataType } from "@/features/check-feature"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"

interface IDoorPizeInformationCard {
  data: InforDataType
}

export const DoorprizeInformationCard = ({ data } : IDoorPizeInformationCard ) => {
  return (
    <Card>
      <CardHeader>
      <CardTitle>Doorprize information</CardTitle>
        <CardDescription>Here is your door prize information.</CardDescription>
      </CardHeader>
      <CardContent className="text-sm">
        <div className="grid gap-3">
          <dl className="grid gap-3">
            <div className="flex items-center justify-between">
              <dt className="text-muted-foreground">Name</dt>
              <dd>{ data.name }</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-muted-foreground">Address</dt>
              <dd>
                <dd >{ data.address }</dd>
              </dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-muted-foreground">Phone</dt>
              <dd>
                <dd >{ data.phone }</dd>
              </dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-muted-foreground">Doorprize number</dt>
              <dd>
                <dd>{ data.doorprize_number }</dd>
              </dd>
            </div>
          </dl>
        </div>
      </CardContent>
    </Card>
  )
}
