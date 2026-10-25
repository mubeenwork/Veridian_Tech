import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Linkedin, Github, Instagram, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import SectionWrapper from "@/components/layout/SectionWrapper";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(1, "Phone is required").max(20),
  service: z.string().min(1, "Select a service"),
  brief: z.string().trim().min(1, "Please describe your project").max(1000),
});

type FormData = z.infer<typeof schema>;

const infoItems = [
  { icon: MapPin, label: "Office", text: "Opposite to University of Okara, Renala Khurd, Punjab, Pakistan" },
  { icon: Phone, label: "Phone", text: "+92-301-4242701" },
  { icon: Mail, label: "Email", text: "info@veridiantech.com" },
  { icon: Clock, label: "Hours", text: "Mon–Sat, 9am–7pm PKT" },
];

const socials = [
  { icon: Linkedin, href: "https://www.linkedin.com/in/mubeen-noor-/", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/mubeenwork", label: "GitHub" },
  { icon: Instagram, href: "#", label: "Instagram" },
];

const Contact = () => {
  const { toast } = useToast();
  const form = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", phone: "", service: "", brief: "" },
  });

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
    toast({ title: "Message sent!", description: "We'll get back to you within 24 hours." });
    form.reset();
  };

  return (
    <SectionWrapper id="contact">
      <div className="text-center mb-14">
        <motion.span initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
          className="inline-block text-xs font-semibold tracking-widest uppercase text-veridian-glow mb-3">
          Get In Touch
        </motion.span>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
          Let's <span className="text-veridian-glow">Talk</span>
        </h2>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Ready to bring your vision to life? Drop us a message and let's get started.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 max-w-5xl mx-auto">

        {/* Info panel */}
        <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} className="lg:col-span-2 space-y-4">

          {infoItems.map(({ icon: Icon, label, text }) => (
            <div key={label} className="flex items-start gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/40 transition-colors group">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <Icon className="text-veridian-glow" size={16} />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-medium mb-0.5">{label}</p>
                <p className="text-sm text-foreground font-medium">{text}</p>
              </div>
            </div>
          ))}

          {/* Social links */}
          <div className="p-4 rounded-xl border border-border bg-card">
            <p className="text-xs text-muted-foreground font-medium mb-3">Follow us</p>
            <div className="flex gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} aria-label={label} target="_blank" rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors text-veridian-glow">
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Form */}
        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} className="lg:col-span-3 bg-card border border-border rounded-2xl p-6 md:p-8">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField control={form.control} name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground text-xs font-semibold uppercase tracking-wider">Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" className="bg-background border-border focus:border-primary text-foreground" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                <FormField control={form.control} name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground text-xs font-semibold uppercase tracking-wider">Email</FormLabel>
                      <FormControl>
                        <Input placeholder="you@example.com" className="bg-background border-border focus:border-primary text-foreground" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <FormField control={form.control} name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground text-xs font-semibold uppercase tracking-wider">Phone</FormLabel>
                      <FormControl>
                        <Input placeholder="+92-XXX-XXXXXXX" className="bg-background border-border focus:border-primary text-foreground" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )} />
                <FormField control={form.control} name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-muted-foreground text-xs font-semibold uppercase tracking-wider">Service</FormLabel>
                      <Select onValueChange={field.onChange} value={field.value}>
                        <FormControl>
                          <SelectTrigger className="bg-background border-border focus:border-primary text-foreground">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent className="bg-card border-border">
                          <SelectItem value="web">Web App Development</SelectItem>
                          <SelectItem value="mobile">Mobile App Development</SelectItem>
                          <SelectItem value="design">UI/UX & Branding</SelectItem>
                          <SelectItem value="marketing">Digital Marketing & SEO</SelectItem>
                          <SelectItem value="cloud">Cloud & DevOps</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )} />
              </div>

              <FormField control={form.control} name="brief"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-muted-foreground text-xs font-semibold uppercase tracking-wider">Project Brief</FormLabel>
                    <FormControl>
                      <Textarea placeholder="Tell us about your project, goals, and timeline..." rows={4}
                        className="bg-background border-border focus:border-primary text-foreground resize-none" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )} />

              <Button type="submit"
                className="w-full bg-primary hover:bg-veridian-light text-primary-foreground py-6 text-base font-semibold">
                Send Message
              </Button>

              <p className="text-xs text-center text-muted-foreground">
                We respond within 24 hours · No spam, ever.
              </p>
            </form>
          </Form>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
