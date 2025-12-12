import { createFileRoute } from '@tanstack/react-router'
import MainContent from '../../components/content/MainContent'

export const Route = createFileRoute('/home/')({
  component: MainContent,
})
