import { motion } from "framer-motion";
import { ArrowRight, Github, ExternalLink, Play } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export interface Project {
  id: number;
  emoji: string;
  bg: string;
  badge: string;
  badgeColor: string;
  title: string;
  shortDesc: string;
  description: string;
  year: string;
  tags: { name: string; color: string }[];
  githubUrl?: string;
  liveUrl?: string;
  videoUrl?: string;
  highlights: string[];
  span: string;
}

export const PROJECTS: Project[] = [
  {
    id: 0,
    emoji: "🎓",
    bg: "linear-gradient(135deg,#081440,#1a0840,#0c1a38)",
    badge: "LIVE",
    badgeColor: "text-teal border-teal/30",
    title: "EduPath AI — Career & Education Advisor",
    shortDesc: "AI-powered career guidance for Kerala's education system.",
    description: "An AI-powered career guidance platform built at Smart India Hackathon 2024, targeting student dropout reduction in Kerala's government education system.",
    year: "Smart India Hackathon · 2024 · National Level",
    tags: [
      { name: "React.js", color: "tag-violet" },
      { name: "Node.js", color: "tag-violet" },
      { name: "MongoDB", color: "tag-sky" },
      { name: "NLP", color: "tag-teal" },
    ],
    githubUrl: "https://github.com/abhishek-p-r",
    highlights: [
      "Aptitude engine mapping student interests → personalised roadmaps",
      "3 stakeholder dashboards for students, parents, institutions",
      "NLP-powered career suggestions",
      "Presented at Smart India Hackathon 2024",
    ],
    span: "col-span-12 md:col-span-7",
  },
  {
    id: 1,
    emoji: "🥽",
    bg: "linear-gradient(135deg,#080818,#180530,#0a0820)",
    badge: "DEMO",
    badgeColor: "text-violet border-violet/30",
    title: "VoyageVR — Immersive Travel",
    shortDesc: "8K VR travel platform with 3D audio simulations.",
    description: "A conceptual VR travel platform democratising global exploration with 8K visuals and 3D spatial audio.",
    year: "VR Platform · 2024",
    tags: [
      { name: "React.js", color: "tag-violet" },
      { name: "Node.js", color: "tag-violet" },
      { name: "WebXR", color: "tag-teal" },
    ],
    githubUrl: "https://github.com/abhishek-p-r/Voyage-VR",
    highlights: [
      "8K photorealistic environments",
      "Spatial 3D audio integration",
      "Modular destination system",
      "Scalable VR device architecture",
    ],
    span: "col-span-12 md:col-span-5",
  },
  {
    id: 2,
    emoji: "🤖",
    bg: "linear-gradient(135deg,#180c06,#2a1206,#180a08)",
    badge: "LIVE",
    badgeColor: "text-teal border-teal/30",
    title: "GenAI Chatbot",
    shortDesc: "Live AI chatbot powered by NLP, fully deployed and publicly accessible.",
    description: "A generative AI chatbot with NLP conversational engine. Fully deployed and publicly accessible.",
    year: "AI / NLP · Live Deployment · 2023",
    tags: [
      { name: "Python", color: "tag-teal" },
      { name: "NLP", color: "tag-teal" },
      { name: "AI", color: "tag-violet" },
    ],
    githubUrl: "https://github.com/abhishek-p-r",
    liveUrl: "https://abhichatbotai.ccbp.tech/",
    highlights: [
      "NLP conversational engine",
      "Generative AI responses",
      "Fully deployed and publicly accessible",
      "Clean and intuitive chat interface",
    ],
    span: "col-span-12 md:col-span-6",
  },
  {
    id: 3,
    emoji: "📚",
    bg: "linear-gradient(135deg,#081a0a,#122810)",
    badge: "PORTAL",
    badgeColor: "text-amber border-amber/30",
    title: "Teacher World — Educational Platform",
    shortDesc: "Web-based platform for teachers and students.",
    description: "Teacher World is a web-based educational platform designed to help teachers and students interact effectively. The platform allows teachers to organize learning materials and students to access educational resources through an intuitive and responsive interface.",
    year: "Full-Stack · 2024",
    tags: [
      { name: "HTML", color: "tag-amber" },
      { name: "CSS", color: "tag-amber" },
      { name: "JavaScript", color: "tag-amber" },
    ],
    githubUrl: "https://github.com/abhishek-p-r",
    videoUrl: "https://drive.google.com/file/d/1hllKANWPAyMWPjAs1xrw4lefyDagmfYE/view?usp=drivesdk",
    highlights: [
      "Intuitive teacher-student interaction platform",
      "Organized learning material management",
      "Responsive interface design",
      "Educational resource access system",
    ],
    span: "col-span-12 md:col-span-4",
  },
];

export default function ProjectsSection() {
  const navigate = useNavigate();

  return (
    <section id="projects" className="relative z-[2] pb-28">
      <div className="max-w-[1240px] mx-auto px-5 md:px-14">
        <div className="section-label">Portfolio</div>
        <h2
          className="font-display font-extrabold tracking-[-2px] leading-[0.95] mb-4"
          style={{ fontSize: "clamp(34px, 4.5vw, 54px)" }}
        >
          Selected <span className="text-3d-stroke">Projects</span>
        </h2>
        <p className="font-mono text-[10.5px] text-muted-foreground tracking-wider mb-12">
          Click any card → full details, demo video & project dashboard
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {PROJECTS.map((proj, i) => (
            <motion.div
              key={proj.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="glass-card overflow-hidden cursor-pointer group flex flex-col"
              onClick={() => navigate(`/project/${proj.id}`)}
            >
              {/* Media */}
              <div
                className="h-[188px] flex items-center justify-center text-7xl relative overflow-hidden flex-shrink-0"
                style={{ background: proj.bg }}
              >
                <span className="group-hover:scale-105 transition-transform duration-500">
                  {proj.emoji}
                </span>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface pointer-events-none" />
                <span
                  className={`absolute top-2.5 right-2.5 font-mono text-[9px] tracking-wider uppercase px-2.5 py-1 rounded-sm flex items-center gap-1.5 bg-background/75 border ${proj.badgeColor}`}
                >
                  {proj.badge === "LIVE" && (
                    <span className="w-1.5 h-1.5 rounded-full bg-teal shadow-[0_0_6px_hsl(var(--teal))] animate-pulse-dot" />
                  )}
                  {proj.badge}
                </span>
              </div>
              
              {/* Body */}
              <div className="p-5 flex flex-col flex-1">
                <div className="font-mono text-[10px] text-muted-foreground mb-2">{proj.year}</div>
                <div className="font-display text-[17px] font-bold mb-1.5 leading-tight">{proj.title}</div>
                <p className="text-[13px] text-muted-foreground leading-relaxed mb-3">{proj.shortDesc}</p>
                <div className="flex flex-wrap gap-1 mb-3">
                  {proj.tags.map((t) => (
                    <span key={t.name} className={t.color}>{t.name}</span>
                  ))}
                </div>
                <div className="flex items-center gap-2 mt-auto pt-2">
                  <Button
                    variant="teal-outline"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/project/${proj.id}`);
                    }}
                  >
                    <Play className="w-3 h-3" />
                    View Project
                  </Button>
                  {proj.liveUrl && (
                    <a
                      href={proj.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Button variant="teal" size="sm">
                        <ExternalLink className="w-3 h-3" />
                        Live
                      </Button>
                    </a>
                  )}
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <Button variant="ghost-border" size="sm">
                        <Github className="w-3 h-3" />
                        GitHub
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
