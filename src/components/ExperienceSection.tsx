import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const experiences = [
  {
    role: "Web Development Intern",
    company: "Vault of Codes",
    period: "Aug – Sep 2025",
    cert: "https://drive.google.com/file/d/1HiGx4gbjIpva2L9c3d8bLf_eSGqnf-T9/view?usp=drivesdk",
    points: [
      "Developed responsive web pages using HTML, CSS, and JavaScript",
      "Implemented interactive UI components and dynamic features",
      "Practiced debugging techniques and responsive design principles",
      "Followed clean coding standards",
    ],
  },
  {
    role: "Artificial Intelligence Intern",
    company: "AD Infocom Systems",
    period: "Jul – Aug 2025",
    cert: "https://drive.google.com/file/d/1UlwnwnjUdttUBzRhwyAX0I5htZj6zHDe/view?usp=drivesdk",
    points: [
      "Completed training in machine learning and AI fundamentals",
      "Worked on assignments involving data preprocessing and model training",
      "Applied machine learning techniques to real-world problems",
    ],
  },
  {
    role: "Software Development Intern",
    company: "Tap Academy",
    period: "Feb 2026",
    cert: "https://drive.google.com/file/d/151iENp1aUxzMEE36WZa4dEmsHqyZF9zC/view?usp=drivesdk",
    points: [
      "Developed responsive applications using HTML, CSS, JavaScript, and Java",
      "Implemented backend logic using Java and OOP principles",
      "Designed relational databases using SQL and MySQL",
      "Assisted in testing, debugging, and troubleshooting applications",
    ],
  },
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="relative z-[2] pb-28">
      <div className="max-w-[1240px] mx-auto px-5 md:px-14">
        <div className="section-label">Work History</div>
        <h2
          className="font-display font-extrabold tracking-[-2px] leading-[0.95] mb-14"
          style={{ fontSize: "clamp(34px, 4.5vw, 54px)" }}
        >
          Experience & <span className="text-3d-stroke">Internships</span>
        </h2>

        {/* Timeline */}
        <div className="relative pl-10">
          <div className="absolute left-0 top-3 bottom-3 w-px bg-gradient-to-b from-teal via-violet to-transparent" />
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-7 mb-4 relative"
            >
              {/* Dot */}
              <div className="absolute -left-[46px] top-7 w-[11px] h-[11px] bg-teal rounded-full border-[3px] border-background shadow-[0_0_12px_hsl(var(--teal))]" />
              
              <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
                <div>
                  <div className="font-display text-lg font-bold">{exp.role}</div>
                  <div className="font-mono text-[11px] text-amber">↳ {exp.company}</div>
                </div>
                <span className="font-mono text-[9px] text-teal bg-teal/[0.07] border border-teal/[0.14] px-2.5 py-1 rounded-sm whitespace-nowrap">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-1 mb-4">
                {exp.points.map((p, j) => (
                  <li key={j} className="text-[13.5px] text-muted-foreground pl-4 relative leading-relaxed">
                    <span className="absolute left-0 top-1 text-[10px] text-violet">▸</span>
                    {p}
                  </li>
                ))}
              </ul>
              <a href={exp.cert} target="_blank" rel="noopener noreferrer">
                <Button variant="teal-outline" size="sm">
                  <ExternalLink className="w-3 h-3" />
                  View Certificate
                </Button>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
