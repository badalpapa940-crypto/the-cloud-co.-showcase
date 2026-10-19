import { useState } from "react";
import { Coffee, Gem, HeartPulse, Leaf, Mountain, Pause, Play, Scissors, ShoppingBag, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const brands = [
  { name: "OVRSZD", Icon: ShoppingBag, style: "font-display font-black tracking-tighter" },
  { name: "Lumière", Icon: Sparkles, style: "font-serif italic" },
  { name: "BREWHAUS", Icon: Coffee, style: "font-mono font-bold tracking-widest" },
  { name: "Northpeak", Icon: Mountain, style: "font-display font-semibold" },
  { name: "MediCare+", Icon: HeartPulse, style: "font-sans font-extrabold" },
  { name: "verdant", Icon: Leaf, style: "font-display font-light lowercase tracking-wide" },
  { name: "Shear Co.", Icon: Scissors, style: "font-serif font-bold" },
  { name: "AURUM", Icon: Gem, style: "font-display font-bold tracking-[0.3em]" },
];

export function BrandStrip() {
  const [paused, setPaused] = useState(false);

  return (
    <section aria-label="Brands we have worked with" className="border-t border-foreground/20 bg-soft py-8 md:py-10">
      <div className="mx-auto mb-6 flex max-w-screen-2xl items-center justify-between px-5 md:px-10">
        <h2 className="text-xs font-semibold uppercase">Brands we’ve worked with</h2>
        <Button variant="ghost" size="icon" onClick={() => setPaused(!paused)} aria-label={paused ? "Play brand animation" : "Pause brand animation"} aria-pressed={paused} title={paused ? "Play brand animation" : "Pause brand animation"}>
          {paused ? <Play /> : <Pause />}
        </Button>
      </div>
      <div className="brand-marquee overflow-hidden" data-paused={paused}>
        <div className="brand-marquee-track flex w-max">
          {[0, 1].map((group) => (
            <div key={group} className="flex shrink-0 items-center" aria-hidden={group === 1 ? true : undefined}>
              {[0, 1].flatMap((repeat) => brands.map(({ name, Icon, style }) => (
                <div key={`${repeat}-${name}`} className="flex shrink-0 items-center gap-3 pr-14 text-foreground/70 transition-colors hover:text-foreground md:pr-20">
                  <Icon className="size-7 md:size-9" strokeWidth={1.75} />
                  <span className={`text-2xl md:text-4xl ${style}`}>{name}</span>
                </div>
              )))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}