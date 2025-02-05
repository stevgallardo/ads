import { SiteHeader } from "@/components/site-header"

export default function GalleryPage() {
  return (
    <>
      <SiteHeader />
      <main className="container py-16">
        <h1 className="mb-8 text-4xl font-bold">Galería</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Gallery items will go here */}
        </div>
      </main>
    </>
  )
}

