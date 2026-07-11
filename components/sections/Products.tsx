import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { products, type Product } from "@/data/products";
import { Tilt } from "@/components/fx/Tilt";
import { Reveal } from "@/components/fx/Reveal";

export function Products() {
  return (
    <section id="products" className="scroll-mt-20 bg-white py-20 sm:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            centered
            index="01"
            eyebrow="Our Products"
            title="Export-grade coconut products & fresh fruits"
            intro="A focused range, graded and packed to international standards. Specifications below are indicative — full spec sheets are shared on inquiry."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, i) => (
            <Reveal key={product.slug} delay={(i % 3) * 90}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Tilt className="h-full rounded-lg">
      <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-line bg-surface shadow-card transition-shadow duration-300 hover:shadow-card-hover">
        <div className="relative aspect-[4/3] overflow-hidden border-b border-line bg-muted">
          <img
            src={product.image}
            alt={`${product.name} — export-grade ${product.category.toLowerCase()}`}
            loading="lazy"
            width={480}
            height={360}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          />
          <span className="absolute left-3 top-3 inline-flex items-center rounded-md bg-brand-700 px-2.5 py-1 text-xs font-semibold text-white">
            {product.category}
          </span>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <h3 className="text-lg font-bold text-brand-800">{product.name}</h3>
          <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
            {product.description}
          </p>

          {product.specs && product.specs.length > 0 && (
            <dl className="mt-5 divide-y divide-line border-t border-line text-sm">
              {product.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="flex items-center justify-between py-2"
                >
                  <dt className="text-muted-foreground">{spec.label}</dt>
                  <dd className="font-semibold tabular-nums text-brand-800">
                    {spec.value}
                  </dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </article>
    </Tilt>
  );
}
