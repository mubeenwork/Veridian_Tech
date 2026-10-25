import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { ShieldCheck, Clock, HeadphonesIcon, TrendingUp, CheckCircle } from "lucide-react";
import SectionWrapper from "@/components/layout/SectionWrapper";

const stats = [
  { value: 150, suffix: "+", label: "Projects Delivered" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
  { value: 5, suffix: "+", label: "Years Experience" },
  { value: 24, suffix: "/7", label: "Support Available" },
];

const reasons = [
  {
    icon: ShieldCheck,
    title: "Enterprise-Grade Quality",
    description: "Every project undergoes rigorous code review, testing, and QA before delivery.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect your deadlines. Sprint-based delivery with transparent progress reports.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description: "Direct access to your dev team — no middlemen, no generic helpdesks.",
  },
  {
    icon: TrendingUp,
    title: "Growth-Focused",
    description: "We build for scale. Your product grows with your business, not against it.",
  },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: false });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) { setCount(0); return; }
    let start = 0;
    const increment = value / (2000 / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) { setCount(value); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-heading font-bold text-veridian-glow text-glow">
      {count}{suffix}
    </span>
  );
};

const WhyUs = () => {
  return (
    <SectionWrapper id="whyus">
      <div className="text-center mb-14">
        <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="inline-block text-xs font-semibold tracking-widest uppercase text-veridian-glow mb-3">
          Why Veridian
        </motion.span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          Why Choose <span className="text-veridian-glow">Us</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          We don't just write code — we build partnerships. Here's what makes us different.
        </p>
      </div>

      {/* Stats row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16">
        {stats.map((stat, i) => (
          <motion.div key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="text-center p-6 rounded-2xl border border-border bg-card hover:border-primary/40 transition-colors">
            <Counter value={stat.value} suffix={stat.suffix} />
            <p className="text-sm text-muted-foreground mt-2 font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Reasons grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 max-w-5xl mx-auto">
        {reasons.map((r, i) => (
          <motion.div key={r.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.12, duration: 0.5 }}
            className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all hover:-translate-y-1 duration-300 overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="w-11 h-11 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <r.icon className="text-veridian-glow" size={20} />
            </div>
            <h4 className="font-heading font-semibold text-foreground mb-2">{r.title}</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">{r.description}</p>
          </motion.div>
        ))}
      </div>

      {/* Trust bar */}
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        transition={{ delay: 0.4 }}
        className="mt-14 p-6 rounded-2xl border border-primary/20 bg-primary/5 max-w-3xl mx-auto">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {["No lock-in contracts", "Free discovery call", "Transparent pricing", "Signed NDA on request", "Post-launch support"].map((item) => (
            <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
              <CheckCircle size={14} className="text-veridian-glow shrink-0" />
              {item}
            </div>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  );
};

export default WhyUs;
