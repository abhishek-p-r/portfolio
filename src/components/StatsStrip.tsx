import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const stats = [
  { value: 8.15, decimals: 2, label: "CGPA / 10" },
  { value: 4, decimals: 0, label: "Projects Built", suffix: "+" },
  { value: 3, decimals: 0, label: "Internships" },
  { value: 3, decimals: 0, label: "Certifications" },
];

function AnimatedCounter({ value, decimals, suffix }: { value: number; decimals: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let current = 0;
          const step = value / 50;
          const timer = setInterval(() => {
            current += step;
            if (current >= value) { current = value; clearInterval(timer); }
            setCount(current);
          }, 28);
        }
      },
      { threshold: 0.6 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [value]);

  return (
    <div ref={ref} className="font-display text-5xl font-extrabold leading-none text-gradient-teal">
      {decimals > 0 ? count.toFixed(decimals) : Math.floor(count)}
      {suffix && count >= value ? suffix : ""}
    </div>
  );
}

export default function StatsStrip() {
  return (
    <section className="relative z-[2] py-10 px-5 md:px-14 bg-surface border-y border-border">
      <div className="flex justify-center flex-wrap gap-0">
        {stats.map((s, i) => (
          <div key={i} className="text-center px-8 md:px-12 relative">
            {i > 0 && (
              <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-10 w-px bg-border" />
            )}
            <AnimatedCounter value={s.value} decimals={s.decimals} suffix={s.suffix} />
            <div className="font-mono text-[9px] tracking-[2.5px] uppercase text-muted-foreground mt-1.5">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
