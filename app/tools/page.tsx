import { SiteHeader } from "@/components/site-header"
import { BlogGrid } from "@/components/blog-grid"
import { Footer } from "@/components/footer"

export default function BlogPage() {
  return (
    <>
      <SiteHeader />
      <main className="container pt-24">
        <h1 className="mb-8 text-4xl font-bold">Gratis</h1>
        <BlogGrid />
      </main>
      <Footer />
    </>
  )
}

