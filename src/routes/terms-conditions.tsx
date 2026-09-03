import { createFileRoute, Link } from "@tanstack/react-router";
import {
  AlertTriangle,
  Check,
  ClipboardList,
  Clock,
  Droplets,
  FileText,
  Gem,
  HandCoins,
  MapPin,
  Palette,
  Phone,
  Ruler,
  Shirt,
  ShoppingBag,
  Sparkles,
  ThumbsUp,
  Timer,
  Truck,
  WashingMachine,
  Archive,
  BadgeCheck,
  type LucideIcon,
} from "lucide-react";

import { CtaSection } from "@/components/site/CtaBar";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { site, telLink } from "@/lib/site";

const title = "Terms & Conditions — Namma Laundry Service Policy";
const description =
  "Complete service policy and terms & conditions for Namma Laundry: order acceptance, timelines, claims, liability limits, pickup & delivery charges and garment care disclaimers.";

export const Route = createFileRoute("/terms-conditions")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "https://namma-laundry.lovable.app/terms-conditions" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "canonical", href: "https://namma-laundry.lovable.app/terms-conditions" }],
  }),
  component: TermsPage,
});

type Section = {
  id: string;
  heading: string;
  intro?: string;
  bullets?: string[];
  ordered?: string[];
  subs?: { heading: string; intro?: string; bullets?: string[]; ordered?: string[] }[];
  table?: { head: [string, string]; rows: [string, string][] };
  outro?: string[];
};

const sections: Section[] = [
  {
    id: "order-acceptance",
    heading: "Order Acceptance",
    bullets: [
      "Garments are accepted after visual inspection at the counter.",
      "Customers must verify and confirm: garment count, service requested, special instructions (if any).",
      "Any delicate fabrics, colour-sensitive garments, fragile embellishments, or high-value items must be declared at the time of submission.",
      "Failure to declare delicate conditions may limit the laundry's liability.",
    ],
  },
  {
    id: "processing-methods",
    heading: "Processing Methods",
    bullets: [
      "Garments are accepted after visual inspection at the counter.",
      "Customers must verify and confirm: garment count, service requested, special instructions (if any).",
      "Any delicate fabrics, colour-sensitive garments, fragile embellishments, or high-value items must be declared at the time of submission.",
      "Failure to declare delicate conditions may limit the laundry's liability.",
    ],
  },
  {
    id: "service-timelines",
    heading: "Service Timelines",
    table: {
      head: ["Service", "Estimated Timeline"],
      rows: [
        ["Wash & Fold", "24 hours"],
        ["Wash & Iron", "48 hours"],
        ["Ironing Only", "24–48 hours"],
        ["Dry Cleaning", "3–5 working days"],
        ["Saree Dry Cleaning + Roll Polish", "7–9 working days"],
      ],
    },
    outro: [
      "During festive seasons, peak periods, or when order volumes are unusually high, service timelines may extend beyond the standard time mentioned above.",
      "Garments requiring additional stain treatment, special handling, or vendor processing may also require extra time.",
    ],
  },
  {
    id: "claim-reporting",
    heading: "Claim Reporting Timeline",
    intro:
      "All complaints or claims must be reported within 48 hours of garment collection. Conditions for claim acceptance:",
    bullets: [
      "The garment must remain unused after pickup.",
      "The original invoice must be presented.",
    ],
    outro: ["Claims reported after the specified time may not be accepted."],
  },
  {
    id: "limitation-of-liability",
    heading: "Limitation of Liability",
    intro:
      "In the unlikely event of loss, damage, discoloration, shrinkage, or other garment-related issues, the maximum liability of the laundry shall be limited to:",
    bullets: [
      "10 times the service charge collected for that garment, OR",
      "₹5,000, OR",
      "Depreciated value of the garment, whichever is lower.",
    ],
    outro: [
      "The laundry does not provide replacement based on market value, emotional value, or original purchase price.",
    ],
  },
  {
    id: "garment-loss",
    heading: "Garment Loss Policy",
    subs: [
      {
        heading: "Complete Garment Loss",
        intro: "If a garment is reported missing:",
        ordered: [
          "An internal search will be conducted for up to 48 hours.",
          "If the garment cannot be located, compensation will be calculated according to the liability limits stated above.",
        ],
      },
      {
        heading: "Partial Garment Loss",
        intro:
          "If part of a garment set is missing (example: dupatta, blouse piece): Compensation will be calculated based on reasonable estimated value of the missing component, subject to the liability cap.",
      },
    ],
  },
  {
    id: "damage-discoloration",
    heading: "Damage or Discoloration Policy",
    intro: "If discoloration, shrinkage, or fabric damage occurs during processing:",
    ordered: [
      "One attempt will be made to restore or reprocess the garment.",
      "If the damage is irreversible, compensation will be calculated based on: service charge, garment depreciation, liability limits.",
    ],
  },
  {
    id: "colour-bleeding",
    heading: "Colour Bleeding Disclaimer",
    outro: [
      "Certain fabrics may release dye during cleaning due to unstable dyes, fabric composition, or manufacturing processes.",
      "Colour bleeding may occur even when garments are processed according to recommended methods, including dry cleaning solvents or water-based cleaning systems.",
      "The laundry shall not be responsible for colour bleeding caused by inherent fabric characteristics or manufacturing defects.",
    ],
  },
  {
    id: "shrinkage",
    heading: "Shrinkage Disclaimer",
    intro:
      "Natural fibers such as cotton, linen, silk, and wool may shrink during cleaning despite careful handling. The laundry shall not be liable for shrinkage resulting from:",
    bullets: ["fabric composition", "manufacturer treatment", "prior usage or ageing of the garment."],
  },
  {
    id: "unsatisfactory-service",
    heading: "Unsatisfactory Service",
    intro: "If a customer is not satisfied with the finishing quality of the service:",
    ordered: [
      "The laundry will provide one complimentary reprocessing (re-wash, re-iron, or finishing correction).",
      "Reprocessing will be provided only for reasonable service defects.",
      "Service charges remain applicable, as labour, equipment, and processing costs are already incurred.",
      "After the complimentary reprocessing has been completed, the order will be considered fully serviced and closed.",
    ],
    outro: [
      "Minor finishing variations, light creases due to fabric type, or differences in personal preference shall not be considered service defects.",
    ],
  },
  {
    id: "stain-removal",
    heading: "Stain Removal Policy",
    bullets: [
      "Stain removal is undertaken on a best-effort basis and is not guaranteed 100%, as results depend on factors such as fabric type, stain type, and stain age.",
      "Our team uses industry-appropriate methods to treat stains while ensuring no damage to the fabric due to over-processing.",
      "Stain treatment charges apply for the effort and processes involved, irrespective of the final outcome.",
      "In cases where stains are not fully removed, the applicable charges will still be levied.",
    ],
    outro: [
      "We appreciate your understanding that stain removal is a specialized process with variable outcomes.",
    ],
  },
  {
    id: "high-value-garments",
    heading: "High Value Garment Policy",
    intro:
      "For garments valued above ₹10,000, customers must declare the value at the time of submission. A handling charge of 2% of declared value may be applied for special care and inspection. Maximum compensation for high-value garments shall be limited to:",
    bullets: ["20% of declared value, OR", "₹5,000, whichever is lower."],
    outro: [
      "If the value is not declared at the time of submission, the garment will be treated as a normal item and general liability rules will apply.",
    ],
  },
  {
    id: "depreciation",
    heading: "Depreciation Policy",
    intro:
      "Garment value decreases with usage and age. For compensation calculation, the following depreciation guidelines may be considered:",
    table: {
      head: ["Garment Age", "Compensation Eligibility"],
      rows: [
        ["Up to 6 months", "Up to 70%"],
        ["6 months – 1 year", "Up to 50%"],
        ["1 – 2 years", "Up to 30%"],
        ["Above 2 years", "Goodwill only"],
      ],
    },
    outro: ["All compensation remains subject to the maximum liability limits."],
  },
  {
    id: "claim-documentation",
    heading: "Documentation for Claims",
    intro: "For any compensation claim, customers may be required to provide:",
    bullets: [
      "approximate purchase value",
      "approximate purchase date",
      "proof of purchase (bill, invoice, or online purchase record)",
    ],
    outro: [
      "If proof is not available, compensation will be determined based on reasonable market estimation by management.",
    ],
  },
  {
    id: "pre-existing-conditions",
    heading: "Pre-Existing Conditions",
    intro: "The laundry is not responsible for issues arising from:",
    bullets: [
      "weak fabric",
      "prior damage",
      "fabric ageing",
      "colour instability",
      "manufacturer defects",
      "fragile accessories or embellishments.",
    ],
  },
  {
    id: "accessories",
    heading: "Accessories and Embellishments",
    intro: "The laundry is not responsible for damage to:",
    bullets: [
      "beads",
      "sequins",
      "buttons",
      "decorative prints",
      "glued decorations",
      "embroidery threads",
      "elastics or trims.",
    ],
    outro: [
      "These elements may weaken during cleaning due to fabric condition or manufacturer processes.",
    ],
  },
  {
    id: "uncollected-garments",
    heading: "Uncollected Garments",
    outro: [
      "Garments not collected within 30 days may be moved to storage.",
      "Garments unclaimed for 90 days may be disposed of or donated at the discretion of management.",
    ],
  },
  {
    id: "pickup-delivery",
    heading: "Pickup & Delivery Policy",
    bullets: [
      "Minimum order for pickup & delivery: ₹300",
      "Free pickup & delivery above ₹500",
      "₹50 charge for orders below ₹500",
      "Ironing-only orders: Minimum 20 garments for pickup",
      "Less than 20 garments: Store drop-off required",
    ],
  },
  {
    id: "home-delivery",
    heading: "Home Pickup & Delivery Policy",
    intro:
      "To serve you better and manage routes efficiently, we follow the below delivery policy:",
    bullets: [
      "Order Value ₹500 & Above — FREE Home Delivery (if selected at the time of billing)",
      "Order Value Below ₹500 — ₹50 Delivery Charge (if selected at the time of billing)",
    ],
    outro: [
      "We request customers to kindly confirm delivery requirements at the time of billing to avoid additional charges. Thank you for your understanding and support.",
    ],
  },
  {
    id: "extended-service-area",
    heading: "Extended Service Area Pickup & Delivery Requests",
    intro:
      "For customers located beyond 5 km and up to 10 km from our store, the following conditions apply:",
    subs: [
      {
        heading: "Extended Service Area (5–10 km)",
        bullets: [
          "Minimum Order Value: ₹1000",
          "Pickup Charge: ₹100",
          "Delivery Charge: ₹100",
          "Service Window: 12 PM – 4 PM (off-peak hours)",
        ],
      },
      {
        heading: "Please Note",
        bullets: [
          "Service is offered on a case-to-case basis, subject to route availability.",
          "This service may not be available during weekends, peak operational days, and festive seasons when order load is high.",
        ],
      },
    ],
    outro: ["Thank you for your understanding."],
  },
  {
    id: "acceptance-of-terms",
    heading: "Acceptance of Terms",
    intro: "Submitting garments for service implies that the customer:",
    bullets: [
      "has read and understood the terms",
      "accepts the liability limits",
      "agrees to the service conditions stated above.",
    ],
  },
];

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="mt-4 space-y-2.5">
      {items.map((b) => (
        <li key={b} className="flex gap-3 text-[15px] leading-relaxed text-muted-foreground">
          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  );
}

function Ordered({ items }: { items: string[] }) {
  return (
    <ol className="mt-4 space-y-3">
      {items.map((b, i) => (
        <li key={b} className="flex gap-3 text-[15px] leading-relaxed text-muted-foreground">
          <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-secondary text-xs font-medium text-primary">
            {i + 1}
          </span>
          <span>{b}</span>
        </li>
      ))}
    </ol>
  );
}

function TermsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Complete service policy"
        title="Terms & Conditions"
        subtitle={`Namma Laundry processes thousands of garments every year using professional garment care methods and quality control procedures. While every garment is handled with utmost care, certain risks may arise due to fabric sensitivity, dye instability, manufacturing defects, or operational factors. By submitting garments for service, customers acknowledge and agree to the following terms.`}
      >
        <Button asChild variant="secondary">
          <a href={telLink}>
            <Phone className="size-4" /> {site.phoneDisplay}
          </a>
        </Button>
        <Button asChild variant="outline" className="border-gold/60 bg-transparent text-gold hover:bg-gold/10 hover:text-gold">
          <Link to="/contact">Contact & booking</Link>
        </Button>
      </PageHeader>

      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 lg:grid-cols-[260px_minmax(0,1fr)] lg:px-6">
        <nav aria-label="Terms sections" className="hidden lg:block">
          <div className="sticky top-28 card-elegant p-5">
            <p className="text-xs uppercase tracking-[0.18em] text-muted-foreground">On this page</p>
            <div className="rule-gold mt-3" />
            <ul className="mt-4 space-y-2 text-sm">
              {sections.map((s) => (
                <li key={s.id}>
                  <a href={`#${s.id}`} className="text-muted-foreground transition-colors hover:text-primary">
                    {s.heading}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <div className="min-w-0 space-y-8">
          {sections.map((s) => (
            <section key={s.id} id={s.id} className="card-elegant scroll-mt-28 p-6 sm:p-8">
              <h2 className="font-display text-xl text-primary sm:text-2xl">{s.heading}</h2>
              <div className="rule-gold mt-3" />

              {s.intro ? (
                <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">{s.intro}</p>
              ) : null}
              {s.bullets ? <Bullets items={s.bullets} /> : null}
              {s.ordered ? <Ordered items={s.ordered} /> : null}

              {s.table ? (
                <div className="mt-5 overflow-x-auto rounded-xl border border-border">
                  <table className="w-full min-w-[420px] border-collapse text-left text-sm">
                    <thead>
                      <tr className="surface-cream">
                        <th className="px-4 py-3 font-medium text-primary">{s.table.head[0]}</th>
                        <th className="px-4 py-3 font-medium text-primary">{s.table.head[1]}</th>
                      </tr>
                    </thead>
                    <tbody>
                      {s.table.rows.map(([a, b]) => (
                        <tr key={a} className="border-t border-border">
                          <td className="px-4 py-3">{a}</td>
                          <td className="px-4 py-3 text-muted-foreground">{b}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              ) : null}

              {s.subs?.map((sub) => (
                <div key={sub.heading} className="mt-6 border-t border-border pt-5 first:border-0">
                  <h3 className="font-display text-lg text-primary">{sub.heading}</h3>
                  {sub.intro ? (
                    <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">{sub.intro}</p>
                  ) : null}
                  {sub.bullets ? <Bullets items={sub.bullets} /> : null}
                  {sub.ordered ? <Ordered items={sub.ordered} /> : null}
                </div>
              ))}

              {s.outro?.map((p) => (
                <p key={p} className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}

              {s.id === "home-delivery" ? (
                <div className="mt-5 flex gap-3 rounded-xl border border-accent/40 bg-accent/10 p-4">
                  <AlertTriangle className="mt-0.5 size-5 shrink-0 text-accent-foreground" />
                  <p className="text-[15px] leading-relaxed">
                    <strong className="font-medium">Important notice:</strong> If Home Delivery is
                    requested later (after billing), a ₹100 Convenience Charge will be applicable.
                    This helps us manage last-minute route adjustments and delivery scheduling.
                  </p>
                </div>
              ) : null}
            </section>
          ))}

          <section className="card-elegant p-6 sm:p-8">
            <h2 className="font-display text-xl text-primary sm:text-2xl">Namma Laundry</h2>
            <div className="rule-gold mt-3" />
            <address className="mt-5 text-[15px] not-italic leading-relaxed text-muted-foreground">
              B-2, PNR Complex, 1415,
              <br />
              Shree Ananth Nagar Layout, Phase II,
              <br />
              Electronic City, Phase-2,
              <br />
              Bengaluru, Karnataka 560100
              <br />
              <span className="mt-3 block">
                Contact No:{" "}
                <a href={telLink} className="font-medium text-primary hover:underline">
                  9148390404
                </a>
              </span>
            </address>
          </section>
        </div>
      </div>

      <CtaSection />
    </>
  );
}
