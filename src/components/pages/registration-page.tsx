import { RegistrationForm } from "../form/registration-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"

export const RegistrationPage = () => {
  return (
    <Card className="">
        <CardHeader>
            <CardTitle>Registration Form</CardTitle>
            <CardDescription>Get your door prize number by filling out the form</CardDescription>
        </CardHeader>
        <CardContent>
            <RegistrationForm />
        </CardContent>
    </Card>
  )
}
