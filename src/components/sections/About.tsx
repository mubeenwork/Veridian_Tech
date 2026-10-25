import { motion } from "framer-motion";
import SectionWrapper from "@/components/layout/SectionWrapper";
import { Award, Eye, Layers, MapPin, Users, Globe } from "lucide-react";

const values = [
  {
    icon: Award,
    title: "Quality",
    description: "Enterprise-grade code, rigorous testing, and pixel-perfect design — no shortcuts, ever.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Open communication, honest timelines, and clear reporting at every stage of your project.",
  },
  {
    icon: Layers,
    title: "Scalability",
    description: "Architectures built to grow — from MVP to millions of users without re-engineering.",
  },
];

const highlights = [
  { icon: MapPin, label: "Headquartered in", value: "Okara, Pakistan" },
  { icon: Globe, label: "Clients Across", value: "US, UK, UAE & more" },
  { icon: Users, label: "Team Size", value: "10+ Specialists" },
];

const About = () => {
  return (
    <section id="about">
      <SectionWrapper>
        <div className="max-w-5xl mx-auto">

          {/* Section label */}
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
            className="text-center mb-14">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-veridian-glow mb-3">
              Who We Are
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              About <span className="text-veridian-glow">Veridian Tech</span>
            </h2>
          </motion.div>

          {/* Story + Image */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Veridian Tech (SMC-PVT LTD) exists to bridge the gap between complex technology and user-centric design. Headquartered in Renala Khurd, Punjab, Pakistan, we partner with startups, SMEs, and enterprises who refuse to settle for "good enough."
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our multidisciplinary team combines deep engineering expertise with design thinking — transforming ambitious ideas into digital products that users love and businesses depend on.
              </p>

              {/* Highlights */}
              <div className="space-y-3">
                {highlights.map((h) => (
                  <div key={h.label} className="flex items-center gap-3 p-3 rounded-xl bg-card border border-border">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <h.icon size={16} className="text-veridian-glow" />
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground">{h.label}</span>
                      <p className="text-sm font-semibold text-foreground">{h.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
              className="relative">
              <div className="aspect-[4/3] rounded-2xl overflow-hidden border border-border relative">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                  alt="Veridian Tech team"
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />

                {/* Floating badge */}
                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-xl bg-background/80 backdrop-blur-sm border border-border flex items-center gap-3">
                  <div className="flex -space-x-2">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-primary/20 flex items-center justify-center">
                        <Users size={12} className="text-veridian-glow" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-foreground">Trusted by 50+ Clients</p>
                    <p className="text-xs text-muted-foreground">Globally across 5 countries</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-veridian-glow/20 rounded-2xl -z-10" />
            </motion.div>
          </div>

          {/* Core Values */}
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
              Our <span className="text-veridian-glow">Core Values</span>
            </h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {values.map((v, i) => (
              <motion.div key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="relative group bg-card border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-all hover:-translate-y-1 duration-300 overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
                  <v.icon className="text-veridian-glow" size={26} />
                </div>
                <h4 className="font-heading font-semibold text-foreground text-lg mb-3">{v.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default About;
