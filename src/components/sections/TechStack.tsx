import { motion } from "framer-motion";
import Marquee from "react-fast-marquee";
import SectionWrapper from "@/components/layout/SectionWrapper";

const row1 = [
  { name: "React", icon: "⚛️" },
  { name: "Next.js", icon: "▲" },
  { name: "Vue", icon: "🟢" },
  { name: "TypeScript", icon: "🔷" },
  { name: "Tailwind CSS", icon: "🎨" },
  { name: "Flutter", icon: "💙" },
  { name: "React Native", icon: "📱" },
  { name: "Swift", icon: "🍎" },
  { name: "Figma", icon: "🎯" },
];

const row2 = [
  { name: "Node.js", icon: "🟩" },
  { name: "Laravel", icon: "🔺" },
  { name: "Python", icon: "🐍" },
  { name: "PostgreSQL", icon: "🐘" },
  { name: "GraphQL", icon: "◈" },
  { name: "AWS", icon: "☁️" },
  { name: "Docker", icon: "🐳" },
  { name: "Git", icon: "🔀" },
  { name: "CI/CD", icon: "🔄" },
];

function TechPill({ name, icon }: { name: string; icon: string }) {
  return (
    <div className="flex items-center gap-2.5 px-5 py-3 mx-2 rounded-full border border-border bg-card hover:border-primary/50 hover:bg-primary/5 transition-all group cursor-default">
      <span className="text-xl group-hover:scale-110 transition-transform">{icon}</span>
      <span className="text-sm font-medium text-foreground whitespace-nowrap">{name}</span>
    </div>
  );
}

const categories = [
  { label: "Frontend", items: ["React", "Next.js", "Vue", "TypeScript", "Tailwind"] },
  { label: "Mobile", items: ["Flutter", "React Native", "Swift"] },
  { label: "Backend", items: ["Node.js", "Laravel", "Python", "GraphQL"] },
  { label: "Infrastructure", items: ["AWS", "Docker", "PostgreSQL", "CI/CD"] },
];

const TechStack = () => {
  return (
    <SectionWrapper id="techstack">
      <div className="text-center mb-14">
        <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="inline-block text-xs font-semibold tracking-widest uppercase text-veridian-glow mb-3">
          Technologies
        </motion.span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          Our <span className="text-veridian-glow">Tech Stack</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          We work with cutting-edge technologies to deliver robust, scalable solutions.
        </p>
      </div>

      {/* Category tags */}
      <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-3 mb-10">
        {categories.map((cat) => (
          <div key={cat.label} className="flex items-center gap-2 px-4 py-2 rounded-full border border-border bg-card text-sm">
            <span className="w-2 h-2 rounded-full bg-veridian-glow" />
            <span className="font-semibold text-foreground">{cat.label}:</span>
            <span className="text-muted-foreground">{cat.items.join(", ")}</span>
          </div>
        ))}
      </motion.div>

      {/* Marquee rows */}
      <div className="relative space-y-4 max-w-5xl mx-auto overflow-hidden">
        {/* Edge fades */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <Marquee speed={40} pauseOnHover gradient={false}>
            {row1.map((t) => <TechPill key={t.name} {...t} />)}
          </Marquee>
        </motion.div>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.15 }}>
          <Marquee speed={35} pauseOnHover gradient={false} direction="right">
            {row2.map((t) => <TechPill key={t.name} {...t} />)}
          </Marquee>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default TechStack;
