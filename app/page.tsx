import { TopBar } from "@/components/layout/TopBar";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Products } from "@/components/sections/Products";
import { Logistics } from "@/components/sections/Logistics";
import { Credentials } from "@/components/sections/Credentials";
import { Gallery } from "@/components/sections/Gallery";
import { Faq } from "@/components/sections/Faq";
import { InquiryForm } from "@/components/sections/InquiryForm";
import { company } from "@/data/company";
import { products } from "@/data/products";
import { faqs } from "@/data/faq";

const BASE_URL = "https://www.blackboxtraders.in";

/**
 * Structured data for search and answer engines: Organization, WebSite,
 * product ItemList, and FAQPage in a single JSON-LD @graph. The FAQPage
 * entries mirror the visible FAQ section (a requirement for the markup to
 * be honored).
 */
function StructuredData() {
  const organization = {
    "@type": "Organization",
    "@id": `${BASE_URL}/#organization`,
    name: company.name,
    description: company.shortDescription,
    url: BASE_URL,
    logo: `${BASE_URL}/icon.svg`,
    email: company.email,
    foundingLocation: {
      "@type": "Place",
      name: company.location,
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "S-16, SIDCO Industrial Estate, Nanjikottai Road",
      addressLocality: "Thanjavur",
      postalCode: "613007",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: company.email,
      availableLanguage: ["en"],
    },
    sameAs: [
      company.indiamartUrl,
      company.exportersIndiaUrl,
      company.tradeIndiaUrl,
      company.youtubeUrl,
      "https://indiausatrade.mea.gov.in/",
    ],
    taxID: company.gstin,
    knowsAbout: [
      "coconut export",
      "desiccated coconut",
      "frozen coconut",
      "copra",
      "fresh pineapple export",
      "watermelon export",
      "cold-chain logistics",
      "sea freight for perishables",
    ],
  };

  const website = {
    "@type": "WebSite",
    "@id": `${BASE_URL}/#website`,
    url: BASE_URL,
    name: company.name,
    description: company.shortDescription,
    publisher: { "@id": `${BASE_URL}/#organization` },
    inLanguage: "en-IN",
  };

  const productList = {
    "@type": "ItemList",
    "@id": `${BASE_URL}/#products`,
    name: "Export products",
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Product",
        name: p.name,
        description: p.description,
        category: p.category,
        brand: { "@id": `${BASE_URL}/#organization` },
      },
    })),
  };

  const faqPage = {
    "@type": "FAQPage",
    "@id": `${BASE_URL}/#faq`,
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };

  const json = {
    "@context": "https://schema.org",
    "@graph": [organization, website, productList, faqPage],
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
      <TopBar />
      <Navbar />
      <main id="main">
        <Hero />
        <Products />
        <Logistics />
        <Credentials />
        <Gallery />
        <Faq />
        <InquiryForm />
      </main>
      <Footer />
    </>
  );
}
