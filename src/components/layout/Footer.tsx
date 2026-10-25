import { Github, Linkedin, Instagram, Mail, Phone, ArrowRight } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";

const quickLinks = [
  { label: "Home", target: "home", offset: 0 },
  { label: "About", target: "about", offset: -80 },
  { label: "Services", target: "services", offset: -80 },
  { label: "Portfolio", target: "portfolio", offset: -80 },
  { label: "Contact", target: "contact", offset: -80 },
];

const services = ["Web App Development", "Mobile App Development", "UI/UX & Branding", "Cloud & DevOps", "Digital Marketing"];

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/mubeen-noor-/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/mubeenwork", label: "GitHub" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const Footer = () => {
  const { theme } = useTheme();

  const scrollTo = (target: string, offset: number) => {
    const el = document.getElementById(target);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY + offset;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <img
                src={theme === "dark" ? "/images/logo-dark.png" : "/images/logo-light.png"}
                alt="Veridian Tech"
                className="h-10 w-auto object-contain"
              />
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-5">
              Innovate. Integrate. Elevate. We engineer world-class digital products that drive growth and transform businesses.
            </p>
            <div className="flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-border bg-background flex items-center justify-center text-muted-foreground hover:text-veridian-glow hover:border-primary/40 transition-colors">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-5 text-sm uppercase tracking-wider">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.target}>
                  <button onClick={() => scrollTo(link.target, link.offset)}
                    className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-veridian-glow transition-colors group">
                    <ArrowRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-5 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s} className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-veridian-glow transition-colors cursor-default">
                  <ArrowRight size={12} className="text-primary/40 shrink-0" />
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-foreground mb-5 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-3">
              <li className="text-sm text-muted-foreground">
                Opposite to University of Okara<br />Renala Khurd, Punjab, Pakistan
              </li>
              <li>
                <a href="tel:+923014242701" className="flex items-center gap-2 text-sm text-veridian-glow hover:underline">
                  <Phone size={13} /> +92-301-4242701
                </a>
              </li>
              <li>
                <a href="mailto:info@veridiantech.com" className="flex items-center gap-2 text-sm text-veridian-glow hover:underline">
                  <Mail size={13} /> info@veridiantech.com
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Veridian Tech (SMC-PVT LTD). All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Crafted with ❤️ in Okara, Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
