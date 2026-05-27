import { useParams, useNavigate } from "react-router-dom";
import { PROJECTS } from "@/components/ProjectsSection";
import { ArrowLeft, Github, ExternalLink, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

function getGoogleDriveEmbedUrl(url: string): string | null {
  const match = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  if (match) return `https://drive.google.com/file/d/${match[1]}/preview`;
  return null;
}

export default function ProjectDashboard() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background text-foreground">
        <div className="text-center">
          <h1 className="font-display text-3xl font-bold mb-4">Project Not Found</h1>
          <Button variant="teal" onClick={() => navigate("/")}>
            <ArrowLeft className="w-4 h-4" /> Back Home
          </Button>
        </div>
      </div>
    );
  }

  const videoEmbed = project.videoUrl ? getGoogleDriveEmbedUrl(project.videoUrl) : null;

  return (
    <div className="min-h-screen bg-background text-foreground relative">
      <div className="noise-overlay" />

      {/* Top bar */}
      <div className="fixed top-0 inset-x-0 z-50 px-5 md:px-14 py-3 bg-background/90 backdrop-blur-2xl border-b border-border flex items-center justify-between">
        <Button variant="ghost-border" size="sm" onClick={() => navigate("/")}>
          <ArrowLeft className="w-3.5 h-3.5" /> Back
        </Button>
        <div className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
          Project Dashboard
        </div>
        <div className="flex gap-2">
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="violet-outline" size="sm">
                <Github className="w-3 h-3" /> GitHub
              </Button>
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              <Button variant="teal" size="sm">
                <ExternalLink className="w-3 h-3" /> Live
              </Button>
            </a>
          )}
        </div>
      </div>

      <div className="pt-20 pb-16 px-5 md:px-14 max-w-[1240px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_360px] gap-10">
          {/* Main content */}
          <div>
            {/* Hero */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="glass-card overflow-hidden mb-8"
            >
              <div
                className="h-[250px] flex items-center justify-center text-8xl relative"
                style={{ background: project.bg }}
              >
                {project.emoji}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-surface" />
                <span
                  className={`absolute top-4 right-4 font-mono text-[9px] tracking-wider uppercase px-3 py-1 rounded-sm flex items-center gap-1.5 bg-background/75 border ${project.badgeColor}`}
                >
                  {project.badge === "LIVE" && (
                    <span className="w-1.5 h-1.5 rounded-full bg-teal shadow-[0_0_6px_hsl(var(--teal))] animate-pulse-dot" />
                  )}
                  {project.badge}
                </span>
              </div>
              <div className="p-8">
                <div className="font-mono text-[10px] text-violet uppercase tracking-wider mb-2">
                  {project.year}
                </div>
                <h1 className="font-display text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
                  {project.title}
                </h1>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>

            {/* Video section */}
            {videoEmbed && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="glass-card overflow-hidden mb-8"
              >
                <div className="p-5 border-b border-border flex items-center gap-2">
                  <Play className="w-4 h-4 text-teal" />
                  <span className="font-mono text-xs uppercase tracking-wider text-teal">Demo Video</span>
                </div>
                <div className="aspect-video">
                  <iframe
                    src={videoEmbed}
                    className="w-full h-full border-none"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                  />
                </div>
              </motion.div>
            )}

            {/* Highlights */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card p-8"
            >
              <div className="font-mono text-[10px] uppercase tracking-wider text-teal flex items-center gap-2 mb-5">
                <span className="w-4 h-px bg-teal" />
                Key Highlights
              </div>
              <ul className="space-y-2">
                {project.highlights.map((h, i) => (
                  <li key={i} className="text-sm text-muted-foreground pl-5 relative leading-relaxed border-b border-foreground/[0.035] pb-2 last:border-0">
                    <span className="absolute left-0 top-1 text-[10px] text-violet">▸</span>
                    {h}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6 lg:sticky lg:top-20 lg:self-start">
            {/* Tech stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15 }}
              className="glass-card p-6"
            >
              <div className="font-mono text-[10px] uppercase tracking-wider text-teal flex items-center gap-2 mb-4">
                <span className="w-4 h-px bg-teal" />
                Tech Stack
              </div>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((t) => (
                  <span key={t.name} className={t.color}>{t.name}</span>
                ))}
              </div>
            </motion.div>

            {/* Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card p-6 space-y-3"
            >
              <div className="font-mono text-[10px] uppercase tracking-wider text-teal flex items-center gap-2 mb-2">
                <span className="w-4 h-px bg-teal" />
                Actions
              </div>
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="block">
                  <Button variant="violet-outline" className="w-full">
                    <Github className="w-3.5 h-3.5" /> View on GitHub
                  </Button>
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="block">
                  <Button variant="teal" className="w-full">
                    <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                  </Button>
                </a>
              )}
              <Button variant="ghost-border" className="w-full" onClick={() => navigate("/")}>
                <ArrowLeft className="w-3.5 h-3.5" /> Back to Portfolio
              </Button>
            </motion.div>

            {/* Project info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25 }}
              className="glass-card p-6"
            >
              <div className="font-mono text-[9px] uppercase tracking-wider text-muted-foreground mb-3">
                Quick Stats
              </div>
              <div className="grid grid-cols-2 gap-2.5">
                {[
                  { label: "Type", value: project.badge },
                  { label: "Year", value: project.year.split("·")[0].trim() },
                  { label: "Stack", value: `${project.tags.length} techs` },
                  { label: "Status", value: "Complete" },
                ].map((s) => (
                  <div key={s.label} className="text-center p-3 bg-muted rounded-lg border border-border">
                    <div className="font-display text-sm font-bold text-gradient-teal">{s.value}</div>
                    <div className="font-mono text-[8px] uppercase tracking-wider text-muted-foreground mt-0.5">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
