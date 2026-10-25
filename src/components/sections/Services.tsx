import { motion } from "framer-motion";
import { Globe, Smartphone, Palette, Cloud, ArrowRight, CheckCircle } from "lucide-react";
import SectionWrapper from "@/components/layout/SectionWrapper";

const services = [
  {
    number: "01",
    icon: Globe,
    title: "Web Development",
    description: "React, Next.js, Node.js — scalable web applications with REST/GraphQL APIs built for performance.",
    features: ["React / Next.js / Vue", "REST & GraphQL APIs", "Performance Optimized", "SEO Ready"],
  },
  {
    number: "02",
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Flutter & React Native solutions delivering seamless cross-platform experiences on every device.",
    features: ["Flutter & React Native", "iOS & Android", "Offline Support", "Push Notifications"],
  },
  {
    number: "03",
    icon: Palette,
    title: "UI/UX Design",
    description: "Figma-first design systems, user research, and motion UI that captivates and converts.",
    features: ["Figma Design Systems", "User Research", "Motion UI", "Brand Identity"],
  },
  {
    number: "04",
    icon: Cloud,
    title: "Cloud & DevOps",
    description: "AWS, Docker, and CI/CD pipelines — scalable infrastructure engineered for reliability and speed.",
    features: ["AWS / GCP / Azure", "Docker & Kubernetes", "CI/CD Pipelines", "99.9% Uptime SLA"],
  },
];

const Services = () => {
  return (
    <SectionWrapper id="services">
      <div className="text-center mb-14">
        <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="inline-block text-xs font-semibold tracking-widest uppercase text-veridian-glow mb-3">
          What We Do
        </motion.span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          End-to-End <span className="text-veridian-glow">Solutions</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          From idea to deployment — every layer of your digital product, handled with expertise.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {services.map((service, i) => (
          <motion.div key={service.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/60 transition-all duration-300 hover:shadow-[0_0_30px_hsl(155_100%_19%_/_0.2)] hover:-translate-y-1 cursor-pointer overflow-hidden flex flex-col"
          >
            {/* Top accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            {/* Number */}
            <span className="text-5xl font-heading font-black text-primary/10 group-hover:text-primary/20 transition-colors leading-none mb-4 select-none">
              {service.number}
            </span>

            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
              <service.icon className="text-veridian-glow" size={22} />
            </div>

            {/* Title */}
            <h3 className="text-lg font-heading font-bold text-foreground mb-2">{service.title}</h3>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{service.description}</p>

            {/* Feature list */}
            <ul className="space-y-1.5 mb-5">
              {service.features.map((f) => (
                <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <CheckCircle size={12} className="text-veridian-glow shrink-0" />
                  {f}
                </li>
              ))}
            </ul>

            {/* CTA */}
            <div className="flex items-center gap-1 text-veridian-glow text-sm font-medium opacity-0 group-hover:opacity-100 transition-all translate-y-1 group-hover:translate-y-0 duration-300">
              Learn more <ArrowRight size={14} />
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Services;
