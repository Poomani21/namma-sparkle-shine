import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, Clock, Sparkles } from "lucide-react";

import { CtaSection } from "@/components/site/CtaBar";
import { PageHeader } from "@/components/site/PageHeader";
import { articles } from "@/data/knowledge";

export const Route = createFileRoute("/knowledge/")({
  head: () => ({
    meta: [
      { title: "Fabric Care Knowledge Centre | Namma Laundry" },
      {
        name: "description",
        content:
          "Practical guides on blanket, curtain, carpet and upholstery care, monsoon fabric care, allergen control and when to dry clean.",
      },
      { property: "og:title", content: "Knowledge Centre | Namma Laundry" },
      { property: "og:description", content: "Fabric care advice from ten years of hands-on cleaning." },
      { property: "og:url", content: "/knowledge" },
    ],
    links: [{ rel: "canonical", href: "/knowledge" }],
  }),
  component: KnowledgePage,
});

function KnowledgePage() {
  const topics = [...new Set(articles.map((a) => a.topic))];

  return (
    <div className="min-h-screen bg-[#193324] text-emerald-50 font-sans selection:bg-amber-400 selection:text-emerald-950">
      <PageHeader
        eyebrow="Knowledge centre"
        title="Fabric care advice you can actually use"
        subtitle="How often to clean what, what home washing can and cannot do, and how to keep fabrics healthy in Bengaluru's dust and monsoon."
      />

      <div className="mx-auto max-w-6xl px-4 py-12 lg:px-6">
        {topics.map((topic) => (
          <section key={topic} className="mb-14 last:mb-0">
            {/* Topic Header Badge */}
            <div className="mb-6 flex items-center gap-3 bg-gradient-to-r from-amber-400/20 via-amber-300/30 to-amber-400/20 border-2 border-amber-400/60 px-5 py-3 rounded-xl shadow-md">
              <div className="p-1.5 rounded-full bg-amber-400/10 border border-amber-400/40 text-amber-400">
                <Sparkles className="size-4" />
              </div>
              <h2 className="font-display text-lg font-extrabold text-amber-300 tracking-wider uppercase">
                {topic}
              </h2>
            </div>

            {/* Grid of Articles */}
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {articles
                .filter((a) => a.topic === topic)
                .map((a) => (
                  <Link
                    key={a.slug}
                    to="/knowledge/$slug"
                    params={{ slug: a.slug }}
                    className="group relative flex flex-col justify-between rounded-xl border-2 border-amber-400/40 bg-[#04120a] p-6 shadow-xl transition-all duration-200 hover:-translate-y-1 hover:border-amber-400 hover:bg-[#071a0f] hover:shadow-2xl hover:shadow-amber-400/10"
                  >
                    <div>
                      <div className="mb-3 flex items-center justify-between">
                        <div className="size-8 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0">
                          <BookOpen className="size-4" />
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-400/80">
                          <Clock className="size-3.5" /> {a.readMinutes} min read
                        </span>
                      </div>

                      <h3 className="font-display text-lg font-bold text-emerald-100 group-hover:text-amber-300 transition-colors">
                        {a.title}
                      </h3>

                      <p className="mt-2 text-xs sm:text-sm text-emerald-300/80 line-clamp-3 leading-relaxed">
                        {a.summary}
                      </p>
                    </div>

                    <div className="mt-6 flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-amber-400 group-hover:text-amber-300">
                      Read guide <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </Link>
                ))}
            </div>
          </section>
        ))}
      </div>

      <CtaSection
        title="Still not sure how to care for something?"
        subtitle="Send us a photo on WhatsApp and we will tell you honestly whether it needs professional cleaning."
        whatsappMessage="Hi Namma Laundry, I have a fabric care question."
      />
    </div>
  );
}