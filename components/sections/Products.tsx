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
    <article className="group flex flex-col rounded-2xl border border-line bg-surface p-6 shadow-card transition-all duration-200 hover:-translate-y-1 hover:shadow-card-hover">
      <div className="flex items-center justify-between">
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-50 text-primary">
          <Icon className="h-6 w-6" />
        </span>
        <span className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-primary">
          {product.category}
        </span>
      </div>

      <h3 className="mt-5 text-lg font-bold text-brand-900">{product.name}</h3>
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
    </article>
  );
}
