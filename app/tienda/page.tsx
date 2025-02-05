import { SiteHeader } from "@/components/site-header"
import { ProductScroller } from "@/components/product-scroller"

export default function StorePage() {
  return (
    <>
      <SiteHeader />
      <main className="pt-16">
        <ProductScroller />
      </main>
    </>
  )
}

