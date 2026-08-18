import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Calculator,
  Check,
  Clock,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Truck,
} from "lucide-react";

import heroImg from "@/assets/hero-shop.jpg";
import homeCareImg from "@/assets/home-care.jpg";
import pickupImg from "@/assets/pickup.jpg";
import { CtaSection } from "@/components/site/CtaBar";
import { ServiceCard } from "@/components/site/ServiceCard";
import { Button } from "@/components/ui/button";
import { articles } from "@/data/knowledge";
import { reviews, reviewStats } from "@/data/reviews";
import { services } from "@/data/services";
import { site, telLink, waLink } from "@/lib/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `Dry Cleaning & Laundry in ${site.city} | ${site.name}` },
      {
        name: "description",
        content: `Free pickup and delivery laundry, dry cleaning, saree care with roll polish, blanket and curtain cleaning in ${site.city}. ${site.yearsExperience}+ years, ${reviewStats.average}★ from ${reviewStats.count}+ customers.`,
      },
      { property: "og:title", content: `${site.name} — Dry Cleaning & Laundry in ${site.city}` },
      {
        property: "og:description",
        content: "Fabric-first cleaning with free pickup and delivery. Price confirmed before we start.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

const promises = [
  { icon: Truck, title: "Free pickup & delivery", body: "Across Whitefield, Marathahalli, Brookefield and nearby areas." },
  { icon: ShieldCheck, title: "Price before cleaning", body: "Items are inspected and quoted upfront. No surprises at delivery." },
  { icon: Sparkles, title: "Roll polish included", body: "Every silk and Kanjivaram saree gets roll polish at no extra charge." },
  { icon: Clock, title: "On-time, every time", body: "48–72 hour standard delivery, express available before 10 AM." },
];

function Index() {
  const featured = services.slice(0, 6);
  const topReviews = reviews.slice(0, 3);
  const guides = articles.slice(0, 3);

  return (
    <>
      <section className="surface-green">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 lg:grid-cols-2 lg:py-24 lg:px-6">
          <div className="min-w-0">
            <p className="text-xs uppercase tracking-[0.22em] text-gold">
              {site.yearsExperience}+ years in {site.city}
            </p>
            <h1 className="mt-4 font-display text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
              Clothes you love,{" "}
              <span className="text-gradient-gold">cared for like our own</span>
            </h1>
            <p className="mt-5 max-w-xl text-sm opacity-85 sm:text-base">
              Dry cleaning, saree care with complimentary roll polish, blankets, curtains and
              everyday laundry — collected from your door and returned finished, on time.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild size="lg" variant="gold">
                <a href={waLink("Hi Namma Laundry, I would like to book a pickup.")}>
                  <MessageCircle className="size-4" /> Book a free pickup
                </a>
              </Button>
              <Button asChild size="lg" variant="outlineLight">
                <a href={telLink}>
                  <Phone className="size-4" /> {site.phoneDisplay}
                </a>
              </Button>
              <Button asChild size="lg" variant="ghostLight">
                <Link to="/estimate">
                  <Calculator className="size-4" /> Get an estimate
                </Link>
              </Button>
            </div>
            <p className="mt-6 inline-flex items-center gap-2 text-sm opacity-85">
              <Star className="size-4 fill-gold text-gold" />
              {reviewStats.average}★ from {reviewStats.count}+ customers
            </p>
          </div>

          <div className="min-w-0">
            <img
              src={heroImg}
              alt="Inside the Namma Laundry unit — pressed garments, folded linen and washing machines"
              width={1280}
              height={960}
              className="aspect-[5/4] w-full rounded-2xl object-cover shadow-2xl"
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 lg:px-6">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {promises.map((p) => (
            <div key={p.title} className="card-elegant p-6">
              <p.icon className="size-6 text-primary" />
              <h2 className="mt-4 font-display text-lg">{p.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="surface-cream">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 lg:grid-cols-2 lg:px-6">
          <div className="media-frame">
            <img
              src={pickupImg}
              alt="Namma Laundry delivering a bundle of freshly cleaned clothes to a customer"
              loading="lazy"
              width={1024}
              height={768}
              className="aspect-[4/3] w-full object-cover"
            />
          </div>
          <div className="min-w-0">
            <h2 className="font-display text-3xl">How it works</h2>
            <div className="rule-gold mt-3" />
            <ol className="mt-6 space-y-5">
              {[
                {
                  t: "Tell us what needs cleaning",
                  d: "Call or WhatsApp us. We fix a pickup slot that suits you — same day in most areas.",
                },
                {
                  t: "We collect and inspect",
                  d: "Every item is counted, tagged and checked for stains. You get the price before we begin.",
                },
                {
                  t: "Cleaned by fabric type",
                  d: "Wash, dry clean or hand care — chosen for the fabric, then finished on a steam press.",
                },
                {
                  t: "Delivered back to your door",
                  d: "Packed, on hangers where needed, and delivered in 48–72 hours. Express available.",
                },
              ].map((step, i) => (
                <li key={step.t} className="flex gap-4">
                  <span className="grid size-8 shrink-0 place-items-center rounded-full bg-primary text-sm font-medium text-primary-foreground">
                    {i + 1}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-medium">{step.t}</span>
                    <span className="mt-1 block text-sm text-muted-foreground">{step.d}</span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 lg:px-6">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
          <div className="min-w-0">
            <h2 className="font-display text-3xl">What we clean</h2>
            <div className="rule-gold mt-3" />
          </div>
          <Button asChild variant="outline" className="shrink-0">
            <Link to="/services">All services</Link>
          </Button>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((s) => (
            <ServiceCard key={s.slug} service={s} />
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 lg:grid-cols-2 lg:px-6">
        <img
          src={homeCareImg}
          alt="Blankets, curtains and carpets cleaned by Namma Laundry"
          loading="lazy"
          className="w-full rounded-2xl object-cover shadow-lg"
        />
        <div className="min-w-0">
          <h2 className="font-display text-3xl">Home fabrics your washing machine can't handle</h2>
          <div className="rule-gold mt-3" />
          <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
            Blankets, curtains, carpets and sofa covers hold months of dust, pollen and pet dander.
            We clean them at the right temperature and, more importantly, dry them fully — so
            nothing comes back damp or smelling stale.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            {[
              "Deep dusting before any wash",
              "Fabric-matched process for velvet, linen and blackout curtains",
              "Controlled drying — no monsoon damp smell",
              "Curtains returned ready to re-hang",
            ].map((b) => (
              <li key={b} className="flex gap-3">
                <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <Button asChild className="mt-8">
            <Link to="/pricing">See full price list</Link>
          </Button>
        </div>
      </section>

      <section className="bg-secondary/40">
        <div className="mx-auto max-w-6xl px-4 py-14 lg:px-6">
          <h2 className="font-display text-3xl">What customers say</h2>
          <div className="rule-gold mt-3" />
          <div className="mt-8 grid gap-5 lg:grid-cols-3">
            {topReviews.map((r) => (
              <figure key={r.name} className="card-elegant p-6">
                <div className="flex gap-0.5">
                  {Array.from({ length: r.rating }).map((_, i) => (
                    <Star key={i} className="size-4 fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  “{r.text}”
                </blockquote>
                <figcaption className="mt-4 text-sm font-medium">
                  {r.name}
                  <span className="block text-xs font-normal text-muted-foreground">
                    {r.area} · {r.service}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
          <Button asChild variant="outline" className="mt-8">
            <Link to="/reviews">Read all reviews</Link>
          </Button>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14 lg:px-6">
        <h2 className="font-display text-3xl">Fabric care guides</h2>
        <div className="rule-gold mt-3" />
        <div className="mt-8 grid gap-5 sm:grid-cols-3">
          {guides.map((a) => (
            <Link
              key={a.slug}
              to="/knowledge/$slug"
              params={{ slug: a.slug }}
              className="card-elegant p-6 transition-shadow hover:shadow-lg"
            >
              <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{a.topic}</p>
              <h3 className="mt-2 font-display text-lg text-primary">{a.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{a.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      <CtaSection />
    </>
  );
}
