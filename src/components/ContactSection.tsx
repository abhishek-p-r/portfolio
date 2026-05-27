import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github, Send, Loader2, CheckCircle, AlertCircle, Sparkles, Rocket, Brain, Code2, Layers, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
import { toast } from "sonner";
import emailjs from "@emailjs/browser";
import { z } from "zod";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Full name is required").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(100),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

type FormData = z.infer<typeof contactSchema>;

const contactInfo = [
  { icon: Mail, label: "Email", value: "abhishekp08280@gmail.com", href: "mailto:abhishekp08280@gmail.com" },
  { icon: Phone, label: "Phone", value: "+91 77954 92755", href: "tel:+917795492755" },
  { icon: MapPin, label: "Location", value: "Ramanagar, Karnataka, India" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/abhishek--p", href: "https://linkedin.com/in/abhishek--p" },
];

export default function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [formData, setFormData] = useState<FormData>({ name: "", email: "", subject: "", message: "" });
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof FormData, string>> = {};
      result.error.errors.forEach(err => {
        const field = err.path[0] as keyof FormData;
        if (!fieldErrors[field]) fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setStatus("sending");

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: result.data.name,
          email: result.data.email,
          subject: result.data.subject,
          message: result.data.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus("sent");
      setFormData({ name: "", email: "", subject: "", message: "" });
      toast.success("✅ Message sent successfully from your portfolio!");
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      toast.error("❌ Failed to send message. Please try again.");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const fields: { key: keyof FormData; label: string; type: string; placeholder: string }[] = [
    { key: "name", label: "Full Name", type: "text", placeholder: "Your name" },
    { key: "email", label: "Email Address", type: "email", placeholder: "your@email.com" },
    { key: "subject", label: "Subject", type: "text", placeholder: "What's this about?" },
  ];

  return (
    <section id="contact" className="relative z-[2] py-28 px-5 md:px-14 bg-surface border-t border-border overflow-hidden text-center">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[radial-gradient(circle,hsl(var(--teal)/0.04),hsl(var(--violet)/0.04),transparent_70%)] pointer-events-none" />

      <div className="section-label justify-center">Let's Connect</div>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-display font-extrabold tracking-[-4px] leading-[0.88] mb-5"
        style={{ fontSize: "clamp(46px, 7vw, 92px)" }}
      >
        Got an idea?
        <span className="block text-3d-stroke">Let's build it.</span>
      </motion.h2>
      <div className="max-w-[820px] mx-auto mb-10 space-y-5">
        {/* Intro paragraph with marker-style highlights */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-[16px] md:text-[17px] text-muted-foreground leading-[1.9]"
        >
          Got an idea? Let's build something{" "}
          <span className="relative inline-block font-semibold text-teal">
            impactful
            <span className="absolute left-0 right-0 bottom-0.5 h-[6px] bg-teal/20 -z-0 rounded" />
          </span>{" "}
          together. I'm driven by the challenge of transforming concepts into{" "}
          <span className="text-foreground font-semibold">scalable, user-centric solutions</span> through thoughtful design and efficient development.
        </motion.p>

        {/* Quote callout */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass-card !transform-none relative text-left p-5 md:p-6 border-l-2 border-l-teal"
        >
          <Quote className="absolute -top-3 -left-3 w-7 h-7 p-1.5 rounded-full bg-gradient-to-br from-teal to-violet text-background" />
          <p className="text-[15.5px] md:text-[16.5px] leading-[1.85] text-foreground/90 italic">
            I believe in building not just applications, but solutions that can{" "}
            <span className="not-italic font-semibold bg-gradient-to-r from-teal to-violet bg-clip-text text-transparent">
              shape perspectives
            </span>
            , create real value, and leave a lasting impression. Let's create something meaningful — something that{" "}
            <span className="not-italic font-semibold text-foreground">changes lives, stands out, and is remembered</span>.
          </p>
        </motion.div>

        {/* Opportunities paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-[15.5px] text-muted-foreground leading-[1.9]"
        >
          <Sparkles className="inline-block w-4 h-4 text-amber mr-1.5 -mt-1" />
          I'm <span className="text-foreground font-semibold">open to opportunities</span> where I can contribute to developing{" "}
          <span className="text-foreground">intelligent systems, responsive applications, and end-to-end digital products</span> — and collaborate on innovative projects that solve <span className="text-teal font-medium">real-world problems</span> with impactful user experiences.
        </motion.p>

        {/* Focus pillar chips */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap justify-center gap-2.5 pt-2"
        >
          {[
            { icon: Brain, label: "AI / ML", color: "teal" },
            { icon: Layers, label: "Full-Stack Development", color: "violet" },
            { icon: Code2, label: "Modern Web Development", color: "teal" },
            { icon: Rocket, label: "Innovative Projects", color: "amber" },
          ].map((pill) => (
            <span
              key={pill.label}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border bg-muted/40 backdrop-blur-sm text-[12.5px] font-medium text-foreground hover:-translate-y-0.5 transition-all duration-300 ${
                pill.color === "teal"
                  ? "border-teal/30 hover:bg-teal/[0.08] hover:border-teal/50"
                  : pill.color === "violet"
                  ? "border-violet/30 hover:bg-violet/[0.08] hover:border-violet/50"
                  : "border-amber/30 hover:bg-amber/[0.08] hover:border-amber/50"
              }`}
            >
              <pill.icon
                className={`w-3.5 h-3.5 ${
                  pill.color === "teal" ? "text-teal" : pill.color === "violet" ? "text-violet" : "text-amber"
                }`}
              />
              {pill.label}
            </span>
          ))}
        </motion.div>
      </div>

      <div className="flex gap-3 justify-center flex-wrap mb-14">
        <a href="mailto:abhishekp08280@gmail.com">
          <Button variant="teal"><Mail className="w-3.5 h-3.5" /> Email Me</Button>
        </a>
        <a href="https://linkedin.com/in/abhishek--p" target="_blank" rel="noopener noreferrer">
          <Button variant="ghost-border"><Linkedin className="w-3.5 h-3.5" /> LinkedIn</Button>
        </a>
        <a href="https://github.com/abhishek-p-r" target="_blank" rel="noopener noreferrer">
          <Button variant="ghost-border"><Github className="w-3.5 h-3.5" /> GitHub</Button>
        </a>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-[920px] mx-auto text-left">
        <div>
          <div className="font-display text-xl font-bold mb-5">Contact Information</div>
          {contactInfo.map((item) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-card !transform-none flex items-start gap-3.5 p-3.5 mb-3"
            >
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-teal to-violet flex items-center justify-center flex-shrink-0">
                <item.icon className="w-3.5 h-3.5 text-background" />
              </div>
              <div>
                <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground mb-0.5">
                  {item.label}
                </div>
                {item.href ? (
                  <a href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} className="text-[13.5px] text-foreground hover:text-teal transition-colors">
                    {item.value}
                  </a>
                ) : (
                  <div className="text-[13.5px] text-foreground">{item.value}</div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card !transform-none p-6"
        >
          <form ref={formRef} onSubmit={handleSubmit} noValidate>
            {fields.map((f) => (
              <div key={f.key} className="mb-4">
                <label className="block font-mono text-[9.5px] uppercase tracking-wider text-muted-foreground mb-1.5">
                  {f.label} <span className="text-teal">*</span>
                </label>
                <input
                  type={f.type}
                  value={formData[f.key]}
                  onChange={(e) => handleChange(f.key, e.target.value)}
                  placeholder={f.placeholder}
                  className={`w-full bg-background border text-foreground text-sm px-3.5 py-2.5 rounded outline-none transition-all duration-200 focus:ring-2 focus:ring-teal/20 focus:border-teal/40 hover:border-teal/20 ${
                    errors[f.key] ? "border-destructive" : "border-border"
                  }`}
                  maxLength={f.key === "email" ? 255 : 100}
                />
                {errors[f.key] && (
                  <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-destructive text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors[f.key]}
                  </motion.p>
                )}
              </div>
            ))}
            <div className="mb-4">
              <label className="block font-mono text-[9.5px] uppercase tracking-wider text-muted-foreground mb-1.5">
                Message <span className="text-teal">*</span>
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                placeholder="Write your message..."
                className={`w-full bg-background border text-foreground text-sm px-3.5 py-2.5 rounded h-28 resize-y outline-none transition-all duration-200 focus:ring-2 focus:ring-teal/20 focus:border-teal/40 hover:border-teal/20 ${
                  errors.message ? "border-destructive" : "border-border"
                }`}
                maxLength={2000}
              />
              {errors.message && (
                <motion.p initial={{ opacity: 0, y: -5 }} animate={{ opacity: 1, y: 0 }} className="text-destructive text-xs mt-1 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.message}
                </motion.p>
              )}
            </div>
            <Button variant="teal" className="w-full" type="submit" disabled={status === "sending"}>
              {status === "sending" ? (
                <><Loader2 className="w-3.5 h-3.5 animate-spin" /> Sending...</>
              ) : (
                <><Send className="w-3.5 h-3.5" /> Send Message</>
              )}
            </Button>
            {status === "sent" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3 text-center font-mono text-xs text-teal bg-teal/[0.08] border border-teal/25 p-3 rounded flex items-center justify-center gap-2"
              >
                <CheckCircle className="w-4 h-4" /> ✅ Message sent successfully from your portfolio!
              </motion.div>
            )}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-3 text-center font-mono text-xs text-destructive bg-destructive/[0.08] border border-destructive/25 p-3 rounded flex items-center justify-center gap-2"
              >
                <AlertCircle className="w-4 h-4" /> ❌ Failed to send message. Please try again.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
