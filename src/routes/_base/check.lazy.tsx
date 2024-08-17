import { CheckPage } from '@/components/pages/check-page'
import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/_base/check')({
  component: CheckPage
})