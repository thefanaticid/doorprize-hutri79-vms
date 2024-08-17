import { createLazyFileRoute } from '@tanstack/react-router'
import { RegistrationPage } from '../../components/pages/registration-page'

export const Route = createLazyFileRoute('/_base/')({
  component: RegistrationPage
})