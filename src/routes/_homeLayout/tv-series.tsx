import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_homeLayout/tv-series')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/_homeLayout/tv-series"!</div>
}
