"use client";

const BELT_ITEMS = [
  "Oil & Gas",
  "Energy",
  "Infrastructure",
  "Africa",
  "Sustainability",
  "Exploration",
  "Refining",
  "Logistics",
  "Upstream",
  "Value chain",
];

function BeltSegment() {
  return (
    <span className="inline-flex items-center gap-5 shrink-0">
      {BELT_ITEMS.map((item) => (
        <span key={item} className="text-[#0d2137]/70 font-medium text-xs tracking-wide uppercase">
          {item}
        </span>
      ))}
      <span className="text-[#0d2137]/40" aria-hidden>
        -
      </span>
    </span>
  );
}

export default function ConveyorBelt() {
  return (
    <section className="py-3 border-y border-[#0d2137]/10 bg-[#f7f8fa] overflow-hidden" aria-hidden>
      <div className="flex w-max animate-conveyor-slow">
        <BeltSegment />
        <BeltSegment />
        <BeltSegment />
      </div>
    </section>
  );
}
