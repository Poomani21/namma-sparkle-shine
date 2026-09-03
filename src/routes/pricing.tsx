import { useState } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  Calculator,
  CheckCircle2,
  ChevronDown,
  ChevronUp,
  Feather,
  Home,
  Info,
  Layers,
  PackageCheck,
  Search,
  Shirt,
  Sparkles,
  Tag,
  Zap,
} from "lucide-react";

import { CtaSection } from "@/components/site/CtaBar";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
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
  const [selectedGroup, setSelectedGroup] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [collapsedGroups, setCollapsedGroups] = useState<Record<string, boolean>>({});

  const toggleGroup = (group: string) => {
    setCollapsedGroups((prev) => ({ ...prev, [group]: !prev[group] }));
  };

  const filteredItems = priceList.filter((item) => {
    const matchesGroup = selectedGroup === "All" || item.group === selectedGroup;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.group.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesGroup && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#193324] text-emerald-50 font-sans selection:bg-amber-400 selection:text-emerald-950">
      <PageHeader
        eyebrow="Price list"
        title="Clear prices, confirmed before we start"
        subtitle="Starting prices for every item we handle. Final price is confirmed after fabric inspection at pickup — never after delivery."
      >
        <Button
          asChild
          size="lg"
          className="bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-emerald-950 font-bold hover:brightness-110 border border-amber-300 shadow-lg shadow-amber-400/20"
        >
          <Link to="/estimate">
            <Calculator className="size-4 mr-2" /> Get an online estimate
          </Link>
        </Button>
      </PageHeader>

      <div className="mx-auto max-w-5xl px-4 py-10 lg:px-6 space-y-10">
        
        {/* ==========================================
            FLYER BANNERS (Shown when "All" is selected & search is empty)
           ========================================== */}
       

        {/* ==========================================
            SEARCH & FILTER BAR
           ========================================== */}
        <div className="space-y-4 pt-4">
          <div className="relative max-w-md">
            <Search className="absolute left-3.5 top-1/2 size-4 -translate-y-1/2 text-amber-400/70" />
            <Input
              type="text"
              placeholder="Search items (e.g. saree, suit, curtain)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-[#0a1e13] border-emerald-800/60 text-emerald-50 placeholder:text-emerald-400/50 focus-visible:ring-amber-400/50 h-11 rounded-xl shadow-inner"
            />
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            <button
              onClick={() => setSelectedGroup("All")}
              className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-200 ${
                selectedGroup === "All"
                  ? "bg-amber-400 text-emerald-950 shadow-md shadow-amber-400/20 font-bold"
                  : "bg-[#0a1e13] text-emerald-200/80 hover:text-emerald-50 hover:bg-emerald-900/40 border border-emerald-800/40"
              }`}
            >
              All Items
            </button>
            {priceGroups.map((group) => (
              <button
                key={group}
                onClick={() => setSelectedGroup(group)}
                className={`rounded-full px-4 py-2 text-xs font-semibold tracking-wide transition-all duration-200 ${
                  selectedGroup === group
                    ? "bg-amber-400 text-emerald-950 shadow-md shadow-amber-400/20 font-bold"
                    : "bg-[#0a1e13] text-emerald-200/80 hover:text-emerald-50 hover:bg-emerald-900/40 border border-emerald-800/40"
                }`}
              >
                {group}
              </button>
            ))}
          </div>
        </div>

        {/* ==========================================
            ITEMIZED PRICE LIST GROUPS
           ========================================== */}
        <div className="space-y-8">
          {priceGroups.map((group) => {
            if (selectedGroup !== "All" && selectedGroup !== group) return null;

            const groupItems = filteredItems.filter((i) => i.group === group);
            if (groupItems.length === 0) return null;

            const isCollapsed = collapsedGroups[group];

            return (
              <section key={group} className="space-y-3">
                <div
                  onClick={() => toggleGroup(group)}
                  className="cursor-pointer flex items-center justify-between bg-gradient-to-r from-amber-400/20 via-amber-300/30 to-amber-400/20 border-2 border-amber-400/60 px-5 py-3.5 rounded-xl shadow-md hover:border-amber-300 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-1.5 rounded-full bg-amber-400/10 border border-amber-400/40 text-amber-400">
                      <Sparkles className="size-4" />
                    </div>
                    <h2 className="font-display text-lg sm:text-xl font-extrabold text-amber-300 tracking-wider uppercase">
                      {group} PRICE LIST
                    </h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-950 text-amber-300 border border-amber-400/40">
                      {groupItems.length} items
                    </span>
                    {isCollapsed ? (
                      <ChevronDown className="size-5 text-amber-300" />
                    ) : (
                      <ChevronUp className="size-5 text-amber-300" />
                    )}
                  </div>
                </div>

                {!isCollapsed && (
                  <div className="border-2 border-amber-400/40 bg-[#04120a] rounded-xl overflow-hidden divide-y divide-emerald-800/60 shadow-xl">
                    {groupItems.map((item) => (
                      <div
                        key={item.id}
                        className="flex items-center justify-between px-6 py-3.5 hover:bg-emerald-900/30 transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <div className="size-7 rounded-full bg-amber-400/10 border border-amber-400/40 flex items-center justify-center text-amber-400 shrink-0">
                            {group.toLowerCase().includes("linen") || group.toLowerCase().includes("home") ? (
                              <Home className="size-3.5" />
                            ) : (
                              <Shirt className="size-3.5" />
                            )}
                          </div>
                          <div>
                            <span className="block text-sm sm:text-base font-semibold text-emerald-100">
                              {item.name}
                            </span>
                            <span className="block text-[11px] text-emerald-400/70 capitalize">
                              {item.unit}
                            </span>
                          </div>
                        </div>
                        <span className="font-display text-lg sm:text-xl font-extrabold text-amber-300 shrink-0">
                          {item.price} <span className="text-xs text-amber-400/80 font-normal">Rs.</span>
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            );
          })}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12 rounded-xl border border-dashed border-emerald-800/50 bg-[#04120a] text-emerald-400/80">
            No items found matching "{searchQuery}".
          </div>
        )}

        {/* ==========================================
            GOOD TO KNOW / TERMS & CONDITIONS
           ========================================== */}
        <div className="rounded-2xl border-2 border-amber-400/40 bg-gradient-to-b from-[#0a2315] via-[#06180e] to-[#020b06] p-6 sm:p-8 shadow-xl space-y-4">
          <div className="flex items-center gap-3 border-b border-emerald-800/60 pb-3">
            <div className="p-2 rounded-xl bg-amber-400/10 border border-amber-400/30 text-amber-300">
              <Info className="size-5" />
            </div>
            <h2 className="font-display text-lg font-bold text-amber-300 uppercase tracking-wider">
              Terms & Conditions / Good to know
            </h2>
          </div>
          <ul className="grid gap-3 text-xs text-emerald-100/90 sm:grid-cols-2">
            {pricingNotes.map((note, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 p-3 rounded-lg bg-[#04120a] border border-emerald-800/40"
              >
                <span className="text-amber-400 font-bold">•</span>
                <span className="leading-relaxed">{note}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <CtaSection
        title="Not sure what your order will cost?"
        subtitle="Build your basket in the online estimator and get an instant total before you book."
        whatsappMessage="Hi Namma Laundry, I would like a price for my order."
      />
    </div>
  );
}