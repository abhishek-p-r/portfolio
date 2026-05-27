import { motion } from "framer-motion";
import { Github, ExternalLink, GitBranch, Star, Activity, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function GitHubSection() {
  return (
    <section className="relative z-[2] pb-28">
      <div className="max-w-[1240px] mx-auto px-5 md:px-14">
        <div className="section-label">Open Source</div>
        <h2
          className="font-display font-extrabold tracking-[-2px] leading-[0.95] mb-14"
          style={{ fontSize: "clamp(34px, 4.5vw, 54px)" }}
        >
          GitHub <span className="text-3d-stroke">Activity</span>
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="glass-card p-8 overflow-hidden relative"
          style={{ perspective: "1200px" }}
        >
          {/* Floating 3D decorative elements */}
          <motion.div
            className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-gradient-to-br from-teal/20 to-violet/10 blur-xl"
            animate={{ y: [0, -12, 0], rotateZ: [0, 180, 360] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-gradient-to-tr from-violet/15 to-teal/10 blur-2xl"
            animate={{ y: [0, 10, 0], rotateZ: [360, 180, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />

          {/* Header */}
          <div className="flex items-center gap-3 mb-8 relative z-10">
            <motion.div
              animate={{ rotateY: [0, 360] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
              style={{ transformStyle: "preserve-3d" }}
            >
              <Github className="w-8 h-8 text-teal" />
            </motion.div>
            <span className="font-display text-xl font-bold">abhishek-p-r</span>
            <a href="https://github.com/abhishek-p-r" target="_blank" rel="noopener noreferrer" className="ml-auto">
              <Button variant="teal-outline" size="sm">
                <ExternalLink className="w-3 h-3" /> View Profile
              </Button>
            </a>
          </div>

          {/* GitHub contribution graph */}
          <motion.div
            className="w-full overflow-x-auto rounded-xl border border-border bg-background/80 backdrop-blur-sm p-5 relative"
            whileHover={{ rotateX: 3, rotateY: -3, scale: 1.01 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            style={{ transformStyle: "preserve-3d" }}
          >
            <motion.div
              className="absolute inset-0 rounded-xl bg-gradient-to-r from-teal/5 via-transparent to-violet/5 opacity-0 hover:opacity-100 transition-opacity duration-500"
            />
            <img
              src="https://ghchart.rshah.org/00e5c3/abhishek-p-r"
              alt="GitHub Contributions"
              className="w-full min-w-[600px] relative z-10"
            />
          </motion.div>

          {/* GitHub Stats Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-8" style={{ perspective: "600px" }}>
            {[
              { icon: GitBranch, label: "Repositories", value: "10+" },
              { icon: Star, label: "Languages", value: "5+" },
              { icon: Activity, label: "Contributions", value: "Active" },
              { icon: Github, label: "Focus", value: "AI/ML & Web" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, rotateX: -20, y: 30 }}
                whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, type: "spring", stiffness: 200 }}
                className="text-center p-5 bg-muted/80 backdrop-blur-sm rounded-xl border border-border relative overflow-hidden group cursor-pointer"
                whileHover={{
                  scale: 1.08,
                  rotateY: 8,
                  rotateX: -5,
                  z: 30,
                  boxShadow: "0 20px 40px -15px rgba(0, 229, 195, 0.25)",
                }}
                style={{ transformStyle: "preserve-3d" }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-teal/10 to-violet/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
                <motion.div
                  style={{ transformStyle: "preserve-3d", translateZ: 20 }}
                >
                  <stat.icon className="w-6 h-6 text-teal mx-auto mb-2 drop-shadow-[0_0_8px_rgba(0,229,195,0.4)]" />
                  <div className="font-display text-xl font-extrabold text-gradient-teal">{stat.value}</div>
                  <div className="font-mono text-[8.5px] uppercase tracking-wider text-muted-foreground mt-1">
                    {stat.label}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* GitHub Streak Stats - using github-readme-streak-stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-8 rounded-xl border border-border bg-background/80 backdrop-blur-sm p-5 relative overflow-hidden"
            whileHover={{ rotateX: -3, rotateY: 3, scale: 1.01 }}
            style={{ transformStyle: "preserve-3d", perspective: "800px" }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-teal/5 via-transparent to-violet/5"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
            <div className="flex items-center gap-2 mb-4 relative z-10">
              <Flame className="w-5 h-5 text-teal drop-shadow-[0_0_6px_rgba(0,229,195,0.5)]" />
              <span className="font-display text-sm font-bold uppercase tracking-wider text-muted-foreground">Streak Stats</span>
            </div>
            <img
              src="https://streak-stats.demolab.com/?user=abhishek-p-r&theme=transparent&hide_border=true&ring=00e5c3&fire=00e5c3&currStreakLabel=00e5c3&sideLabels=ffffff&currStreakNum=ffffff&sideNums=ffffff&dates=888888"
              alt="GitHub Streak Stats"
              className="w-full max-w-[550px] mx-auto relative z-10"
            />
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
