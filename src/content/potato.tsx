import { AsciiLogo } from "./ascii-logo";

export function PotatoContent() {
  return (
    <div className="w-full min-h-screen bg-[var(--color-background-night,#1a1b26)] text-[var(--color-terminal-white,#c0caf5)] font-mono text-sm leading-relaxed p-4 sm:p-6 md:p-8 flex flex-col items-center">
      <AsciiLogo />

      <header className="header text-center my-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[var(--color-terminal-cyan,#7dcfff)] tracking-tight">
          Runs great on ancient hardware
        </h1>
      </header>

      <main className="main w-full max-w-4xl my-6">
        <div className="video relative aspect-video w-full rounded-xl overflow-hidden border border-[var(--border-color,rgba(65,72,104,0.8))] bg-black shadow-lg">
          <iframe
            title="Omarchy running on 2011 X220 2GB RAM (with room to spare)"
            src="https://www.youtube-nocookie.com/embed/jgSjG0IYw4o"
            className="w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </main>
    </div>
  );
}
export default PotatoContent;
