import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { products, type Product } from "@/data/products";
import { LeafIcon, SnowflakeIcon } from "@/components/ui/icons";

export function Products() {
  return (
    <section id="products" className="scroll-mt-20 py-20 sm:py-24">
      <Container>
        <SectionHeading
          centered
          eyebrow="Our Products"
          title="Export-grade coconut products & fresh fruits"
          intro="A focused range, graded and packed to international standards. Specifications below are indicative — full spec sheets are shared on inquiry."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  const Icon = product.category === "Fresh Fruits" ? LeafIcon : SnowflakeIcon;
  return (
    <article className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover">
      <div className="relative aspect-[4/3] overflow-hidden border-b border-line">
        <img
          src={product.image}
          alt={`${product.name} — export-grade ${product.category.toLowerCase()}`}
          loading="lazy"
          width={480}
          height={360}
          className="h-full w-full object-cover"
        />
        <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-surface/95 px-3 py-1 text-xs font-semibold text-primary shadow-card backdrop-blur">
          <Icon className="h-3.5 w-3.5" />
          {product.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-brand-900">{product.name}</h3>
        <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
          {product.description}
        </p>

      {product.specs && product.specs.length > 0 && (
        <dl className="mt-5 grid grid-cols-1 gap-px overflow-hidden rounded-lg border border-line bg-line text-sm">
          {product.specs.map((spec) => (
            <div key={spec.label} className="flex items-center justify-between bg-surface px-3 py-2">
              <dt className="text-muted-foreground">{spec.label}</dt>
              <dd className="font-medium tabular-nums text-brand-900">{spec.value}</dd>
            </div>
            ))}
          </dl>
        )}
      </div>
    </article>
  );
}
