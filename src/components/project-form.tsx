import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const projectTypes = ["E-commerce / Shopify", "Salon or beauty", "Café or restaurant menu", "Travel packages", "Doctor or clinic", "Something else"];
const budgets = ["Under ₹25k", "₹25k – ₹50k", "₹50k – ₹1L", "₹1L+", "Not sure yet"];
const timelines = ["ASAP", "Within a month", "1 – 3 months", "Just exploring"];
const goalOptions = ["New website", "Redesign", "Online booking", "Online payments", "Menu / catalogue", "SEO & speed"];

const schema = z.object({
  name: z.string().trim().min(1, "Please add your name").max(80),
  phone: z.string().trim().regex(/^[+\d][\d\s-]{6,18}$/, "Add a valid phone number"),
  business: z.string().trim().max(100),
  message: z.string().trim().max(600),
});

function Chips({ options, value, onToggle }: { options: string[]; value: string[]; onToggle: (v: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {options.map((o) => {
        const on = value.includes(o);
        return (
          <button
            type="button"
            key={o}
            aria-pressed={on}
            onClick={() => onToggle(o)}
            className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase transition-colors ${on ? "border-brand bg-brand text-ink" : "border-paper/25 text-paper/75 hover:border-paper/60"}`}
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}

const field = "w-full border-b border-paper/25 bg-transparent py-3 text-base text-paper outline-none placeholder:text-paper/35 focus:border-brand";
const label = "mb-3 block text-[0.68rem] font-semibold uppercase text-paper/50";

export function ProjectForm() {
  const [projectType, setProjectType] = useState(projectTypes[0]);
  const [budget, setBudget] = useState(budgets[4]);
  const [timeline, setTimeline] = useState(timelines[1]);
  const [goals, setGoals] = useState<string[]>([]);
  const [error, setError] = useState("");

  function submit(ev: React.FormEvent<HTMLFormElement>) {
    ev.preventDefault();
    const fd = new FormData(ev.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(fd));
    if (!parsed.success) {
      setError(parsed.error.issues[0].message);
      return;
    }
    setError("");
    window.open(buildWhatsAppLink({ ...parsed.data, projectType, budget, timeline, goals }), "_blank", "noopener");
  }

  return (
    <form onSubmit={submit} className="mt-14 grid gap-10 border-t border-paper/20 pt-10 lg:grid-cols-2 lg:gap-16">
      <div className="space-y-8">
        <div>
          <span className={label}>What are we building?</span>
          <Chips options={projectTypes} value={[projectType]} onToggle={setProjectType} />
        </div>
        <div>
          <span className={label}>What do you need? (pick any)</span>
          <Chips options={goalOptions} value={goals} onToggle={(g) => setGoals((p) => (p.includes(g) ? p.filter((x) => x !== g) : [...p, g]))} />
        </div>
        <div>
          <span className={label}>Budget</span>
          <Chips options={budgets} value={[budget]} onToggle={setBudget} />
        </div>
        <div>
          <span className={label}>Timeline</span>
          <Chips options={timelines} value={[timeline]} onToggle={setTimeline} />
        </div>
      </div>
      <div className="flex flex-col gap-6">
        <label><span className={label}>Your name</span><input name="name" className={field} placeholder="Full name" maxLength={80} /></label>
        <label><span className={label}>Phone / WhatsApp</span><input name="phone" inputMode="tel" className={field} placeholder="+91 …" maxLength={20} /></label>
        <label><span className={label}>Business name (optional)</span><input name="business" className={field} placeholder="Brand or company" maxLength={100} /></label>
        <label><span className={label}>Anything else? (optional)</span><textarea name="message" rows={3} className={`${field} resize-none`} placeholder="Links, ideas, references…" maxLength={600} /></label>
        {error && <p role="alert" className="text-sm text-brand">{error}</p>}
        <Button type="submit" variant="studioLight" size="lg" className="self-start">
          Start a project on WhatsApp <ArrowUpRight />
        </Button>
      </div>
    </form>
  );
}
