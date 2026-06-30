import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Products } from "@/components/sections/Products";
import { Logistics } from "@/components/sections/Logistics";
import { Credentials } from "@/components/sections/Credentials";
import { InquiryForm } from "@/components/sections/InquiryForm";
import { company } from "@/data/company";

/** Organisation structured data for rich search results. */
function StructuredData() {
  const json = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: company.name,
    description: company.shortDescription,
    url: "https://blackboxtraders.in",
    email: company.email,
    telephone: company.phone,
    address: {
      "@type": "PostalAddress",
      streetAddress: "S-16, SIDCO Industrial Estate, Nanjikottai Road",
      addressLocality: "Thanjavur",
      postalCode: "613007",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    sameAs: [company.indiamartUrl],
    taxID: company.gstin,
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(json) }}
    />
  );
}

export default function HomePage() {
  return (
    <>
      <StructuredData />
      <Navbar />
      <main id="main">
        <Hero />
        <Products />
        <Logistics />
        <Credentials />
        <InquiryForm />
      </main>
      <Footer />
    </>
  );
}
