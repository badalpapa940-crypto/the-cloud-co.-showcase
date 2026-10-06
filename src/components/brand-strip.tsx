import { useState } from "react";
import { Circle, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const brands = ["OVRSZD", "Chiku"];

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
              {[0, 1, 2, 3].flatMap((repeat) => brands.map((brand) => (
                <div key={`${repeat}-${brand}`} className="flex shrink-0 items-center gap-10 pr-10 md:gap-16 md:pr-16">
                  <span className="font-display text-4xl font-bold md:text-6xl">{brand}</span>
                  <Circle className="size-3 fill-brand text-brand" />
                </div>
              )))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}