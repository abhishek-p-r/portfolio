import { useEffect, useRef } from "react";

interface Particle {
  x: number; y: number; vx: number; vy: number;
  r: number; a: number; color: string;
}

export default function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    if (!ctx) return;

    let W = 0, H = 0;
    let animId: number;
    const particles: Particle[] = [];

    function resize() {
      W = cv!.width = window.innerWidth;
      H = cv!.height = window.innerHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    function resetParticle(): Particle {
      return {
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.22, vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() * 1.4 + 0.3, a: Math.random() * 0.45 + 0.08,
        color: Math.random() > 0.6 ? "#7c3aed" : "#00e5c3",
      };
    }

    for (let i = 0; i < 100; i++) particles.push(resetParticle());

    function loop() {
      ctx!.clearRect(0, 0, W, H);
      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > W || p.y < 0 || p.y > H) Object.assign(p, resetParticle());
        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx!.fillStyle = p.color;
        ctx!.globalAlpha = p.a;
        ctx!.fill();
        ctx!.globalAlpha = 1;
      }
      // lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 85) {
            ctx!.beginPath();
            ctx!.moveTo(particles[i].x, particles[i].y);
            ctx!.lineTo(particles[j].x, particles[j].y);
            ctx!.strokeStyle = "#00e5c3";
            ctx!.globalAlpha = (1 - d / 85) * 0.055;
            ctx!.lineWidth = 0.5;
            ctx!.stroke();
            ctx!.globalAlpha = 1;
          }
        }
      }
      animId = requestAnimationFrame(loop);
    }
    loop();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 opacity-40 pointer-events-none" />;
}
