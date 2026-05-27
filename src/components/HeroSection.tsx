import { motion } from "framer-motion";
import { Code, Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const RESUME_URL = "https://drive.google.com/file/d/1dVfOvQMM4FyL9oBvzHsknlZFl86Bun6R/view?usp=sharing";
const PROFILE_IMG = "https://image2url.com/r2/default/images/1773551144698-6a655184-7993-49aa-9196-1eadf86c5a66.jpg";

const typingLines = ["ready_to_ship", "building_ai_systems", "open_to_work", "always_learning"];

function TerminalTyping() {
  const [text, setText] = useState("");
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);

  useEffect(() => {
    const timer = setInterval(() => {
      const line = typingLines[lineIdx];
      if (dir === 1) {
        if (charIdx <= line.length) {
          setText(line.slice(0, charIdx));
          setCharIdx((c) => c + 1);
        } else {
          setDir(-1);
        }
      } else {
        if (charIdx > 0) {
          setCharIdx((c) => c - 1);
          setText(line.slice(0, charIdx - 1));
        } else {
          setLineIdx((l) => (l + 1) % typingLines.length);
          setDir(1);
        }
      }
    }, 68);
    return () => clearInterval(timer);
  }, [charIdx, dir, lineIdx]);

  return (
    <span>
      {text}
      <span className="inline-block w-[7px] h-[13px] bg-teal align-middle animate-[blink_1s_step-end_infinite]" />
    </span>
  );
}

export default function HeroSection() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative z-[2] min-h-screen flex items-center px-5 md:px-14 pt-24 pb-20">
      <div className="max-w-[1240px] mx-auto w-full grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 lg:gap-20 items-center">
        {/* Left */}
        <div>
          {/* Photo */}
          <motion.div
            initial={{ opacity: 0, y: 20, rotateY: -30 }}
            animate={{ opacity: 1, y: 0, rotateY: 0 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="relative w-[148px] h-[148px] mb-8"
            style={{ perspective: "800px" }}
          >
            <div className="absolute inset-[-3px] rounded-full bg-[conic-gradient(from_0deg,hsl(var(--teal)),hsl(var(--violet)),hsl(var(--rose)),hsl(var(--teal)))] animate-[spin_8s_linear_infinite]" />
            <div className="absolute inset-[-10px] rounded-full border border-dashed border-teal/20 animate-[spin_14s_linear_infinite_reverse]" />
            <div className="absolute inset-[-18px] rounded-full border border-teal/10 animate-[spin_20s_linear_infinite]" />
            <motion.div
              className="relative z-[1] w-full h-full rounded-full overflow-hidden border-[3px] border-background shadow-[0_0_30px_hsl(var(--teal)/0.3),0_0_60px_hsl(var(--violet)/0.15)]"
              whileHover={{ scale: 1.08, rotateY: 12, rotateX: -5 }}
              transition={{ type: "spring", stiffness: 200 }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <img
                src={PROFILE_IMG}
                alt="Abhishek P"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-teal/10 via-transparent to-violet/10 pointer-events-none" />
            </motion.div>
          </motion.div>

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="inline-flex items-center gap-2 mb-5 font-mono text-[10px] uppercase tracking-[2px] text-teal border border-teal/20 px-3.5 py-1.5 rounded-sm"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-teal shadow-[0_0_6px_hsl(var(--teal))] animate-pulse-dot" />
            Open to Opportunities — Batch 2026
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 }}
            className="font-display font-extrabold leading-[0.88] tracking-[-3px] mb-2.5 whitespace-nowrap"
            style={{ fontSize: "clamp(48px, 8.5vw, 108px)" }}
          >
            <span className="text-foreground">Abhishek </span>
            <span className="text-3d-stroke">P</span>
          </motion.h1>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-[11px] text-muted-foreground tracking-wider mb-5"
          >
            AI & ML Engineering Student &nbsp;/&nbsp; Full-Stack Developer &nbsp;/&nbsp;{" "}
            <span className="text-amber">Java Enthusiast</span>
          </motion.p>

          {/* Bio */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="text-base text-muted-foreground leading-relaxed max-w-[500px] mb-9"
          >
            I am an <span className="text-teal font-medium">Artificial Intelligence and Machine Learning</span>{" "}
            engineering student passionate about building intelligent systems, modern web applications, and scalable
            software solutions.
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-3"
          >
            <Button variant="teal" onClick={() => scrollTo("projects")}>
              <Code className="w-3.5 h-3.5" />
              View Projects
            </Button>
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="resume" size="default">
                <Download className="w-3.5 h-3.5" />
                Download Resume
              </Button>
            </a>
            <Button variant="teal-outline" onClick={() => scrollTo("contact")}>
              <ArrowRight className="w-3.5 h-3.5" />
              Contact
            </Button>
          </motion.div>
        </div>

        {/* Terminal (right side) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="hidden lg:block glass-card overflow-hidden shadow-[var(--glow-teal),0_60px_120px_rgba(0,0,0,0.7)]"
        >
          <div className="bg-foreground/[0.025] px-4 py-2.5 flex items-center gap-[7px] border-b border-border">
            <span className="w-3 h-3 rounded-full bg-[#ff5f57]" />
            <span className="w-3 h-3 rounded-full bg-[#febc2e]" />
            <span className="w-3 h-3 rounded-full bg-[#28c840]" />
            <span className="font-mono text-[10px] text-muted-foreground ml-auto">abhishek@portfolio ~ zsh</span>
          </div>
          <div className="p-5 font-mono text-xs leading-[2.1]">
            <div><span className="text-violet">~</span> <span className="text-teal">cat whoami.json</span></div>
            <div className="pl-3.5 text-muted-foreground">{"{"} <span className="text-amber">"name"</span>: "Abhishek P",</div>
            <div className="pl-3.5 text-muted-foreground">&nbsp;&nbsp;<span className="text-amber">"role"</span>: "AI/ML Engineer",</div>
            <div className="pl-3.5 text-muted-foreground">&nbsp;&nbsp;<span className="text-amber">"cgpa"</span>: 8.15, <span className="text-amber">"batch"</span>: 2026,</div>
            <div className="pl-3.5 text-muted-foreground">&nbsp;&nbsp;<span className="text-amber">"internships"</span>: 3 {"}"}</div>
            <br />
            <div><span className="text-violet">~</span> <span className="text-teal">ls internships/</span></div>
            <div className="pl-3.5 text-muted-foreground">vault_of_codes/ &nbsp;ad_infocom/ &nbsp;tap_academy/</div>
            <br />
            <div><span className="text-violet">~</span> <span className="text-teal">echo $AVAILABILITY</span></div>
            <div className="pl-3.5 text-muted-foreground"><TerminalTyping /></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
