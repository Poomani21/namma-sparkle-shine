import { createFileRoute, Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

import { CtaSection } from "@/components/site/CtaBar";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import processImg from "@/assets/process.jpg";
import { reviewStats } from "@/data/reviews";
import { site } from "@/lib/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: `About Namma Laundry — ${site.yearsExperience}+ Years in ${site.city}` },
      {
        name: "description",
        content: `Namma Laundry has cared for clothes, sarees and home fabrics across ${site.city} for over ${site.yearsExperience} years. Honest pricing, careful handling, on-time delivery.`,
      },
      { property: "og:title", content: "About Namma Laundry" },
      {
        property: "og:description",
        content: `A local, experienced laundry and dry cleaning team serving ${site.city}.`,
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

const values = [
  "Price confirmed before we start, never after delivery",
  "Fabric-first handling — the process is chosen per item, not per batch",
  "Honest advice when a stain will not fully come out",
  "On-time delivery, or we tell you the day before",
  "Free pickup and delivery across our service areas",
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title={`${site.yearsExperience}+ years of fabric care, right here in ${site.city}`}
        subtitle="Namma Laundry started as a small neighbourhood laundry and grew through word of mouth. The same people still inspect every order that leaves the shop."
      />

      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 lg:grid-cols-2 lg:px-6">
        <div className="min-w-0">
          <h2 className="font-display text-2xl sm:text-3xl">Local, experienced, accountable</h2>
          <div className="rule-gold mt-3" />
          <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
            Over the last decade we have handled everything from daily office shirts to
            forty-year-old Kanjivaram sarees, winter blankets, blackout curtains and living-room
            carpets. That experience is the reason we can tell, on inspection, which process a
            fabric needs — and which one would damage it.
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
            We are not a franchise call centre. When you call {site.phoneDisplay}, you reach the
            people who will actually clean your clothes.
          </p>
          <ul className="mt-6 space-y-3">
            {values.map((v) => (
              <li key={v} className="flex gap-3 text-sm">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{v}</span>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link to="/services">Explore our services</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/reviews">Read customer reviews</Link>
            </Button>
          </div>
        </div>

        <div className="min-w-0">
          <img
            src={processImg}
            alt="Namma Laundry team pressing and finishing garments"
            loading="lazy"
            className="w-full rounded-2xl object-cover shadow-lg"
          />
          <div className="mt-6 grid grid-cols-3 gap-3 text-center">
            <div className="card-elegant p-4">
              <p className="font-display text-2xl text-primary">{site.yearsExperience}+</p>
              <p className="text-xs text-muted-foreground">Years serving {site.city}</p>
            </div>
            <div className="card-elegant p-4">
              <p className="font-display text-2xl text-primary">{reviewStats.count}+</p>
              <p className="text-xs text-muted-foreground">Happy customers</p>
            </div>
            <div className="card-elegant p-4">
              <p className="font-display text-2xl text-primary">{reviewStats.average}★</p>
              <p className="text-xs text-muted-foreground">Average rating</p>
            </div>
          </div>
        </div>
      </div>

      <CtaSection />
    </>
  );
}