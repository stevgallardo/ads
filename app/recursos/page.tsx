import { SiteHeader } from "@/components/site-header"

export default function ResourcesPage() {
  return (
    <>
      <SiteHeader />
      <main className="container py-16">
        <h1 className="mb-8 text-4xl font-bold">Recursos</h1>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Resource cards will go here */}
        </div>
      </main>
    </>
  )
}

