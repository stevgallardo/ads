import { SiteHeader } from "@/components/site-header"

export default function PodcastPage() {
  return (
    <>
      <SiteHeader />
      <main className="container py-16">
        <h1 className="mb-8 text-4xl font-bold">Podcast</h1>
        <div className="space-y-8">
          {/* Podcast episodes will go here */}
        </div>
      </main>
    </>
  )
}

