import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Download, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const RESUME_URL = "https://drive.google.com/file/d/1dVfOvQMM4FyL9oBvzHsknlZFl86Bun6R/view?usp=sharing";

const navLinks = [
  { label: "Home", href: "/#home" },
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
      const s = document.documentElement.scrollTop;
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(h > 0 ? (s / h) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (location.pathname !== "/" && href.startsWith("/#")) {
      window.location.href = href;
      return;
    }
    const id = href.replace("/#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="scroll-progress" style={{ width: `${scrollProgress}%` }} />
      <nav
        className={`fixed inset-x-0 top-0 z-[800] flex items-center justify-between px-6 md:px-14 py-3.5 transition-all duration-300 ${
          scrolled
            ? "bg-background/82 backdrop-blur-2xl border-b border-border"
            : "bg-transparent"
        }`}
      >
        <Link
          to="/"
          className="font-display text-lg font-extrabold text-teal tracking-wider relative"
        >
          AP.DEV
          <span className="absolute bottom-[-3px] left-0 w-full h-px bg-gradient-to-r from-teal to-transparent" />
        </Link>

        <div className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="font-mono text-[10px] uppercase tracking-[2px] text-muted-foreground hover:text-teal transition-colors relative group"
            >
              {link.label}
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-full h-px bg-teal transition-all duration-300" />
            </button>
          ))}
          <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
            <Button variant="resume" size="sm">
              <Download className="w-3.5 h-3.5" />
              Resume
            </Button>
          </a>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-1.5"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-5 h-5 text-foreground" /> : <Menu className="w-5 h-5 text-foreground" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-x-0 top-[56px] bottom-0 z-[799] bg-background/97 backdrop-blur-xl border-t border-border flex flex-col overflow-y-auto md:hidden">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link.href)}
              className="block px-7 py-4 font-mono text-xs uppercase tracking-wider text-muted-foreground border-b border-border hover:text-teal hover:bg-teal/5 transition-all text-left"
            >
              {link.label}
            </button>
          ))}
          <div className="px-7 py-4">
            <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
              <Button variant="resume" className="w-full">
                <Download className="w-3.5 h-3.5" />
                Download Resume
              </Button>
            </a>
          </div>
        </div>
      )}
    </>
  );
}
