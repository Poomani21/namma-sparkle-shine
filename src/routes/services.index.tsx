import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { CtaSection } from "@/components/site/CtaBar";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { serviceGroups, services } from "@/data/services";
import { site } from "@/lib/site";

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Laundry & Dry Cleaning Services | Namma Laundry" },
      {
        name: "description",
        content:
          "Dry cleaning, saree care, blankets, curtains, carpets, wash & fold, ironing and specialist cleaning in Bengaluru. Free pickup and delivery.",
      },
      { property: "og:title", content: "Our Services | Namma Laundry" },
      {
        property: "og:description",
        content: "Every fabric care service we offer, with starting prices and turnaround.",
      },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our services"
        title="Complete fabric care, under one roof"
        subtitle={`From weekly laundry to Kanjivaram sarees and living-room carpets — handled by a team with ${site.yearsExperience}+ years in ${site.city}.`}
      >
        <Button asChild size="lg" variant="gold">
          <Link to="/estimate">Get an online estimate</Link>
        </Button>
        <Button asChild size="lg" variant="outlineLight">
          <Link to="/pricing">View price list</Link>
        </Button>
      </PageHeader>

      <div className="mx-auto max-w-6xl px-4 py-14 lg:px-6">
        {serviceGroups.map((group) => (
          <section key={group.category} className="mb-14 last:mb-0">
            <h2 className="font-display text-2xl sm:text-3xl">{group.title}</h2>
            <p className="mt-2 text-sm text-muted-foreground">{group.note}</p>
            <div className="rule-gold mt-4" />
            <div className="mt-7 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services
                .filter((s) => s.category === group.category)
                .map((s) => (
                  <Link
                    key={s.slug}
                    to="/services/$slug"
                    params={{ slug: s.slug }}
                    className="card-elegant flex flex-col p-6 transition-shadow hover:shadow-lg"
                  >
                    <h3 className="font-display text-xl text-primary">{s.name}</h3>
                    <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.short}</p>
                    <p className="mt-4 text-sm font-medium text-primary">
                      From ₹{s.fromPrice}{" "}
                      <span className="font-normal text-muted-foreground">{s.unit}</span>
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm text-primary">
                      Learn more <ArrowRight className="size-4" />
                    </span>
                  </Link>
                ))}
            </div>
          </section>
        ))}
      </div>

      <CtaSection />
    </>
  );
}
