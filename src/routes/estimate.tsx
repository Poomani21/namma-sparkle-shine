import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Calculator,
  ChevronRight,
  Info,
  MessageCircle,
  Minus,
  Phone,
  Plus,
  RotateCcw,
  Shirt,
  Sparkles,
  ShoppingBag,
  Trash2,
} from "lucide-react";
import { useMemo, useState } from "react";

import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { priceGroups, priceList, pricingNotes } from "@/data/pricing";
import { site, telLink, waLink } from "@/lib/site";

export const Route = createFileRoute("/estimate")({
  head: () => ({
    meta: [
      { title: "Online Laundry Estimate | Namma Laundry" },
      {
        name: "description",
        content:
          "Build your laundry or dry cleaning basket and see an instant estimated total. Then book on WhatsApp or call us.",
      },
      { property: "og:title", content: "Get an Online Estimate | Namma Laundry" },
      { property: "og:description", content: "Instant estimated total for your order, before you book." },
      { property: "og:url", content: "/estimate" },
    ],
    links: [{ rel: "canonical", href: "/estimate" }],
  }),
  component: EstimatePage,
});

function EstimatePage() {
  const [group, setGroup] = useState<string>(priceGroups[0]);
  const [qty, setQty] = useState<Record<string, number>>({});

  const items = useMemo(() => priceList.filter((i) => i.group === group), [group]);
  const selected = useMemo(
    () =>
      priceList
        .filter((i) => (qty[i.id] ?? 0) > 0)
        .map((i) => ({ item: i, count: qty[i.id]!, line: i.price * qty[i.id]! })),
    [qty]
  );
  const total = selected.reduce((sum, s) => sum + s.line, 0);

  const change = (id: string, delta: number) =>
    setQty((prev) => {
      const next = Math.max(0, (prev[id] ?? 0) + delta);
      const copy = { ...prev };
      if (next === 0) delete copy[id];
      else copy[id] = next;
      return copy;
    });

  const summaryText =
    selected.length > 0
      ? `Hi Namma Laundry, here is my estimate:\n${selected
          .map((s) => `• ${s.item.name} x${s.count} = ₹${s.line}`)
          .join("\n")}\nEstimated total: ₹${total}`
      : "Hi Namma Laundry, I would like an estimate for my order.";

  return (
    <div className="min-h-screen bg-[#193324] text-emerald-50 font-sans selection:bg-amber-400 selection:text-emerald-950">
      <PageHeader
        eyebrow="Online estimate"
        title="Estimate your order in under a minute"
        subtitle="Pick a category, add items and quantities, and see your estimated total instantly. No sign-up needed."
      />

      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] lg:px-6">
        
        {/* ==========================================
            LEFT COLUMN: CATEGORY SELECTOR & ITEMS LIST
           ========================================== */}
        <div className="min-w-0 space-y-6">
          
          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {priceGroups.map((g) => {
              const isActive = g === group;
              return (
                <button
                  key={g}
                  type="button"
                  onClick={() => setGroup(g)}
                  className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-200 ${
                    isActive
                      ? "bg-amber-400 text-emerald-950 shadow-md shadow-amber-400/20 font-bold"
                      : "bg-[#0a1e13] text-emerald-200/80 hover:text-emerald-50 hover:bg-emerald-900/40 border border-emerald-800/40"
                  }`}
                >
                  {g}
                </button>
              );
            })}
          </div>

          {/* Active Category Header */}
          <div className="flex items-center gap-3 bg-gradient-to-r from-amber-400/20 via-amber-300/30 to-amber-400/20 border-2 border-amber-400/60 px-5 py-3 rounded-xl shadow-md">
            <div className="p-1.5 rounded-full bg-amber-400/10 border border-amber-400/40 text-amber-400">
              <Sparkles className="size-4" />
            </div>
            <h2 className="font-display text-lg font-extrabold text-amber-300 tracking-wider uppercase">
              {group} ITEMS
            </h2>
          </div>

          {/* Item List Container */}
          <div className="rounded-xl border-2 border-amber-400/40 bg-[#04120a] overflow-hidden divide-y divide-emerald-800/60 shadow-xl">
            {items.map((item) => {
              const count = qty[item.id] ?? 0;
              return (
                <div
                  key={item.id}
                  className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 py-3.5 sm:px-6 hover:bg-emerald-900/30 transition-colors"
                >
                  <div className="min-w-0 flex items-center gap-3">
                    <div className="size-8 rounded-full bg-amber-400/10 border border-amber-400/30 flex items-center justify-center text-amber-400 shrink-0 hidden sm:flex">
                      <Shirt className="size-4" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm sm:text-base font-semibold text-emerald-100 truncate">
                        {item.name}
                      </p>
                      <p className="text-xs text-amber-400/80 font-medium">
                        ₹{item.price} <span className="text-emerald-400/60">/ {item.unit}</span>
                      </p>
                    </div>
                  </div>

                  {/* Quantity Counter */}
                  <div className="flex shrink-0 items-center gap-2 bg-[#020b06] border border-amber-400/30 rounded-lg p-1">
                    <Button
                      type="button"
                      size="icon"
                      variant="ghost"
                      aria-label={`Remove one ${item.name}`}
                      onClick={() => change(item.id, -1)}
                      disabled={count === 0}
                      className="size-7 text-amber-300 hover:bg-amber-400/20 hover:text-amber-200 disabled:opacity-30 rounded-md"
                    >
                      <Minus className="size-3.5" />
                    </Button>
                    <span className="w-6 text-center text-sm font-bold text-emerald-50 tabular-nums">
                      {count}
                    </span>
                    <Button
                      type="button"
                      size="icon"
                      variant="ghost"
                      aria-label={`Add one ${item.name}`}
                      onClick={() => change(item.id, 1)}
                      className="size-7 bg-amber-400/20 text-amber-300 hover:bg-amber-400 hover:text-emerald-950 rounded-md transition-colors"
                    >
                      <Plus className="size-3.5" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ==========================================
            RIGHT COLUMN: BASKET SUMMARY & CTA SIDEBAR
           ========================================== */}
        <aside className="min-w-0">
          <div className="rounded-2xl border-2 border-amber-400/50 bg-gradient-to-b from-[#0a2315] via-[#06180e] to-[#020b06] p-6 shadow-2xl space-y-5 lg:sticky lg:top-28">
            
            {/* Sidebar Header */}
            <div className="flex items-center justify-between border-b border-amber-400/20 pb-3">
              <div className="flex items-center gap-2">
                <ShoppingBag className="size-5 text-amber-400" />
                <h2 className="font-display text-xl font-extrabold text-amber-300">
                  Your Estimate
                </h2>
              </div>
              {selected.length > 0 && (
                <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 border border-amber-400/40">
                  {selected.length} {selected.length === 1 ? "item" : "items"}
                </span>
              )}
            </div>

            {/* Selected Items List */}
            {selected.length === 0 ? (
              <div className="text-center py-8 rounded-xl border border-dashed border-emerald-800/60 bg-[#04120a] p-4 text-xs text-emerald-400/70">
                <Calculator className="size-8 text-amber-400/40 mx-auto mb-2" />
                Add items on the left to build your estimate.
              </div>
            ) : (
              <ul className="space-y-2 text-xs sm:text-sm max-h-60 overflow-y-auto pr-1 divide-y divide-emerald-900/40">
                {selected.map((s) => (
                  <li key={s.item.id} className="pt-2 grid grid-cols-[minmax(0,1fr)_auto] gap-3 items-center">
                    <span className="min-w-0 truncate text-emerald-100">
                      {s.item.name} <span className="text-amber-400/80 font-semibold">×{s.count}</span>
                    </span>
                    <span className="shrink-0 font-bold text-amber-300 tabular-nums">
                      ₹{s.line}
                    </span>
                  </li>
                ))}
              </ul>
            )}

            {/* Total Price Box */}
            <div className="border-t border-amber-400/20 pt-4 space-y-1">
              <div className="flex items-baseline justify-between">
                <span className="text-xs font-bold text-emerald-200/80 uppercase tracking-wider">
                  Estimated total
                </span>
                <span className="font-display text-3xl font-extrabold text-amber-300 tabular-nums">
                  ₹{total}
                </span>
              </div>
              <p className="text-[11px] text-emerald-400/70 leading-tight">
                Excluding GST. Final price confirmed after fabric inspection.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="grid gap-2.5 pt-2">
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-emerald-950 font-bold hover:brightness-110 border border-amber-300 shadow-lg shadow-amber-400/20"
              >
                <a href={waLink(summaryText)} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="size-4 mr-1.5 fill-current" /> Book on WhatsApp
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="bg-[#04120a] border-emerald-700/60 text-emerald-100 hover:bg-emerald-900/50 hover:text-amber-300 font-semibold"
              >
                <a href={telLink}>
                  <Phone className="size-4 mr-1.5 text-amber-400" /> Call {site.phoneDisplay}
                </a>
              </Button>

              <Button
                asChild
                variant="ghost"
                className="text-emerald-300 hover:text-amber-300 hover:bg-emerald-950/60 font-medium text-xs"
              >
                <Link to="/contact" className="flex items-center justify-center">
                  Book a pickup <ChevronRight className="size-3.5 ml-1" />
                </Link>
              </Button>

              {selected.length > 0 && (
                <Button
                  type="button"
                  variant="ghost"
                  onClick={() => setQty({})}
                  className="text-red-400/80 hover:text-red-300 hover:bg-red-950/30 text-xs mt-1"
                >
                  <RotateCcw className="size-3.5 mr-1.5" /> Clear estimate
                </Button>
              )}
            </div>

            {/* Quick Pricing Terms */}
            <div className="border-t border-emerald-800/60 pt-4 space-y-2">
              <div className="flex items-center gap-1.5 text-amber-400 text-xs font-bold uppercase tracking-wider">
                <Info className="size-3.5" /> Good to know
              </div>
              <ul className="space-y-1.5 text-[11px] text-emerald-300/80">
                {pricingNotes.slice(0, 3).map((n) => (
                  <li key={n} className="flex items-start gap-1.5">
                    <span className="text-amber-400">•</span>
                    <span>{n}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </aside>

      </div>
    </div>
  );
}