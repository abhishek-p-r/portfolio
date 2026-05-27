export default function Footer() {
  return (
    <footer className="relative z-[2] px-5 md:px-14 py-5 border-t border-border bg-background flex flex-col md:flex-row justify-between items-center gap-2 text-center">
      <div className="font-mono text-[10.5px] text-muted-foreground">
        Designed & Built by <span className="text-teal">Abhishek P</span> · Ramanagar, Karnataka
      </div>
      <div className="font-mono text-[10.5px] text-muted-foreground">
        <span className="text-teal">B.E. AI & ML</span> · GEC Challakere · 2026
      </div>
    </footer>
  );
}
