import { motion } from "framer-motion";
import { Download, Linkedin, Github, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const RESUME_URL = "https://drive.google.com/file/d/1dVfOvQMM4FyL9oBvzHsknlZFl86Bun6R/view?usp=sharing";
const PROFILE_IMG = "https://image2url.com/r2/default/images/1773551144698-6a655184-7993-49aa-9196-1eadf86c5a66.jpg";

const infoChips = [
  { label: "Location", value: "Ramanagar, Karnataka" },
  { label: "CGPA", value: "8.15 / 10" },
  { label: "Degree", value: "B.E. AI & ML" },
  { label: "Graduation", value: "June 2026" },
  
  { label: "Status", value: "● Open to Opportunities", highlight: true },
];

const socials = [
  { icon: Linkedin, href: "https://linkedin.com/in/abhishek--p", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/abhishek-p-r", label: "GitHub" },
  { icon: Mail, href: "mailto:abhishekp08280@gmail.com", label: "Email" },
  { icon: Phone, href: "tel:+917795492755", label: "Phone" },
];

export default function AboutSection() {
  return (
    <section id="about" className="relative z-[2] py-28 bg-surface border-b border-border">
      <div className="max-w-[1240px] mx-auto px-5 md:px-14">
        <div className="section-label">About Me</div>
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-10 lg:gap-16 items-start">
          {/* Photo card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-28"
          >
            <motion.div
              className="w-full aspect-[0.85] rounded-lg overflow-hidden border border-border mb-5 relative bg-muted shadow-[0_0_30px_hsl(var(--teal)/0.2),0_0_60px_hsl(var(--violet)/0.1)]"
              whileHover={{ rotateY: 8, rotateX: -4, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 200 }}
              style={{ transformStyle: "preserve-3d", perspective: "600px" }}
            >
              <img
                src={PROFILE_IMG}
                alt="Abhishek P"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-teal/10 via-transparent to-violet/10 pointer-events-none" />
            </motion.div>
            <div className="flex gap-2.5 flex-wrap">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target={s.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="w-[38px] h-[38px] rounded-full bg-muted border border-border flex items-center justify-center text-muted-foreground hover:text-teal hover:border-teal/35 hover:bg-teal/[0.06] hover:-translate-y-1 transition-all duration-300"
                  title={s.label}
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="font-display text-[28px] font-extrabold mb-5">
              Hello! I'm <span className="text-teal">Abhishek P</span>
            </h3>
            <p className="text-[15px] text-muted-foreground leading-[1.95] mb-4">
              I am an <span className="text-teal font-medium">Artificial Intelligence and Machine Learning</span>{" "}
              engineering student passionate about building intelligent systems, modern web applications, and scalable
              software solutions. I enjoy combining AI technologies with full-stack development to create innovative and
              practical applications.
            </p>
            <p className="text-[15px] text-muted-foreground leading-[1.95] mb-4">
              I believe <span className="text-teal font-medium">technology can solve real problems</span> — from
              reducing dropout rates in education to making global travel accessible through VR. Every project I build
              has a purpose.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-6 mb-8">
              {infoChips.map((chip) => (
                <div
                  key={chip.label}
                  className="glass-card !transform-none px-4 py-3.5"
                >
                  <div className="font-mono text-[9px] tracking-wider uppercase text-muted-foreground mb-1">
                    {chip.label}
                  </div>
                  <div className={`text-[13.5px] font-medium ${chip.highlight ? "text-teal" : "text-foreground"}`}>
                    {chip.value}
                  </div>
                </div>
              ))}
            </div>

            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="resume">
                <Download className="w-3.5 h-3.5" />
                Download Resume
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
