import { createFileRoute, Link } from "@tanstack/react-router";
import { Calculator, Info } from "lucide-react";

import { CtaSection } from "@/components/site/CtaBar";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { priceGroups, priceList, pricingNotes } from "@/data/pricing";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "Laundry & Dry Cleaning Price List | Namma Laundry" },
      {
        name: "description",
        content:
          "Transparent starting prices for wash & fold, ironing, dry cleaning, sarees, blankets, curtains, carpets and specialist cleaning in Bengaluru.",
      },
      { property: "og:title", content: "Price List | Namma Laundry" },
      { property: "og:description", content: "Clear, itemised starting prices with no hidden charges." },
      { property: "og:url", content: "/pricing" },
    ],
    links: [{ rel: "canonical", href: "/pricing" }],
  }),
  component: PricingPage,
});

function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Price list"
        title="Clear prices, confirmed before we start"
        subtitle="Starting prices for every item we handle. Final price is confirmed after fabric inspection at pickup — never after delivery."
      >
        <Button asChild size="lg" variant="gold">
          <Link to="/estimate">
            <Calculator className="size-4" /> Get an online estimate
          </Link>
        </Button>
      </PageHeader>

      <div className="mx-auto max-w-4xl px-4 py-14 lg:px-6">
        {priceGroups.map((group) => {
          const items = priceList.filter((i) => i.group === group);
          if (items.length === 0) return null;
          return (
            <section key={group} className="mb-12 last:mb-0">
              <h2 className="font-display text-2xl">{group}</h2>
              <div className="rule-gold mt-3" />
              <ul className="card-elegant mt-5 divide-y divide-border">
                {items.map((item) => (
                  <li
                    key={item.id}
                    className="grid grid-cols-[minmax(0,1fr)_auto] items-baseline gap-4 px-4 py-3 sm:px-6"
                  >
                    <span className="min-w-0">
                      <span className="block text-sm sm:text-base">{item.name}</span>
                      <span className="block text-xs text-muted-foreground">{item.unit}</span>
                    </span>
                    <span className="shrink-0 font-display text-lg text-primary">₹{item.price}</span>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}

        <div className="card-elegant mt-10 p-6">
          <h2 className="flex items-center gap-2 font-display text-xl">
            <Info className="size-5 text-primary" /> Good to know
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {pricingNotes.map((n) => (
              <li key={n}>• {n}</li>
            ))}
          </ul>
        </div>
      </div>

      <CtaSection
        title="Not sure what your order will cost?"
        subtitle="Build your basket in the online estimator and get an instant total before you book."
        whatsappMessage="Hi Namma Laundry, I would like a price for my order."
      />
    </>
  );
}