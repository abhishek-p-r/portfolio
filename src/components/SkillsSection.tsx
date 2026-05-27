import { motion, AnimatePresence } from "framer-motion";
import { Brain, Zap, Database, Code2, Wrench, Server } from "lucide-react";
import { useState } from "react";

const skillLogos: Record<string, string> = {
  Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  HTML5: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "JavaScript (ES6)": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Tailwind CSS": "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "REST APIs": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
  TensorFlow: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg",
  "Scikit-learn": "https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg",
  OpenCV: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg",
  MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  OOP: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "VS Code": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  "Jupyter Notebook": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
  "Google Colab": "https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg",
  Arduino: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
  "Eclipse IDE": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg",
};

const skillCategories = [
  {
    icon: Code2,
    title: "Programming",
    skills: [
      { name: "Java", color: "tag-teal" },
      { name: "JavaScript", color: "tag-teal" },
    ],
  },
  {
    icon: Zap,
    title: "Frontend",
    skills: [
      { name: "HTML5", color: "tag-violet" },
      { name: "CSS3", color: "tag-violet" },
      { name: "JavaScript (ES6)", color: "tag-violet" },
      { name: "React", color: "tag-violet" },
      { name: "Tailwind CSS", color: "tag-violet" },
    ],
  },
  {
    icon: Server,
    title: "Backend",
    skills: [
      { name: "Java", color: "tag-amber" },
      { name: "Node.js", color: "tag-amber" },
      { name: "REST APIs", color: "tag-amber" },
    ],
  },
  {
    icon: Brain,
    title: "AI / ML",
    skills: [
      { name: "TensorFlow", color: "tag-teal" },
      { name: "Scikit-learn", color: "tag-teal" },
      { name: "OpenCV", color: "tag-teal" },
    ],
  },
  {
    icon: Database,
    title: "Database",
    skills: [
      { name: "MongoDB", color: "tag-sky" },
      { name: "MySQL", color: "tag-sky" },
    ],
  },
  {
    icon: Code2,
    title: "Core Concepts",
    skills: [
      { name: "OOP", color: "tag-amber" },
    ],
  },
  {
    icon: Wrench,
    title: "Tools",
    skills: [
      { name: "Git", color: "tag-violet" },
      { name: "VS Code", color: "tag-violet" },
      { name: "Jupyter Notebook", color: "tag-amber" },
      { name: "Google Colab", color: "tag-amber" },
      { name: "Eclipse IDE", color: "tag-amber" },
    ],
  },
];

export default function SkillsSection() {
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [hoveredCategory, setHoveredCategory] = useState<number | null>(null);

  return (
    <section id="skills" className="relative z-[2] py-28">
      {/* 3D floating background orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute w-[500px] h-[500px] rounded-full bg-gradient-to-br from-teal/20 to-violet/10 blur-3xl"
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            rotateX: [0, 15, 0],
            rotateY: [0, 25, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          style={{ top: "10%", left: "-10%", transformStyle: "preserve-3d" }}
        />
        <motion.div
          className="absolute w-[400px] h-[400px] rounded-full bg-gradient-to-br from-violet/20 to-sky/10 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, 40, 0],
            rotateX: [0, -20, 0],
            rotateY: [0, -15, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{ bottom: "10%", right: "-10%", transformStyle: "preserve-3d" }}
        />
      </div>

      <div className="max-w-[1240px] mx-auto px-5 md:px-14" style={{ perspective: "1200px" }}>
        <motion.div
          initial={{ opacity: 0, rotateX: -15, y: 30 }}
          whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="section-label">Technical Expertise</div>
          <h2
            className="font-display font-extrabold tracking-[-2px] leading-[0.95] mb-14"
            style={{ fontSize: "clamp(34px, 4.5vw, 54px)" }}
          >
            Skills & <span className="text-3d-stroke">Stack</span>
          </h2>
        </motion.div>

        {/* Active skill logo display with 3D showcase */}
        <AnimatePresence>
          {activeSkill && skillLogos[activeSkill] && (
            <motion.div
              initial={{ opacity: 0, scale: 0.3, rotateY: -180 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.3, rotateY: 180 }}
              transition={{ type: "spring", stiffness: 150, damping: 15 }}
              className="flex flex-col items-center justify-center mb-12"
              style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
            >
              <motion.div
                className="relative w-32 h-32 rounded-3xl flex items-center justify-center p-5"
                style={{
                  transformStyle: "preserve-3d",
                  background: "linear-gradient(145deg, hsl(var(--card)/0.8), hsl(var(--surface)/0.6))",
                  boxShadow: "0 25px 50px -12px hsl(var(--teal)/0.3), 0 0 100px hsl(var(--violet)/0.2), inset 0 1px 1px rgba(255,255,255,0.1)",
                }}
                animate={{
                  rotateY: [0, 360],
                  rotateX: [0, 10, 0, -10, 0],
                }}
                transition={{
                  rotateY: { duration: 6, repeat: Infinity, ease: "linear" },
                  rotateX: { duration: 4, repeat: Infinity, ease: "easeInOut" },
                }}
              >
                {/* Glow layers */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-teal/30 via-violet/20 to-sky/30 blur-xl" />
                <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-teal via-violet to-sky opacity-20 blur-2xl" />

                <img
                  src={skillLogos[activeSkill]}
                  alt={activeSkill}
                  className="w-20 h-20 object-contain relative z-10 drop-shadow-2xl"
                  style={{ transform: "translateZ(20px)" }}
                />
              </motion.div>
              <motion.span
                className="font-display text-lg font-bold mt-5"
                style={{
                  background: "linear-gradient(135deg, hsl(var(--teal)), hsl(var(--violet)))",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {activeSkill}
              </motion.span>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {skillCategories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40, rotateX: -20 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              onHoverStart={() => setHoveredCategory(i)}
              onHoverEnd={() => setHoveredCategory(null)}
              className="relative group"
              style={{ perspective: "800px", transformStyle: "preserve-3d" }}
            >
              <motion.div
                className="relative bg-surface/80 backdrop-blur-sm p-7 rounded-2xl overflow-hidden h-full border border-white/[0.06]"
                whileHover={{
                  rotateY: 8,
                  rotateX: -5,
                  z: 30,
                  scale: 1.02,
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }}
                style={{
                  transformStyle: "preserve-3d",
                  boxShadow: hoveredCategory === i
                    ? "0 30px 60px -15px hsl(var(--teal)/0.25), 0 20px 40px -10px hsl(var(--violet)/0.15), inset 0 1px 0 rgba(255,255,255,0.1)"
                    : "0 10px 30px -10px hsl(var(--primary)/0.1)",
                }}
              >
                {/* Animated gradient border */}
                <motion.div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: "linear-gradient(135deg, hsl(var(--teal)/0.4), hsl(var(--violet)/0.4), hsl(var(--sky)/0.4))",
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "xor",
                    WebkitMaskComposite: "xor",
                    padding: "1px",
                  }}
                />

                {/* Glow effect */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-teal/20 to-violet/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                {/* Content with 3D depth */}
                <div style={{ transform: "translateZ(30px)" }}>
                  <motion.div
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal/20 to-violet/20 flex items-center justify-center mb-5"
                    whileHover={{ scale: 1.1, rotateZ: 5 }}
                    style={{ boxShadow: "0 10px 30px -10px hsl(var(--teal)/0.3)" }}
                  >
                    <cat.icon className="w-6 h-6 text-teal" />
                  </motion.div>
                  <h4 className="font-display text-lg font-bold mb-4">{cat.title}</h4>
                </div>

                <div className="flex flex-wrap gap-2" style={{ transform: "translateZ(40px)" }}>
                  {cat.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill.name}
                      className={`${skill.color} cursor-pointer select-none text-xs font-medium py-1.5 px-3 rounded-full ${activeSkill === skill.name ? 'ring-2 ring-teal shadow-[0_0_20px_hsl(var(--teal)/0.5)]' : ''}`}
                      onClick={() => setActiveSkill(activeSkill === skill.name ? null : skill.name)}
                      whileHover={{
                        scale: 1.15,
                        rotateX: 10,
                        rotateY: -10,
                        z: 20,
                      }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, z: -20 }}
                      animate={{ opacity: 1, z: 0 }}
                      transition={{ type: "spring", stiffness: 300, delay: skillIndex * 0.05 }}
                      style={{
                        transformStyle: "preserve-3d",
                        boxShadow: "0 4px 15px -3px rgba(0,0,0,0.1)",
                      }}
                    >
                      {skill.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
